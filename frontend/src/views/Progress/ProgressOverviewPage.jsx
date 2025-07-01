import React from "react";
import NavBar from "../../components/nav/NavBar";
import ProgressOverview from "../../components/progress/ProgressOverview";
import '../css/styles.css';

const ProgressOverviewPage = () => (
    <div className="lay-out">
        <NavBar />
        <div style={{ flex: 1, overflowY: "auto" }}>
            <ProgressOverview />
        </div>
    </div>
);

export default ProgressOverviewPage;
