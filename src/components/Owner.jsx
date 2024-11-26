import React from 'react';
import '../styles/Owner.css';

const Owner = () => {
    return (
        <div className="owner-container">
            <div className="owner-card">
                <div className="owner-image">
                
                </div>
                <div className="owner-details">
                    <h1>Manoj Kumar Arya</h1>
                    <h2>Owner of Vaishnavi Traders</h2>
                    <p className="owner-description">
                    Vaishnavi Traders, established under Manoj Kumar Arya leadership, has grown into a 
                        cornerstone of the community in Betul. Specializing in high-quality hardware and 
                        agricultural products, the shop provides fertilizers, seeds, pesticides, and a 
                        wide range of essential tools for farming and construction. The vision 
                        ensures exceptional service and builds trust among customers and suppliers alike.
                    </p>
                    <ul className="contact-info">
                        <li><strong>Email:</strong> aadarsharya10@gmail.com</li>
                        <li><strong>Phone:</strong> +91-9770052911</li>
                        <li><strong>Location:</strong> Betul, M.P</li>
                    </ul>
                    <button className="contact-button">Get in Touch</button>
                </div>
            </div>
        </div>
    );
};

export default Owner;
