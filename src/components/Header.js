import React from 'react';
import '../shop.css';
import { useSearch } from '../context/SearchContext';

const Header = () => {
    const { headerSearchQuery, setHeaderSearchQuery } = useSearch();

    const handleHeaderSearch = (e) => {
        const query = e.target.value;
        setHeaderSearchQuery(query);
        // Scroll to shop section when searching
        if (query) {
            const shopSection = document.getElementById('shop-section');
            if (shopSection) {
                shopSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="nav-brand">
                        <img src="/images/logo.png" alt="Dekenet Al Nes" className="logo-img" />
                    </div>

                    <ul className="nav-menu" id="navMenu">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li><a href="#about">About Us</a></li>
                        <li>
                            <a href="#shop" className="active">
                                Shop
                                <span className="active-dot"></span>
                            </a>
                        </li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li>
                            <a href="#community" className="dropdown-link">
                                Community 
                                <svg className="nav-icon chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 1L5 5L9 1"/>
                                </svg>
                            </a>
                        </li>
                    </ul>

                    <div className="nav-actions">
                        <div className="search-bar">
                            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input 
                                type="text" 
                                placeholder="Search here" 
                                value={headerSearchQuery}
                                onChange={handleHeaderSearch}
                            />
                        </div>
                        
                        <div className="auth-links">
                            <a href="#" className="auth-link">
                                Log in 
                                <svg className="auth-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 12H3" /> <path d="M11 8l4 4-4 4" /> <path d="M17 6a6 6 0 0 1 0 12" /> 
                                </svg>
                            </a>
                            
                            <span className="auth-separator">/</span>
                            
                            <a href="#" className="auth-link">
                                Sign up 
                                <svg className="auth-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 6a6 6 0 0 0 0 12" /> <path d="M9 12h12" /> <path d="M13 16l-4-4 4-4" /> 
                                </svg>
                            </a>
                        </div>
                    </div>

                    <button className="nav-toggle" id="navToggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;

