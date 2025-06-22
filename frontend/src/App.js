import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/Home/HomePage";
import LoginPage from "./views/Login/LoginPage";
import RegisterPage from "./views/Register/RegisterPage";
import InfoPage from "./views/InfoPage";
import WorkspaceDetailsPage from "./views/WorkspaceDetailsPage";
import TaskDetailsPage from "./views/TaskDetailsPage";
import ProgressOverviewPage from "./views/ProgressOverviewPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/user/login" element={<LoginPage />} />
                <Route path="/user/register" element={<RegisterPage />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="/workspace/:id" element={<WorkspaceDetailsPage />} />
                <Route path="/task/:id" element={<TaskDetailsPage />} />
                <Route path="/progress" element={<ProgressOverviewPage />} />
            </Routes>
        </Router>
    );
}

export default App;
