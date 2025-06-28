import React, { useState, useEffect } from 'react';
import {
    ResponsiveContainer, BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import axiosInstance from "../../axios/axios";

const getColor = (id) => {
    const colors = ['#e57373', '#64b5f6', '#81c784', '#ba68c8'];
    const index = parseInt(id.replace(/\D/g, '')) || 0;
    return colors[index % colors.length];
};

const GroupedBarChart = ({selectedField, selectedMetric}) => {
    const [questions, setQuestions] = useState([]);
    const [evaluations, setEvaluations] = useState([]);
    const [models, setModels] = useState([]);
    const [domains, setDomains] = useState([]);

    useEffect(() => {
        axiosInstance.get("/domains")
            .then(res => setDomains(res.data))
            .catch(err => console.error("Error fetching domains:", err));

        axiosInstance.get("/models")
            .then(res => setModels(res.data))
            .catch(err => console.error("Error fetching models:", err));

        axiosInstance.get("/evaluations")
            .then(res => setEvaluations(res.data))
            .catch(err => console.error("Error fetching evaluations:", err));

        axiosInstance.get("/questions")
            .then(res => setQuestions(res.data))
            .catch(err => console.error("Error fetching questions:", err));
    }, []);

    // Filter questions by selected field
    const questionsForField = questions.filter(q =>
        q.field && q.field.field_id === selectedField
    );

    // Map question IDs to domain texts
    const questionIdToDomain = questionsForField.reduce((acc, q) => {
        if (q.id && q.domain && q.domain.domain_text) {
            acc[q.id] = q.domain.domain_text;
        }
        return acc;
    }, {});

    // Get allowed question IDs
    const allowedQuestionIds = Object.keys(questionIdToDomain);

    // Filter evaluations for selected field
    const evaluationsForField = evaluations.filter(e =>
        e.question && e.question.id && allowedQuestionIds.includes(e.question.id.toString())
    );

    // Create model name to release date map
    const modelAndDate = models.reduce((acc, m) => {
        if (m.model_name) {
            acc[m.model_name] = m.release_date;
        }
        return acc;
    }, {});

    // Aggregate metric per model + domain
    const grouped = {};
    evaluationsForField.forEach(e => {
        if (!e.model || !e.model.model_name) return;

        const model = e.model.model_name;
        const domain = e.question && e.question.id ? questionIdToDomain[e.question.id] : null;
        const value = e[selectedMetric];

        if (!domain || value === undefined) return;

        if (!grouped[model]) grouped[model] = {};
        if (!grouped[model][domain]) grouped[model][domain] = {total: 0, count: 0};

        grouped[model][domain].total += value;
        grouped[model][domain].count += 1;
    });

    // Build chart data
    const chartData = Object.entries(grouped).map(([model, domainData]) => {
        const entry = { model: `${model} (${modelAndDate[model] || ''})` };
        Object.entries(domainData).forEach(([domain, {total, count}]) => {
            entry[domain] = count > 0 ? +(total / count).toFixed(2) : 0;
        });
        return entry;
    });

    // Get unique domains from the data
    const uniqueDomains = [...new Set(
        Object.values(grouped).flatMap(modelData =>
            Object.keys(modelData)
        )
    )];

    if (chartData.length === 0) {
        return <div>No data available for selected field</div>;
    }

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
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
                        value: `Average ${selectedMetric.replace(/_/g, " ")}`,
                        angle: -90,
                        position: 'insideLeft'
                    }}
                />
                <Tooltip />
                <Legend />
                {uniqueDomains.map(domain => (
                    <Bar
                        key={domain}
                        dataKey={domain}
                        fill={getColor(domain)}
                        name={domain}
                    />
                ))}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default GroupedBarChart;
