import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contact.css'; // Import your custom CSS file for styling

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-form-container">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>

                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p><strong>Phone:</strong> +91 9770052911</p>
                    <p><strong>Email:</strong> aadarsharya10@gmail.com</p>
                    <p><strong>WhatsApp:</strong> +91 9770052911</p>

                    <div className="social-media">
                        <h2>Follow Us</h2>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF /> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram /> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://chat.whatsapp.com/KTDT4PN0JADDIMHK4tM9mo" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp /> WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;