import React from 'react';
import '../shop.css';
import ProductCard from './ProductCard';

const RecommendedProducts = () => {
    const recommendedProducts = [
        { id: 1, name: 'Natural Olive Oil Soap', image: '/images/Natural.png', rating: '5.0', reviews: '1.3', price: '7.99' },
        { id: 2, name: 'Local Honey Jar', image: '/images/Local.png', rating: '4.0', reviews: '2.3', price: '4.99' },
        { id: 3, name: 'Traditional Thyme Mix', image: '/images/Traditional.png', rating: '4.0', reviews: '1.6', price: '3.99' }
    ];

    return (
        <section className="recommended-products">
            <h2>Recommended</h2>
            <div className="container recommended-grid">
                {recommendedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <button className="shop-all-button">SHOP ALL</button>
        </section>
    );
};

export default RecommendedProducts;

