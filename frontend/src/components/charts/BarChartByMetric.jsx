import React, {useEffect, useState} from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, LabelList} from "recharts";
import { Cell } from "recharts";
import axiosInstance from "../../axios/axios";


const BarChartByMetric = ({selectedMetric}) => {
    const [evaluations, setEvaluations] = useState([]);

    useEffect(() => {
        axiosInstance.get("/evaluations")
            .then(res => setEvaluations(res.data))
            .catch(err => console.error("Error fetching evaluations:", err));

    }, []);

    //od sekoja evaluacija da go zemam model name i vrednosta za izbranata metrika
    const modelMetricMap = {};

    evaluations.forEach(e => {
        const model = e.model.model_name;
        const metric = e[selectedMetric]

        if(!modelMetricMap[model]){ //inicijalizaci
            modelMetricMap[model] = {total: 0 , count: 0}
        }
        //  Gemini: { total: 8.0, count: 2 },

        modelMetricMap[model].total += metric;
        modelMetricMap[model].count +=1;
    })

    const chartData = Object.entries(modelMetricMap).map(([model, {total, count}]) => ({
        // object entries:  ["Gemini", { total: 8.0, count: 2 }],
        //.map():  { model: "Gemini", value: 4.00 },
        model,
        value: +(total/count).toFixed(2),
    }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 30, bottom: 60 }}
            >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis
                    dataKey="model"
                    angle={-30}
                    textAnchor="end"
                    height={70}
                    tick={{ fontSize: 12 }}
                />
                <YAxis
                    label={{
                        value: `Average ${selectedMetric.replace(/_/g, " ")}`,
                        angle: -90,
                        position: 'insideLeft',
                        fontSize: 14,
                    }}
                />
                <Tooltip />
                {/*<Legend />*/}
                <Bar dataKey="value" fill="#e57373">
                    <LabelList dataKey="value" position="top" fontSize={12} />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartByMetric;