import React from 'react';
import '../views/css/styles.css'
import {
    Home,
    ClipboardList,
    Users,
    User,
    UserPlus,
    UserCircle,
    Settings,
    LogOut,
    Plus,
} from "lucide-react";
import {useLocation, useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isWorkspaceInfo = location.pathname.startsWith('/workspace/');
    const isTaskInfo = location.pathname.startsWith('/task/');

    return (
        <div className="sidebar">
            <div>
                <h1>ChatMed</h1>
                <div className="nav">
                    <div className={`nav-item ${isWorkspaceInfo ? 'active' : ''}`}>
                        Dashboard
                    </div>
                    <div className={`nav-item ${isTaskInfo ? 'active' : ''}`}>
                        Task Info
                    </div>
                </div>
            </div>

            <div className="bottom-section">
                <div className="workspace">
                    <img src="https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg"
                         alt="avatar" className="avatar"/>
                    <div>
                        <div className="workspace-name">Workspace</div>
                        <div className="workspace-email">admin@test.com</div>
                    </div>
                    <div className="plus">+</div>
                </div>
                <div>
                    <img src="data:image/png;base64,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"
                         alt="avatar" className="avatar"/>
                    <span className="settings">Settings</span>
                </div>
                <div>
                    <img
                        src="https://img.freepik.com/premium-vector/sign-out-icon-set-exit-quit-vector-symbol-output-sign-account-logout-button-signing-off-icon_268104-14263.jpg"
                        alt="avatar" className="avatar"/>
                    <span className="settings"
                          onClick={() => navigate(`/user/login`)}>Sign Out</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;