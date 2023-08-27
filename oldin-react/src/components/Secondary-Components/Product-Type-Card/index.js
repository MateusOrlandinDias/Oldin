import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function ProductTypeCard({ srcImgProductType, cardTitle }) {
    return (
        <Link
            to="/produtos"
            class="card-product-type">
            <div class="card-product-type-details">
                <p class="product-type-text-title">{cardTitle}</p>
                <div className='images-types'>
                    <img src={srcImgProductType} alt='product-type-photo' />
                </div>
            </div>
            <button class="product-type-card-button">Ver nos produtos</button>
        </Link>
    );
}