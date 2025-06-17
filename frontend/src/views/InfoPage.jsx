import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios/axios";

const InfoPage = () => {
    const navigate = useNavigate();
    const [workspaces, setWorkspaces] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/workspace")
            .then((res) => {
                console.log("Received workspaces:", res.data);
                setWorkspaces(res.data);
            })
            .catch((err) => console.error("Error fetching workspaces:", err));
    }, []);

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#f7f8fa",
                padding: "40px 20px",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: "#1976d2",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "40px" }}>
                Welcome
            </h1>

            <h2 style={{ marginBottom: "20px" }}>All Workspaces</h2>

            {workspaces.length === 0 ? (
                <p style={{ fontSize: "1.2rem", color: "#555" }}>
                    No workspaces available
                </p>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "20px",
                        width: "100%",
                        maxWidth: "1100px",
                        padding: "0 20px",
                    }}
                >
                    {workspaces.map((ws) => (
                        <div
                            key={ws.id}
                            onClick={() => navigate(`/workspace/${ws.id}`)}
                            style={{
                                backgroundColor: "#e3edf8",
                                borderRadius: "16px",
                                padding: "20px",
                                boxShadow: "0 4px 12px rgba(25, 118, 210, 0.1)",
                                color: "#1976d2",
                                cursor: "pointer",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                userSelect: "none",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.03)";
                                e.currentTarget.style.boxShadow =
                                    "0 6px 20px rgba(25, 118, 210, 0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow =
                                    "0 4px 12px rgba(25, 118, 210, 0.1)";
                            }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") navigate(`/workspace/${ws.id}`);
                            }}
                        >
                            <strong style={{ fontSize: "1.3rem" }}>{ws.name}</strong>
                            <p style={{ marginTop: "8px", fontSize: "1rem", color: "#555" }}>
                                {ws.description || "No description"}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InfoPage;
