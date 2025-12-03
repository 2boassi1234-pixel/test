import React from 'react';
import './App.css';
import { SearchProvider } from './context/SearchContext';
import Header from './components/Header';
import Shop from './components/Shop';
import RecommendedProducts from './components/RecommendedProducts';
import Footer from './components/Footer';

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <Header />
        <Shop />
        <RecommendedProducts />
        <Footer />
      </div>
    </SearchProvider>
  );
}

export default App;

