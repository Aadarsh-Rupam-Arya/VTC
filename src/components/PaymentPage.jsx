import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/PaymentPage.css'; // Ensure correct path to the CSS file
import visa from '../images/visa.png';
import upi from '../images/upi.jpg';
import gpay from '../images/gpay.jpg';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const location = useLocation();
    const totalAmountFromCheckout = location.state?.totalAmount || 0; // Retrieve the total amount passed via state

    const [selectedPayment, setSelectedPayment] = useState(null);
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);
    const [timerSeconds, setTimerSeconds] = useState(10);
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
    const [orderId, setOrderId] = useState('');

    useEffect(() => {
        let timerInterval;

        if (isSubmitClicked && timerSeconds > 0) {
            timerInterval = setInterval(() => {
                setTimerSeconds((prev) => prev - 1);
            }, 1000);
        }

        if (timerSeconds === 0 && isSubmitClicked) {
            setIsPaymentSuccessful(true);
            setIsSubmitClicked(false); // Stop the timer
            generateOrderId(); // Generate order ID once payment is successful
        }

        return () => clearInterval(timerInterval); // Cleanup interval on unmount
    }, [timerSeconds, isSubmitClicked]);

    const selectPayment = (method) => {
        setSelectedPayment(method);
    };

    const handlePaymentSubmit = () => {
        setIsSubmitClicked(true);
        setTimerSeconds(5); // Reset the timer for 10 seconds
    };
    
    
    const generateOrderId = () => {
        const randomId = Math.floor(10000000 + Math.random() * 90000000); // Generate random 8-digit number
        setOrderId(randomId);
        
    };
  
    const navigate = useNavigate();
    const handleTrackOrder = () => {
        navigate(`/tracking/${orderId}`);
    };


    return (
        <div className="container">
            {!isPaymentSuccessful && (
                <div id="new">
                    <h2>Select Payment Method</h2>

                    <div className="amount">
                        <h3>Total Amount: ₹{totalAmountFromCheckout.toFixed(2)}</h3>
                    </div>

                    {!isPaymentSuccessful && (
                        <>
                            <div className="payment-methods">
                                <div
                                    className="payment-method"
                                    onClick={() => selectPayment('credit_card')}
                                >
                                    <img src={visa} alt="Credit Card" />
                                    <p>Credit Card</p>
                                </div>
                                <div
                                    className="payment-method"
                                    onClick={() => selectPayment('UPI')}
                                >
                                    <img src={upi} alt="UPI" />
                                    <p>UPI</p>
                                </div>
                                <div
                                    className="payment-method"
                                    onClick={() => selectPayment('google_pay')}
                                >
                                    <img src={gpay} alt="Google Pay" />
                                    <p>Google Pay</p>
                                </div>
                            </div>

                            {selectedPayment && (
                                <div className="payment-details">
                                    <p>You have selected {selectedPayment} payment method.</p>
                                    <button className='submit-class' onClick={handlePaymentSubmit}>Submit Payment</button>
                                </div>
                            )}
                        </>
                    )}

                    {isSubmitClicked && (
                        <div className="timer">
                            <p>Processing your payment... Time left: {timerSeconds}s</p>
                        </div>
                    )}
                </div>
            )}

            {isPaymentSuccessful && (
                <div className="success-message">
                    <div className="success-icon">&#x2714;</div> {/* Unicode Checkmark */}
                    <h3>Payment Successful!</h3>
                    <p>Thank you for your payment. Your order has been confirmed.</p>
                    <p className="order-id">
                        <strong>Order ID:</strong> #{orderId}
                    </p>
                    <button className="track-order-button" onClick={handleTrackOrder}>
                Track Order
                    </button>
                    <p className="order-note">
                        Your order is being processed. You will receive an update soon.
                    </p>
                </div>
            )}
        </div>
    );
};

export default PaymentPage;
