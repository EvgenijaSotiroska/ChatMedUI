import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/Home/HomePage";
import LoginPage from "./views/Login/LoginPage";
import RegisterPage from "./views/Register/RegisterPage";
import InfoPage from "./views/Info/InfoPage";
import WorkspaceDetailsPage from "./views/WorkspaceDetails/WorkspaceDetailsPage";
import TaskDetailsPage from "./views/TaskDetails/TaskDetailsPage";
import ProgressOverviewPage from "./views/Progress/ProgressOverviewPage";
import StatisticsPage from "./views/Statistics/StatisticsPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/user/login" element={<LoginPage />} />
                <Route path="/user/register" element={<RegisterPage />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="/workspace/:id" element={<WorkspaceDetailsPage />} />
                {/*<Route path="/task/:id" element={<TaskDetailsPage />} />*/}
                <Route path="/progress" element={<ProgressOverviewPage />} />
                <Route path="/statistics" element={<StatisticsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
