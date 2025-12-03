import React, { useState, useMemo, useEffect } from 'react';
import '../shop.css';
import { useSearch } from '../context/SearchContext';
import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';
import Hero from './Hero';

const Shop = () => {
    const { headerSearchQuery } = useSearch();
    const [keywords, setKeywords] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [clickedButton, setClickedButton] = useState(null);
    const [filters, setFilters] = useState({
        categories: { cleaning: true, food: true, drinks: true },
        foodEssentials: { labneh: true, honeyJar: true, wheatGrains: true },
        drinkEssentials: { water: true, milk: true, shakes: true },
        level: 30
    });

    // Sync header search with shop search
    useEffect(() => {
        if (headerSearchQuery) {
            setSearchQuery(headerSearchQuery);
        }
    }, [headerSearchQuery]);

    const allProducts = [
        { id: 1, name: 'Natural Olive Oil', image: '/images/Natural.png', rating: '5.0', reviews: '1.3', price: '7.99', category: 'food', keywords: ['olive', 'oil', 'natural'] },
        { id: 2, name: 'Local Jam Jar', image: '/images/Local.png', rating: '4.0', reviews: '2.3', price: '4.99', category: 'food', keywords: ['jam', 'jar', 'local', 'honey'] },
        { id: 3, name: 'Traditional Theme Mix', image: '/images/Traditional.png', rating: '4.0', reviews: '1.6', price: '3.99', category: 'food', keywords: ['traditional', 'thyme', 'mix'] },
        { id: 4, name: 'Wheat Grains', image: '/images/Wheat.png', rating: '4.8', reviews: '5', price: '4.20', category: 'food', keywords: ['wheat', 'grains'] },
        { id: 5, name: 'Labneh Balls', image: '/images/Labneh.png', rating: '5.0', reviews: '1.3', price: '3.99', category: 'food', keywords: ['labneh', 'balls'] },
        { id: 6, name: 'Laundry detergent', image: '/images/Laundry.png', rating: '5.0', reviews: '1.3', price: '3.99', category: 'cleaning', keywords: ['laundry', 'detergent', 'cleaning'] },
        { id: 7, name: 'Natural Dried Thyme', image: '/images/Natural.png', rating: '5.0', reviews: '1.3', price: '2.99', category: 'food', keywords: ['natural', 'thyme', 'dried'] },
        { id: 8, name: 'Herbal Hair Oil', image: '/images/Herbal.png', rating: '5.0', reviews: '1.3', price: '9.99', category: 'cleaning', keywords: ['herbal', 'hair', 'oil'] },
        { id: 9, name: 'Natural Hand Soap', image: '/images/NaturalHand.png', rating: '5.0', reviews: '1.3', price: '4.99', category: 'cleaning', keywords: ['natural', 'hand', 'soap'] }
    ];

    // Filter products based on search query, keywords, and filters
    const filteredProducts = useMemo(() => {
        return allProducts.filter(product => {
            // Search query filter
            const matchesSearch = !searchQuery || 
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));

            // Keyword tags filter
            const matchesKeywords = keywords.length === 0 || 
                keywords.some(keyword => 
                    product.name.toLowerCase().includes(keyword.toLowerCase()) ||
                    product.keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase()))
                );

            // Category filter
            const categoryMap = {
                'cleaning': 'cleaning',
                'food': 'food',
                'drinks': 'drinks'
            };
            const matchesCategory = Object.entries(filters.categories).some(
                ([cat, checked]) => checked && categoryMap[cat] === product.category
            );

            return matchesSearch && matchesKeywords && matchesCategory;
        });
    }, [searchQuery, keywords, filters]);

    const removeKeyword = (keywordToRemove) => {
        setKeywords(keywords.filter(k => k !== keywordToRemove));
    };

    const addKeyword = (keyword) => {
        if (keyword && !keywords.includes(keyword)) {
            setKeywords([...keywords, keyword]);
        }
    };

    const handleNavButtonClick = (buttonType) => {
        setClickedButton(buttonType);
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className="hero-shop-wrapper" id="shop-section">
            <Hero />
            
            <main className="shop-main-content">
                <div className="container">
                    <div className="shop-card">
                        <div className="shop-card-header">
                            <div className="keywords-block">
                                <h3>Keywords</h3>
                                <div className="keyword-tags">
                                    {keywords.map((keyword, index) => (
                                        <span key={index} className="tag active">
                                            {keyword} 
                                            <i 
                                                className="fa-solid fa-xmark" 
                                                onClick={() => removeKeyword(keyword)}
                                                style={{ cursor: 'pointer' }}
                                            ></i>
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="search-filter-box">
                                <input 
                                    type="text" 
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter' && searchQuery.trim()) {
                                            addKeyword(searchQuery.trim());
                                            setSearchQuery('');
                                        }
                                    }}
                                />
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>

                        <div className="shop-card-body">
                            <FilterSidebar onFilterChange={handleFilterChange} filters={filters} />

                            <section className="product-grid">
                                {filteredProducts.length > 0 ? (
                                    <>
                                        {filteredProducts.map(product => (
                                            <ProductCard key={product.id} product={product} />
                                        ))}
                                        {(searchQuery || keywords.length > 0) && (
                                            <div style={{ 
                                                gridColumn: '1 / -1', 
                                                textAlign: 'center', 
                                                padding: '10px', 
                                                color: 'white',
                                                fontSize: '0.9rem'
                                            }}>
                                                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'white' }}>
                                        <p>No products found matching your search criteria.</p>
                                        <p style={{ fontSize: '0.9rem', marginTop: '10px', opacity: 0.8 }}>
                                            Try adjusting your search terms or filters.
                                        </p>
                                    </div>
                                )}
                                
                                <div className="pagination">
                                    <button 
                                        className={`nav-button prev ${clickedButton === 'prev' ? 'clicked' : ''}`}
                                        onClick={() => handleNavButtonClick('prev')}
                                    >
                                        &lt; Previous
                                    </button>
                                    <span className="page-number">Page 2</span>
                                    <button 
                                        className={`nav-button next ${clickedButton === 'next' ? 'clicked' : ''}`}
                                        onClick={() => handleNavButtonClick('next')}
                                    >
                                        Next &gt;
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Shop;

