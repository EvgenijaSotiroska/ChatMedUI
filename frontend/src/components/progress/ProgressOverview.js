import React, { useEffect, useState } from "react";
import "../../views/css/dashboard.css";
import axiosInstance from "../../axios/axios";
import { useNavigate } from "react-router-dom";

const PROGRESS = [80, 60, 25, 90, 70, 30];

const ProgressOverview = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.get("/tasks")
            .then(res => {
                const tasksWithProgress = res.data.map((task, idx) => ({
                    ...task,
                    progress: PROGRESS[idx % PROGRESS.length],
                }));
                setTasks(tasksWithProgress);
            })
            .catch(err => console.error("Error fetching tasks:", err));
    }, []);

    return (
        <div className="dashboard">
            <div className="top-bar">
                <h2 style={{ margin: 0 }}>Progress Overview</h2>
            </div>
            <div className="dashboard-grid">
                {tasks.map((task, idx) => (
                    <div className="card" key={task.id}>
                        <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 10 }}>
                            Member: {task.assignedTo.firstName} {task.assignedTo.lastName}
                        </div>
                        <div style={{ marginBottom: 10, color: "#333" }}>Progress:</div>
                        <div className="progress-bar-container" style={{ marginBottom: 16 }}>
                            <div
                                className="progress-bar"
                                style={{
                                    width: `${task.progress}%`,
                                    backgroundColor:
                                        (task.progress === 25 || task.progress === 30) ? "#b57ec5" : "#0e3d4e",
                                    height: 12,
                                    borderRadius: 6,
                                    transition: "width 0.4s",
                                }}
                            />
                        </div>
                        <button className="btn2" style={{ marginTop: 8 }}>View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressOverview;
