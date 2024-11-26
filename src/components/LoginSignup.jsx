import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/LoginSignup.css'; // Include your styles for the form

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Initialize useNavigate

    // Validation Logic
    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePassword = (password) =>
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*]/.test(password);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' })); // Clear errors as user types
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!isLogin && !formData.name) {
            newErrors.name = 'Name is required';
        }

        if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!validatePassword(formData.password)) {
            newErrors.password =
                'Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character';
        }

        if (!isLogin && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length === 0) {
            // Perform login or signup logic
            if (isLogin) {
                console.log('Logging in:', formData);
            } else {
                console.log('Signing up:', formData);
            }

            // Redirect to the Welcome page
            navigate('/'); // Update this path to match your route for the Welcome page
        } else {
            setErrors(newErrors); // Set errors if validation fails
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>{isLogin ? 'Login' : 'Signup'}</h2>

                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                        />
                        {errors.name && <small className="error">{errors.name}</small>}
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && <small className="error">{errors.email}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                    />
                    {errors.password && <small className="error">{errors.password}</small>}
                </div>

                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm your password"
                        />
                        {errors.confirmPassword && (
                            <small className="error">{errors.confirmPassword}</small>
                        )}
                    </div>
                )}

                <button type="submit" className="auth-button">
                    {isLogin ? 'Login' : 'Signup'}
                </button>

                <p className="toggle-text">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Signup' : 'Login'}
                    </span>
                </p>
            </form>
        </div>
    );
};

export default LoginSignup;