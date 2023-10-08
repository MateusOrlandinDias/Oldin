import React, { useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import './styles.css';

export default function FilterButton({ text, selected, onClick }) {
    const buttonClassName = selected ? 'filter-button selected' : 'filter-button';

    return (
        <button className={buttonClassName} onClick={onClick}>
            <BiFilterAlt className="filter-icon" />
            {text}
        </button>
    );
}
