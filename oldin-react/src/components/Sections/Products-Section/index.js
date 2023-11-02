// ProductSection.js
import React, { useState, useEffect } from 'react';
import './styles.css';
import ProductCard from '../../Secondary-Components/Product-Card';
import api from '../../../services/api';
import SearchBar from '../../Secondary-Components/Search-bar';
import FilterButton from '../../Secondary-Components/Filter-button';

export default function ProductSection() {
    const [products, setProducts] = useState([]);
    const [updateData, setUpdateData] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState(null);

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter === selectedFilter ? null : filter);
    };


    useEffect(() => {
        api.get('/product')
            .then(response => {
                setProducts(response.data);
            })
        setUpdateData(false);
    }, [updateData])

    return (
        <div className='product-filter-section'>
            <div className='filter-products-div'>
                <SearchBar />
                <div className="filter-buttons">
                    <FilterButton
                        text="Grampos"
                        selected={selectedFilter === 'Grampos'}
                        onClick={() => handleFilterClick('Grampos')}
                    />
                    <FilterButton
                        text="Fitas"
                        selected={selectedFilter === 'Fitas'}
                        onClick={() => handleFilterClick('Fitas')}
                    />
                    <FilterButton
                        text="Grampeadores"
                        selected={selectedFilter === 'Grampeadores'}
                        onClick={() => handleFilterClick('Grampeadores')}
                    />
                    <FilterButton
                        text="Pinos"
                        selected={selectedFilter === 'Pinos'}
                        onClick={() => handleFilterClick('Pinos')}
                    />
                    <FilterButton
                        text="Outros"
                        selected={selectedFilter === 'Outros'}
                        onClick={() => handleFilterClick('Outros')}
                    />
                </div>
            </div>
            <div className="product-section">
                {products.map((product, index) => (
                    <div key={index} className="product-card-container">
                        <ProductCard
                            title={product.name}
                            description={product.description}
                            price={product.price}
                            lastPrice={product.lastPrice}
                            imageSource={product.imageURL}
                            isPromotion={product.isPromotion}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
