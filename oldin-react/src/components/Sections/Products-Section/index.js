import React, { useState, useEffect } from 'react';
import './styles.css';
import ProductCard from '../../Secondary-Components/Product-Card';
import api from '../../../services/api';
import FilterButton from '../../Secondary-Components/Filter-button';
import { AiOutlineSearch } from 'react-icons/ai';
import ClearFilterButton from '../../Secondary-Components/Clear-Filter-Button';

export default function ProductSection() {
    const [searchInput, setSearchInput] = useState('');
    const [filter, setFilter] = useState([]);
    const [products, setProducts] = useState([]);
    const [updateData, setUpdateData] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [noResults, setNoResults] = useState(false);

    const handleFilterClick = (filterTag) => {
        if (selectedFilter === filterTag) {
            setSelectedFilter(null);
            setFilter([]);
            setSearchInput('');
        } else {
            setSelectedFilter(filterTag);
            setSearchInput('');
            setFilter(products.filter(item => item.tag === filterTag));
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        applyFilter();
    };

    const applyFilter = () => {
        if (searchInput !== '') {
            const dataFilteredByName = products.filter((item) => {
                return Object.values(item.name).join('').toLowerCase()
                    .includes(searchInput.toLowerCase());
            });
            setFilter(dataFilteredByName);
            setSelectedFilter(null);
        } else if (selectedFilter) {
            setFilter(products.filter(item => item.tag === selectedFilter));
        } else {
            setFilter(products);
        }

        setNoResults(filter.length === 0);
    };

    const handleClearFilter = () => {
        setSelectedFilter(null);
        setFilter(products);
        setSearchInput('');
        setNoResults(false);
    };

    useEffect(() => {
        if (updateData) {
            api.get('/product')
                .then(response => {
                    setProducts(response.data);
                });
            setUpdateData(false);
        }
    }, [updateData]);

    useEffect(() => {
        applyFilter();
    }, [searchInput, products, selectedFilter]);

    return (
        <div className='product-filter-section'>
            <div className='filter-products-div'>
                <form className="search" onSubmit={handleFormSubmit}>
                    <input
                        placeholder="Buscar produto..."
                        type="text"
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                            setSelectedFilter(null);
                            setFilter([]);
                        }}
                    />
                    <button type="submit">
                        <AiOutlineSearch />
                    </button>
                </form>
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
                    <ClearFilterButton onClick={handleClearFilter} />
                </div>
            </div>
            <div className="product-section">
                {filter.length === 0 && noResults ? (
                    <div className="no-results-message">
                        Nenhum produto foi encontrado com os filtros aplicados.
                    </div>
                ) : (
                    filter.map((product, index) => (
                        <div key={index} className="product-card-container">
                            <ProductCard
                                product={product}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
