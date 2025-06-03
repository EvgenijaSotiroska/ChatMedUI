import React, {useState} from "react";

const initialState = {
    "username" : "",
    "password" : "",
}

const LoginForm = ({onSubmit}) => {
    const [form, setForm] = useState(initialState)

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
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
            <button type="submit">Login</button>
        </form>
    );
};
export default LoginForm;