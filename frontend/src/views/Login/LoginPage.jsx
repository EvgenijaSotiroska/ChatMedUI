import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/axios";
import "../css/styles.css";

const initialState = {
    username: "",
    password: "",
};

const LoginPage = () => {
    const [form, setForm] = useState(initialState);
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // <-- here

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        try {
            const response = await axiosInstance.post("/user/login", form);
            setMessage(response.data || "Login successful!");
            navigate("/info");
        } catch (error) {
            setMessage(
                error.response ? error.response.data : "Login unsuccessful!"
            );
        }
    };

    return (
        <div className="auth-bg">
            <div className="auth-form-container">
                <div className="auth-form-title">Login</div>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <label className="auth-input-label" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="auth-input"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                    <label className="auth-input-label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="auth-input"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    <button className="auth-button" type="submit">
                        Login
                    </button>
                </form>
                {message && <div className="auth-message">{message}</div>}
            </div>
        </div>
    );
};

export default LoginPage;
