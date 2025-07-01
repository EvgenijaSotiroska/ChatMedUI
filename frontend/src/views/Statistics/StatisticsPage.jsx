import {useEffect, useState} from "react";
import axiosInstance from "../../axios/axios";
import Selector from "../../components/statistics/Selector"
import {Box, Typography, Divider} from "@mui/material";
import BarChartByMetric from "../../components/charts/BarChartByMetric";
import BoxPlotByMetric from "../../components/charts/BoxPlotByMetric";
import GroupedBarChart from "../../components/charts/GroupedBarChart";
import GroupedBarChartByMetricType2 from "../../components/charts/GroupedBarChartByMetricType2";

const EXCLUDED_KEYS = ["question", "model", "user", "comment","id"];

const StatisticsPage = () => {
    const [groupedMetric, setGroupedMetric] = useState("understanding");
    const [singleMetric, setSingleMetric] = useState("understanding");
    const [selectedField, setSelectedField] = useState("Diagnostic evaluation")
    const [metricType, setMetricType] = useState("")
    const [boxMetric, setBoxMetric]  = useState("understanding")

    const [evaluations, setEvaluations] = useState([]);
    const [fields, setFields] = useState([]);

    useEffect(() => {
        axiosInstance.get("/evaluations")
            .then(res => setEvaluations(res.data))
            .catch(err => console.error("Error fetching evaluations:", err));

        axiosInstance.get("/fields")
            .then(res => setFields(res.data))
            .catch(err => console.error("Error fetching fields:", err));
    }, []);



    // const [selectedDomain, setSelectedDomain] = useState("")

    // Extract metric keys
    const allMetricsKeys = evaluations.length > 0 ? Object.keys(evaluations[0]) : [];
    const metricKeys = allMetricsKeys.filter(k => !EXCLUDED_KEYS.includes(k));

    //Extract fields
    const fieldOptions = fields.map(f => ({
        value: f.field_id,
        label: f.field_text
    }));

    const metricTypes = [
        {label: "Positive metrics", value: "positive"},
        {label: "Negative metrics", value: "negative"}
    ];

    return (
        <>
            <Box sx={{
                flexGrow: 1,
                px: {xs: 2, sm: 4, md: 8},
                py: 5,
            }}>
                <Selector
                    label="Select Metric"
                    options={metricKeys}
                    value={groupedMetric}
                    onChange={(e) => setGroupedMetric(e.target.value)}
                />

                <Selector
                    label="Select Field"
                    options={fieldOptions}
                    value={selectedField}
                    onChange={(e) => setSelectedField(e.target.value)}
                />

                <Typography variant='h6' textAlign="center">
                    <strong>
                        {groupedMetric.charAt(0).toUpperCase() + groupedMetric.slice(1)}
                    </strong>
                    {" "} by Domain in Field:{" "}
                    <strong>
                        {fieldOptions.find(f => f.value === selectedField)?.label || "—"}
                    </strong>
                </Typography>

                <GroupedBarChart
                    selectedField={selectedField}
                    selectedMetric={groupedMetric}>
                </GroupedBarChart>
            </Box>
            <Divider/>
            <Box sx={{
                flexGrow: 1,
                px: {xs: 2, sm: 4, md: 8},
                py: 5
            }}>

                <Selector
                    label="Select Metric"
                    options={metricKeys}
                    value={singleMetric}
                    onChange={(e) => setSingleMetric(e.target.value)}
                />
                <Typography variant='h6' textAlign="center">
                    Average <strong>{singleMetric}</strong> by model:
                </Typography>
                <BarChartByMetric
                    onChange={(e) => setSingleMetric(e.target.value)}
                    selectedMetric={singleMetric}/>
            </Box>
            <Divider/>
            <Box sx={{
                flexGrow: 1,
                px: {xs: 2, sm: 4, md: 8},
                py: 5
            }}>
                <Typography variant="h6" textAlign="center">
                    Average score of <strong>positive</strong> and <strong>negative</strong> metrics by model:
                </Typography>

               <GroupedBarChartByMetricType2/>

            </Box>
            <Divider/>
            <Box sx={{
                flexGrow: 1,
                px: {xs: 2, sm: 4, md: 8},
                py: 5
            }}>
                <Selector
                    label="Select Metric"
                    options={metricKeys}
                    value={boxMetric}
                    onChange={(e) => setBoxMetric(e.target.value)}
                />
                <Typography variant='h6' textAlign="center">
                    Distribution of <strong>{boxMetric}</strong> by model:
                </Typography>
                <BoxPlotByMetric selectedMetric={boxMetric} />

            </Box>
        </>
    );
};

export default StatisticsPage;