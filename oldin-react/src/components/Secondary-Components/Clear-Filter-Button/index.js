import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './styles.css';

export default function ClearFilterButton({ onClick }) {
    return (
        <button className="clear-filter-button" onClick={onClick}>
            <FaTimes className="clear-filter-icon" />
            Limpar Filtro
        </button>
    );
}
