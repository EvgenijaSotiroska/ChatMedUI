import React, { useState, useEffect } from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, LabelList} from "recharts";
import axiosInstance from "../../axios/axios";

const POSITIVE_METRICS = [
    "accuracy", "clarity", "reasoning", "relevance",
    "comprehensiveness", "currency", "understanding", "empathy"
];

const NEGATIVE_METRICS = [
    "bias", "harm", "fabrication", "falsification", "plagiarism"
];

const GroupedBarChartByMetricType2 = () => {
    const [evaluations, setEvaluations] = useState([]);
    const [models, setModels] = useState([]);

    useEffect(() => {
        Promise.all([
            axiosInstance.get("/models"),
            axiosInstance.get("/evaluations")
        ]).then(([modelsRes, evaluationsRes]) => {
            setModels(modelsRes.data);
            setEvaluations(evaluationsRes.data);
        }).catch(err => {
            console.error("Error fetching data:", err);
        });
    }, []);

    // Create model name to release date map
    const modelAndDate = models.reduce((acc, m) => {
        if (m.model_name) {
            acc[m.model_name] = m.release_date;
        }
        return acc;
    }, {});

    // Calculate model statistics
    const modelStats = {};
    evaluations.forEach(e => {
        if (!e.model || !e.model.model_name) return;

        const model = e.model.model_name;

        if (!modelStats[model]) {
            modelStats[model] = {
                positive: {total: 0, count: 0},
                negative: {total: 0, count: 0}
            };
        }

        POSITIVE_METRICS.forEach(metric => {
            if (e[metric] !== undefined && e[metric] !== null) {
                modelStats[model].positive.total += e[metric];
                modelStats[model].positive.count += 1;
            }
        });

        NEGATIVE_METRICS.forEach(metric => {
            if (e[metric] !== undefined && e[metric] !== null) {
                modelStats[model].negative.total += e[metric];
                modelStats[model].negative.count += 1;
            }
        });
    });

    // Build chart data
    const chartData = Object.entries(modelStats).map(([model, stats]) => {
        const positiveAvg = stats.positive.count > 0
            ? +(stats.positive.total / stats.positive.count).toFixed(2)
            : 0;

        const negativeAvg = stats.negative.count > 0
            ? +(stats.negative.total / stats.negative.count).toFixed(2)
            : 0;

        return {
            model: `${model} (${modelAndDate[model] || ''})`,
            positive: positiveAvg,
            negative: negativeAvg
        };
    });

    if (chartData.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={chartData}
                margin={{ top: 20, bottom: 60, left: 30, right: 30 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="model"
                    angle={-30}
                    textAnchor="end"
                    height={70}
                    tick={{ fontSize: 9 }}
                />
                <YAxis
                    label={{
                        value: `Average score`,
                        angle: -90,
                        position: 'insideLeft'
                    }}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="positive" fill="#81c784" name="Positive Metrics">
                    <LabelList dataKey="positive" position="top" fontSize={12} />
                </Bar>
                <Bar dataKey="negative" fill="#e57373" name="Negative Metrics">
                    <LabelList dataKey="negative" position="top" fontSize={12} />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default GroupedBarChartByMetricType2;
