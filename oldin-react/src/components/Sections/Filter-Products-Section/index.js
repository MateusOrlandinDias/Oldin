import React, { useState } from 'react';
import SearchBar from '../../Secondary-Components/Search-bar'; 
import FilterButton from '../../Secondary-Components/Filter-button'; 
import './styles.css'; // Certifique-se de criar um arquivo CSS correspondente

export default function FilterProductsSection() {
    const [selectedFilter, setSelectedFilter] = useState(null);

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter === selectedFilter ? null : filter);
    };

    return (
        <section className="filter-products-section">
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
        </section>
    );
}
