import React, { useState } from 'react';
import '../shop.css';

const ProductCard = ({ product }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            return;
        }
        setIsClicked(!isClicked);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        console.log(`Product "${product.name}" added to the (non-functional) cart!`);
    };

    return (
        <div 
            className={`product-card ${isClicked ? 'clicked' : ''}`}
            onClick={handleCardClick}
        >
            <div className="product-image-box">
                <img 
                    src={product.image} 
                    alt={product.name}
                    onError={(e) => {
                        console.error(`Failed to load image: ${product.image}`);
                        e.target.style.display = 'none';
                    }}
                />
            </div>
            <div className="product-details">
                <h4>{product.name}</h4>
                <div className="product-info-line">
                    <div className="rating">
                        <i className="fa-solid fa-star"></i> {product.rating} ({product.reviews} Reviews)
                    </div>
                    <span className="price">{product.price}$</span>
                </div>
                <button className="add-to-cart" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;

