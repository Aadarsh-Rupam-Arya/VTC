import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, updateQuantity } = useContext(CartContext);

    // Calculate total items and total amount
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = cartItems.reduce(
        (acc, item) => acc + parseFloat(item.price.replace('Rs. ', '')) * item.quantity,
        0
    );

    const handleIncrement = (id) => {
        const item = cartItems.find(cartItem => cartItem.id === id);
        if (item.quantity < 100) {
            updateQuantity(id, item.quantity + 1);
        }
    };

    const handleDecrement = (id) => {
        const item = cartItems.find(cartItem => cartItem.id === id);
        updateQuantity(id, item.quantity - 1);
    };

    const clearCart = () => {
        updateQuantity(null, 0); // Custom logic to clear the cart
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <img
                        src="https://mycarrom.com/empty-cart.png" 
                        alt="Empty Cart"
                        className="empty-cart-image"
                    />
                    <p className="empty-cart-text">
                        Your cart is currently empty. Start adding some amazing products to your cart!
                    </p>
                    <Link to="/products">
                        <button className="shop-now-btn">Shop Now</button>
                    </Link>
                </div>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <h2>{item.name}</h2>
                            <p>Price: {item.price}</p>
                            <div className="quantity-control">
                                <button onClick={() => handleDecrement(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleIncrement(item.id)}>+</button>
                            </div>
                            <p>
                                Total Price: ₹
                                {(
                                    parseFloat(item.price.replace('Rs. ', '')) * item.quantity
                                ).toFixed(2)}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {cartItems.length > 0 && (
                <>
                    <div className="cart-summary">
                        <h3>Total Items: {totalItems}</h3>
                        <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
                        <div className="cart-actions">
                            <Link to="/checkout">
                                <button className="buy-now-btn">Proceed to Checkout</button>
                            </Link>
                            <button className="clear-cart-btn" onClick={clearCart}>
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;