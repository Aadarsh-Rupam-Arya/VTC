// src/components/Tracking.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Tracking.css';

const Tracking = () => {
    const { orderId } = useParams();

    return (
        <div className="tracking-page">
            <h1>Order Tracking</h1>
            <p><strong>Order ID:</strong> {orderId}</p>
            <div className="tracking-steps">
                <div className="step completed">
                    <p>Order Placed</p>
                    <span className="step-date">2024-11-18</span>
                </div>
                <div className="step completed">
                    <p>Processing</p>
                    <span className="step-date">2024-11-19</span>
                </div>
                <div className="step active">
                    <p>Dispatched</p>
                    <span className="step-date">2024-11-20</span>
                </div>
                <div className="step">
                    <p>Out for Delivery</p>
                    <span className="step-date">2024-11-21</span>
                </div>
                <div className="step">
                    <p>Delivered</p>
                    <span className="step-date">2024-11-22</span>
                </div>
            </div>
        </div>
    );
};

export default Tracking;
