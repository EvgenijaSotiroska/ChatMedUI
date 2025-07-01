import React from 'react';
import '../../views/css/dashboard.css';

const Card = ({ children, className = '' }) => {
    return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
