import {useParams} from "react-router-dom";
import NavBar from "../components/NavBar";
import WorkspaceDashboard from "../components/WorkspaceDashboard";
import React from "react";
import TaskDashboard from "../components/TaskDashboard";

const TaskDetailsPage = () => {
    const { id } = useParams()


    return (
        <div className="lay-out">
            <NavBar>

            </NavBar>
            <TaskDashboard taskId={id}>

            </TaskDashboard>

        </div>
    );
};

export default TaskDetailsPage;