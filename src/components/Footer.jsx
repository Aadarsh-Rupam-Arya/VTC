import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                </div>
                <div className="footer-social">
                    <p>Follow us:</p>
                    <a href="https://facebook.com">Facebook</a>
                    <a href="https://chat.whatsapp.com/KTDT4PN0JADDIMHK4tM9mo">WhatsApp</a>
                    <a href="https://instagram.com">Instagram</a>
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2024 Vaishnavi Traders. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
