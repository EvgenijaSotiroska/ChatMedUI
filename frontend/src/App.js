import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import LoginPage from "./views/Login/LoginPage";
import RegisterPage from "./views/Register/RegisterPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/user/login" element={<LoginPage />} />
                <Route path="/user/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;
