import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/axios";
import NavBar from "../../components/nav/NavBar";
import WorkspaceCard from "../../components/dashboards/WorkspaceCard";

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
                //padding: "40px 20px",
                 fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                 color: "#1976d2",
                display: "flex",
                flexDirection: "row",
                // alignItems: "center",
            }}
        >
            <NavBar></NavBar>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: "150px"
                }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "10px" }}>
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
                        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                        gap: "20px",
                        width: "100%",
                        maxWidth: "900px",
                        padding: "0 20px",
                        marginBottom: "20px",
                    }}
                >
                    {workspaces.map((ws) => (
                        <WorkspaceCard
                            key={ws.id}
                            id={ws.id}
                            name={ws.name}
                            description={ws.description}
                        />
                    ))}
                </div>
            )}
            </div>
        </div>
    );
};

export default InfoPage;
