import React, { useState, useEffect } from 'react';
import '../shop.css';

const FilterSidebar = ({ onFilterChange, filters }) => {
    const [level, setLevel] = useState(filters?.level || 30);
    const [categories, setCategories] = useState(filters?.categories || {
        cleaning: true,
        food: true,
        drinks: true
    });
    const [foodEssentials, setFoodEssentials] = useState(filters?.foodEssentials || {
        labneh: true,
        honeyJar: true,
        wheatGrains: true
    });
    const [drinkEssentials, setDrinkEssentials] = useState(filters?.drinkEssentials || {
        water: true,
        milk: true,
        shakes: true
    });

    // Notify parent when filters change
    useEffect(() => {
        if (onFilterChange) {
            onFilterChange({
                categories,
                foodEssentials,
                drinkEssentials,
                level: parseInt(level)
            });
        }
    }, [categories, foodEssentials, drinkEssentials, level, onFilterChange]);

    const handleCategoryChange = (category) => {
        setCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const handleFoodEssentialChange = (item) => {
        setFoodEssentials(prev => ({
            ...prev,
            [item]: !prev[item]
        }));
    };

    const handleDrinkEssentialChange = (item) => {
        setDrinkEssentials(prev => ({
            ...prev,
            [item]: !prev[item]
        }));
    };

    return (
        <aside className="filter-sidebar">
            <div className="sidebar-section">
                <h3>Category</h3>
                <h4 className="sub-heading">Our Products</h4>
                <div className="checkbox-group">
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="cleaning" 
                            checked={categories.cleaning}
                            onChange={() => handleCategoryChange('cleaning')}
                        />
                        <label htmlFor="cleaning">Cleaning</label>
                    </div>
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="food" 
                            checked={categories.food}
                            onChange={() => handleCategoryChange('food')}
                        />
                        <label htmlFor="food">Food</label>
                    </div>
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="drinks" 
                            checked={categories.drinks}
                            onChange={() => handleCategoryChange('drinks')}
                        />
                        <label htmlFor="drinks">Drinks</label>
                    </div>
                </div>
            </div>

            <div className="sidebar-section">
                <h3>Level</h3>
                <div className="slider-container">
                    <input 
                        type="range" 
                        className="level-slider" 
                        min="0" 
                        max="100" 
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                    />
                    <div style={{ color: 'white', fontSize: '0.85rem', marginTop: '5px' }}>
                        Level: {level}%
                    </div>
                </div>
            </div>

            <div className="sidebar-section">
                <h3>Food essentials</h3>
                <div className="checkbox-group">
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="labneh" 
                            checked={foodEssentials.labneh}
                            onChange={() => handleFoodEssentialChange('labneh')}
                        />
                        <label htmlFor="labneh">Labneh</label>
                    </div>
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="honey-jar" 
                            checked={foodEssentials.honeyJar}
                            onChange={() => handleFoodEssentialChange('honeyJar')}
                        />
                        <label htmlFor="honey-jar">Honey Jar</label>
                    </div>
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="wheat-grains" 
                            checked={foodEssentials.wheatGrains}
                            onChange={() => handleFoodEssentialChange('wheatGrains')}
                        />
                        <label htmlFor="wheat-grains">Wheat Grains</label>
                    </div>
                </div>
            </div>

            <div className="sidebar-section">
                <h3>Drinks essentials</h3>
                <div className="checkbox-group">
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="water" 
                            checked={drinkEssentials.water}
                            onChange={() => handleDrinkEssentialChange('water')}
                        />
                        <label htmlFor="water">Water</label>
                    </div>
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="milk" 
                            checked={drinkEssentials.milk}
                            onChange={() => handleDrinkEssentialChange('milk')}
                        />
                        <label htmlFor="milk">Milk</label>
                    </div>
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="shakes" 
                            checked={drinkEssentials.shakes}
                            onChange={() => handleDrinkEssentialChange('shakes')}
                        />
                        <label htmlFor="shakes">Shakes</label>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default FilterSidebar;

