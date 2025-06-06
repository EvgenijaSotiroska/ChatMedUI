// React component with plain CSS styling
import React, {useEffect, useState} from 'react';
import '../views/css/dashboard.css';
import axiosInstance from "../axios/axios";

const TaskDashboard = ({ taskId }) => {
    const [workspaces, setWorkspaces] = useState([]);
    const [task, setTask] = useState([]);

    useEffect(() => {
        axiosInstance.get("/workspace")
            .then(res => {
                console.log("Received workspaces:", res.data);
                setWorkspaces(res.data);
            })
            .catch(err => console.error("Error fetching workspaces:", err));

        axiosInstance.get(`/tasks/${taskId}`)
            .then(res => {
                console.log("Received task:", res.data);
                setTask(res.data);
            })
            .catch(err => console.error("Error fetching task:", err));
    }, [taskId]);

    return (
        <div className="dashboard">
            <div className="top-bar">
                <input type="text" placeholder="Search tasks" className="search-bar" />
                <div className="top-buttons">
                    <button>Create Task</button>
                    <button>View</button>
                </div>
            </div>

            <div className="main-content">
                <div className="updates-panel">
                    <h3>Recent updates</h3>
                    {workspaces.map(i => (
                        <div className="update-item" key={i.id}>
                            <div className="check-icon">✔</div>
                            <div>
                                <strong>{i.name}</strong>
                                <p className="update-desc">{i.description}</p>
                            </div>
                            <div className="workspace-image"></div>
                        </div>
                    ))}
                </div>


                <div className="task-details">
                    <h3>Task Details</h3>
                    <div className="detail-row">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAB0PToUaZHeydteUHiQosuWouG1nnAFvUfQ&s"
                            style={{width: '25px'}}/>
                        <span style={{marginLeft: '20px'}}>Assigned to</span>
                        <button style={{marginLeft: '80px'}} className="button-user">Bella Smith</button>
                    </div>
                    <div className="detail-row">
                        <img
                            src="data:image/png;base64,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"
                            style={{width: '25px'}}/>
                        <span style={{marginLeft: '20px'}}>Due date</span>
                        <button style={{marginLeft: '100px'}} className="button-date">Today</button>
                    </div>
                    <div className="detail-row">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///8AAACOjo7CwsItLS3c3Nw/Pz/6+vrGxsaSkpKZmZmIiIjy8vK+vr7w8PA4ODgfHx+3t7fi4uKY3kT7AAAAzklEQVR4nO3byQ3CQAxA0TGQDQhZ+i+WHCiAi2UU3uvga6Q52HJrAAAAAAAAAAAAAAAAAAAAAAA/4N7fKvX37MBHVHskF1b3HXIDn9V5h2du4lrdF2tuYOuqA6NLLmzDeK00DtmBAAAAAAB8dNOl0pQ+8p6rh/oxJxdW90X2du1VnXd45SZW50X2G7atui+25MLz/6UAAAAAAHyc/t5irx7qx55cuFQHxpIb+Ae3a9V5kb5dO/8N6fnvgAEAAAAAAAAAAAAAAAAAAAAAvvEGU4ASPASDdpgAAAAASUVORK5CYII="
                            style={{width: '25px'}}/>
                        <span style={{marginLeft: '20px'}}>Ongoing tasks</span>
                        <button style={{marginLeft: '62px'}} className="button-user">Confidential</button>
                    </div>
                    <div className="detail-row">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAACpqakiIiK0tLRPT0/z8/P7+/t1dXXW1tb4+PhdXV3g4OAeHh6srKzp6enDw8ORkZHKysotLS1kZGQUFBQ+Pj6+vr7Hx8ebm5tqamqMjIzY2NhMTEzQ0NA3NzcMDAx9fX2CgoIxMTFEREQnJyeoAdAkAAACsElEQVR4nO3dyW7qQBBG4RiCmXyZEjAQAiGB93/FEFdjwCzYNCr9fc+3oi0h1VHMEGOpX14AAAAAAAAAAIhvMCtb5bbrPcbTLDuZGW69R3mOYXax9h7mCcbt7Nou9x4otu48u7Xznii2YdbU8x4pru2569j5d35YeA8V1cGiFn9V/TdbvHsPFVNuTYewDImuI0W2vD0vwzm7cZ0prteq6KteW+HEbZ74RlVRp17bu82r40SxtRqFbQrlUKiPQn0U6qNQH4X6KNRHoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1Afhfoo1EehPgr1UaiPQn0U6qNQH4X6KNRHoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1Afhfoo1EehPgr1UaiPQn0U6qNQH4X60i+0vRE+63V6eyPY/haXTUlsuXScKLaZJfXDcmLLlLbSGVjSj+24ls8bf9IUhO2ejn8brs2+bJHWhk+b7Kze7ikbew8VVy9r+vAeKbZFI7Dz+CliBovEA0/2KZ+iZrwOfb3E3mSuFeVoktIHPQAAAAAXxWi6/16Vye0cfzZt1//hp3QxuLa8uYoxHHjPE12rcSWqndr/+c3Ak7RejbP7wGznPVRUl6uIvXV91XvqPVVEq9D0Xb2/9HfpnaehqDyvO7Zeec4UVf/urLSfnxZ+I0UWTtLu5cgosdP0o8p5vzqSW2Eyn4nr+7dOK9x6TRSb/Xh482uMFW68JoptWuV8Xh0pEnsdtu5edfbKzJL5+j22nmF9oGgekPdmRfuwHIfbTUauQ0VVhi81P5PTeTmehtXce6yYDvVX7+O8flg+fp6OPLu3f/w0Jf27wM/HT9JSNALTuuerMlhfB6Z0b+lFsQ95h5b3KM+TbyZb7jYBAAAAAAAAAAD/qV8FuxlSP3B9dQAAAABJRU5ErkJggg=="
                            style={{width: '25px'}}/>
                        <span style={{marginLeft: '20px'}}>Task priority</span>
                        <button style={{marginLeft: '80px'}} className="button-date">Medium</button>
                    </div>


                    <div>

                        <h4>Attached files</h4>
                        <div className="attachments">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjLK1lNnt8NAfd3v5LEXDik9COW6lqNvu3Q&s"
                                style={{width: '30px', height: '30px'}}/>
                            <p style={{marginLeft: '20px'}}>No attachments available</p>
                            <button style={{marginLeft: '420px'}} className="button-user">Attach file</button>
                        </div>
                    </div>

                    <hr></hr>

                    <div>
                        <h4>Linked items</h4>
                        <div className="linked-items">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7oJyAV-tnlCfP0_K-wvh4s0lj6OE0h_LAQ&s"
                                style={{width: '30px', height: '30px'}}/>
                            <p style={{marginLeft: '20px'}}>No linked items</p>
                            <button style={{marginLeft: '490px'}} className="button-user">Add item</button>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="task-actions">
                        <button className="button-user">Archive Task</button>
                        <button style={{marginLeft: '20px'}} className="button-user">Delete Task</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDashboard;