import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../axios/axios";

const InfoPage = () => {
    const navigate = useNavigate();
    const [workspaces, setWorkspaces] = useState([]);

    useEffect(() => {
        axiosInstance.get("/workspace")
            .then(res => {
                console.log("Received workspaces:", res.data); // <--- ADD THIS
                setWorkspaces(res.data);
            })
            .catch(err => console.error("Error fetching workspaces:", err));
    }, []);

    return (
        <div style={{textAlign: "center", marginTop: "100px"}}>
            <h1>Welcome</h1>

            <div style={{marginTop: "40px"}}>
                <h2>All Workspaces</h2>
                {workspaces.length === 0 ? (
                    <p>No workspaces available</p>
                ) : (
                    <ul style={{listStyle: "none", padding: 0}}>
                        {workspaces.map((ws) => (
                            <li
                                key={ws.id}
                                style={{
                                    background: "#eef",
                                    margin: "10px auto",
                                    padding: "15px",
                                    width: "300px",
                                    borderRadius: "10px",
                                    cursor: "pointer"
                                }}
                                onClick={() => navigate(`/workspace/${ws.id}`)}
                            >
                                <strong>{ws.name}</strong><br/>
                                <small>{ws.description || "No description"}</small>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default InfoPage;
