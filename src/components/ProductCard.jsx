import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setShowPopup(true); // Show the popup
        setTimeout(() => setShowPopup(false), 2000); // Hide the popup after 2 seconds
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>

            {showPopup && (
                <div className="popup">
                    <p>{product.name} added to cart!</p>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
