import React, { useState } from "react";

const initialState = {
    "username" : "",
    "password" : "",
    "firstName": "",
    "lastName": "",
}


const RegisterForm = ({ onSubmit }) => {
    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="username"
                type="text"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                required
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
            />
            <input
                name="firstName"
                type="text"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
            />
            <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
