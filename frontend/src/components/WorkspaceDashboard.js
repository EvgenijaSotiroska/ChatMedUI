import React, {useEffect, useState} from 'react';
import Card from './Card';
import Button from './Button';
import '../views/css/dashboard.css';
import axiosInstance from "../axios/axios";
import '../views/css/styles.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const WorkspaceDashboard = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();
    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/tasks/delete/${id}`);
            window.location.reload();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    useEffect(() => {
        axiosInstance.get("/tasks")
            .then(res => {
                console.log("Received tasks:", res.data);
                setTasks(res.data);
            })
            .catch(err => console.error("Error fetching tasks:", err));
    }, []);

    return (
        <div>
            <div className="dashboard-grid">


                <Card className="chart-container"></Card>

                <Card>
                    <h3>Task Assignments</h3>
                    {tasks.map(task => (
                        <div key={task.id}
                             style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                            <img
                                src="https://d36ae2cxtn9mcr.cloudfront.net/wp-content/uploads/2020/12/16024303/Humanoid.png"
                                alt="task image" className="avatar"/>
                            <span>{task.name}</span>
                            <Button className="btn details" onClick={() => navigate(`/task/${task.id}`)}>Details</Button>
                            <Button className="btn update">Update</Button>
                            <Button className="btn delete" onClick={() => handleDelete(task.id)}>Delete</Button>

                        </div>
                    ))}
                </Card>

                <Card>
                    <h3>Workspace Overview</h3>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="number-border">8.2</div>
                        <ul style={{fontSize: '0.85rem', listStyleType: 'none', marginRight: '50px'}}>
                            <li style={{marginBottom: '5px'}}><img
                                src="https://i.pinimg.com/736x/5f/35/da/5f35dacf95fb235f068545c959898333.jpg"
                                alt="Example" width="22"/> Time Constraints 9.0
                            </li>
                            <li style={{marginBottom: '5px'}}><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLGp6opYc2_QJTX7fNQEM0VNXqOfu06r79g&s"
                                alt="Example" width="22"/> Difficulty: 7.8
                            </li>
                            <li style={{marginBottom: '5px'}}><img
                                src="https://img.freepik.com/premium-vector/notebook-sign-vector-image-isolated-black-background-notebook-web-icon_872756-87.jpg"
                                alt="Example" width="22"/> Specificity: 8.3
                            </li>
                            <li style={{marginBottom: '5px'}}><img
                                src="https://img.freepik.com/premium-photo/handshake-black-background-symbol-cooperation-partnership_1308175-243433.jpg?w=360"
                                alt="Example" width="22"/> Collaboration: 7.7
                            </li>
                        </ul>
                    </div>
                </Card>

                <Card className="table">
                </Card>
            </div>

            <div style={{display: 'flex', gap: '20px', alignItems: 'flex-center', marginLeft: '60px'}}>
                <div className="bottom_divs">
                    <h3 style={{marginLeft: '30px'}}>Task Feedback</h3>
                    <dl>
                        <dt style={{marginTop: '-20px'}}>
                            <img src="https://cdn.vectorstock.com/i/1000v/15/38/white-icon-on-black-background-military-medal-vector-16361538.jpg" alt="Task Icon" width="23" style={{ marginRight: '8px' , marginLeft: '5px'}} />
                            Task
                            Creation Analysis
                        </dt>
                        <dd>Task Accomplishments<br></br>Review</dd>

                        <dt style={{marginTop: '-1px'}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEe2rNgUDlsI9bmAD8QfwHs9Kf9hMDTwHc8A&s" alt="Task Icon" width="23" style={{ marginRight: '8px' , marginLeft: '5px'}} />
                            Workspace Overview
                        </dt>
                        <dd>Employee Wellness<br></br>Check-In</dd>

                        <dt style={{marginTop: '-1px'}}>
                            <img src="https://media.istockphoto.com/id/1364015241/vector/chat-message-bubbles-speech-chat-emoji-chat-icon-social-media-and-technology-vector.jpg?s=612x612&w=0&k=20&c=IHMyHC4i2SNu76zAPKUdA7hf3ziAUg5rNSYJEmlWD4g=" alt="Task Icon" width="23" style={{ marginRight: '8px' , marginLeft: '5px'}} />
                            Task Operations
                        </dt>
                        <dd>Mission and Leadership<br></br>Vision</dd>
                    </dl>
                </div>

                <Card className="bottom_card">
                    <h3 style={{marginTop: '-1px'}}>Task Insights</h3>
                    <p style={{marginTop: '-8px'}}>Opportunities for Growth</p>
                    <div className="progress-bar-container" style={{marginTop: '-10px'}}>
                        <div className="progress-bar" style={{width: '66%', background: '#42545c'}}></div>
                    </div>
                    <p >Leadership Effectiveness</p>
                    <div className="progress-bar-container" style={{marginTop: '-10px'}}>
                        <div className="progress-bar" style={{width: '50%', background: '#42545c'}}></div>
                    </div>
                    <p>Future Leadership</p>
                    <div className="progress-bar-container" style={{marginTop: '-10px'}}>
                        <div className="progress-bar" style={{width: '75%', background: '#42545c'}}></div>
                    </div>
                </Card>

                <div className="bottom_divs">
                    <h3 style={{paddingLeft: '30px'}}>Help & Support</h3>
                    <Button className="btn2">Help</Button><br/>
                    <Button className="btn2">Team Management</Button><br/>
                    <Button className="btn2">Subscription</Button><br/>
                    <Button className="btn2">Learning Resources</Button>
                </div>
            </div>
        </div>
    );
};

export default WorkspaceDashboard;
