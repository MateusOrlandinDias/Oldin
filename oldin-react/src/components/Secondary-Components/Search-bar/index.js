import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './styles.css';

export default function SearchBar() {
    return (
        <div className="search">
            <input placeholder="Search..." type="text" />
            <button type="submit">
                <AiOutlineSearch />
            </button>
        </div>
    );
}
