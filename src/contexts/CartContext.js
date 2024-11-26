// src/contexts/CartContext.js
import React, { createContext, useState, useMemo } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(cartItems.map(cartItem => 
                cartItem.id === item.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                : cartItem
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    // Function to update the quantity of an item in the cart
    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
        } else {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === id ? { ...cartItem, quantity } : cartItem
            ));
        }
    };



    // Function to calculate the total amount
    const totalAmount = useMemo(() => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};