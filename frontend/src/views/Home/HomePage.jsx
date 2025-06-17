import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f7f8fa",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: "#1976d2",
                padding: "20px",
            }}
        >
            <h1
                style={{
                    fontSize: "3rem",
                    marginBottom: "2rem",
                    fontWeight: "700",
                    textAlign: "center",
                    textShadow: "1px 1px 4px rgba(25, 118, 210, 0.3)",
                }}
            >
                Welcome!
            </h1>

            <div style={{ display: "flex", gap: "20px" }}>
                <button
                    onClick={() => navigate("/user/login")}
                    style={{
                        padding: "14px 36px",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        borderRadius: "999px",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: "#1976d2",
                        color: "white",
                        boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
                        transition: "background-color 0.3s, transform 0.2s",
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = "#125ea6";
                        e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = "#1976d2";
                        e.currentTarget.style.transform = "scale(1)";
                    }}
                >
                    Login
                </button>

                <button
                    onClick={() => navigate("/user/register")}
                    style={{
                        padding: "14px 36px",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        borderRadius: "999px",
                        border: "2px solid #1976d2",
                        backgroundColor: "transparent",
                        color: "#1976d2",
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)",
                        transition: "background-color 0.3s, color 0.3s, transform 0.2s",
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = "#1976d2";
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#1976d2";
                        e.currentTarget.style.transform = "scale(1)";
                    }}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default HomePage;
