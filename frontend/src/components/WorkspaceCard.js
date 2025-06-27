import React from "react";
import { useNavigate } from "react-router-dom";

const WorkspaceCard = ({ id, name, description }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/workspace/${id}`)}
            style={{
                width: "400px",
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
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(25, 118, 210, 0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(25, 118, 210, 0.1)";
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter") navigate(`/workspace/${id}`);
            }}
        >
            <strong style={{ fontSize: "1.3rem" }}>{name}</strong>
            <p style={{ marginTop: "8px", fontSize: "1rem", color: "#555" }}>
                {description || "No description"}
            </p>


            {/* Meta Info */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.9rem",
                    color: "#666",
                }}
            >
                <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    📅 <span>Date created: 27.06.2025</span>
                </p>
                <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    👤 <span>Admin: <br></br>Evgenija Sotiroska</span>
                </p>
            </div>

                {/* Members count in a circle */}
                <div>
                    <p style={{ marginBottom: "6px", fontSize: "0.9rem", color: "#555" }}>
                        🧑‍🤝‍🧑 Members: 42 / 100
                    </p>
                    <div
                        style={{
                            backgroundColor: "#e0e0e0",
                            borderRadius: "8px",
                            height: "10px",
                            width: "100%",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                height: "100%",
                                width: `${42/ 100 * 100}%`,
                                backgroundColor: "#1976d2",
                                transition: "width 0.3s ease-in-out",
                            }}
                        />
                    </div>
                </div>

        </div>
    );
};

export default WorkspaceCard;
