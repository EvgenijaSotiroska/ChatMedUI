import React, { useState } from "react";
import axiosInstance from "../../axios/axios";
import "../css/styles.css";

const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
};

const RegisterPage = () => {
    const [form, setForm] = useState(initialState);
    const [message, setMessage] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        try {
            await axiosInstance.post("/user/register", form);
            setMessage("Registration successful!");
            setTimeout(() => setRedirect(true), 1000);
        } catch (error) {
            setMessage(error.response ? error.response.data : "Network error");
        }
    };

    if (redirect) {
        window.location.href = "/user/login";
        return null;
    }

    return (
        <div className="auth-bg">
            <div className="auth-form-container">
                <div className="auth-form-title">Register</div>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <label className="auth-input-label" htmlFor="username">Username</label>
                    <input
                        className="auth-input"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                    <label className="auth-input-label" htmlFor="password">Password</label>
                    <input
                        className="auth-input"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    <label className="auth-input-label" htmlFor="firstName">First Name</label>
                    <input
                        className="auth-input"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                    />
                    <label className="auth-input-label" htmlFor="lastName">Last Name</label>
                    <input
                        className="auth-input"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                    />
                    <button className="auth-button" type="submit">Register</button>
                </form>
                {message && <div className="auth-message">{message}</div>}
            </div>
        </div>
    );
};

export default RegisterPage;
