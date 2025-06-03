import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>Welcome</h1>
            <button
                style={{ margin: "10px", padding: "10px 20px" }}
                onClick={() => navigate("/user/login")}
            >
                Login
            </button>
            <button
                style={{ margin: "10px", padding: "10px 20px" }}
                onClick={() => navigate("/user/register")}
            >
                Register
            </button>
        </div>
    );
};

export default HomePage;
