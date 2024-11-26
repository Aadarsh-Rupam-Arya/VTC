import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/Cart.css';

const Cart = () => {
    const {
        cartItems,
        incrementItemQuantity,
        decrementItemQuantity,
        clearCart,
        calculateTotalAmount,
    } = useContext(CartContext);

    const totalAmount = calculateTotalAmount();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="pprd">Your cart is empty.</p>
            ) : (
                <div>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <h2>{item.name}</h2>
                                <p>Price: {item.price} x {item.quantity}</p>
                                <div className="quantity-control">
                                    <button onClick={() => decrementItemQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => incrementItemQuantity(item.id)}>+</button>
                                </div>
                                <button onClick={() => removeItemFromCart(item.id)} className="remove-button">Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Total Items: {totalItems}</h3>
                        <h3>Total Amount: Rs. {totalAmount}</h3>
                        <button className="checkout-button" onClick={() => alert('Order placed!')}>Place Order</button>
                        <button className="clear-button" onClick={clearCart}>Clear Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
