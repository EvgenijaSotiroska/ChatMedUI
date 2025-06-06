import {useNavigate, useParams} from "react-router-dom";
import NavBar from "../components/NavBar";
import React, {useEffect, useState} from "react";
import './css/styles.css'

import WorkspaceDashboard from "../components/WorkspaceDashboard";

const WorkspaceDetailsPage = () => {
    const { id } = useParams()


    return (
     <div className="lay-out">
         <NavBar>

         </NavBar>
         <WorkspaceDashboard>

         </WorkspaceDashboard>
     </div>
    );
};

export default WorkspaceDetailsPage;