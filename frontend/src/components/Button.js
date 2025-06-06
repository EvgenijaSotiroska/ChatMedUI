import React from 'react';
import '../views/css/dashboard.css';

const Button = ({ children, variant = 'default', ...props }) => {
    return <button className={`btn ${variant}`} {...props}>{children}</button>;
};

export default Button;
