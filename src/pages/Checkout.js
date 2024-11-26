import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = () => {
    const { cartItems } = useContext(CartContext); // Access cart items from context
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const taxRate = 0.18; // Example: 18% tax

    // Calculate total amount
    const totalAmount = cartItems.reduce(
        (acc, item) => acc + parseFloat(item.price.replace('Rs. ', '')) * item.quantity,
        0
    );

    const handleCouponApply = () => {
        // Apply a discount based on the coupon code (example logic)
        if (coupon === 'DISCOUNT10') {
            setDiscount(totalAmount * 0.1); // 10% discount
        } else if (coupon === 'DISCOUNT20') {
            setDiscount(totalAmount * 0.2); // 20% discount
        } else {
            setDiscount(0); // No discount
            alert('Invalid coupon code');
        }
    };

    const totalWithTaxes = totalAmount + totalAmount * taxRate - discount;

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>

            <div className="product-details">
                <h3>Product Details</h3>
                {cartItems.map((item) => (
                    <div key={item.id} className="checkout-item">
                        <p>
                            <strong>{item.name}</strong> (x{item.quantity}) - ₹
                            {(parseFloat(item.price.replace('Rs. ', '')) * item.quantity).toFixed(2)}
                        </p>
                    </div>
                ))}
            </div>

            <div className="taxes">
                <h3>Taxes</h3>
                <p>Tax (18%): ₹{(totalAmount * taxRate).toFixed(2)}</p>
            </div>
    <p>  <h3>Apply Coupon</h3>  </p>
            <div className="coupon-input">
           
               <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter coupon code"
                />
                <button onClick={handleCouponApply} className='apply-btn'>Apply</button> 
               
            </div>
            {discount > 0 && <p>Discount: -₹{discount.toFixed(2)}</p>}
            <div className="total-amount">
                <h3>Total Amount</h3>
                <p>₹{totalWithTaxes.toFixed(2)}</p>
            </div>
            
            <Link to="/payment" state={{ totalAmount: totalWithTaxes }}>
                <button className="confirm-order-btn">Confirm Order</button>
            </Link>
        </div>
    );
};

export default Checkout;
