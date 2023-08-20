import React from 'react';
import './styles.css';
import ProductTypeCard from '../../Secondary-Components/Product-Type-Card';

export default function ProductTypesSection() {
    return (
        <section className="product-types-section">
            <div className="product-types-row">
                <ProductTypeCard />
                <ProductTypeCard />
            </div>
            <div className="product-types-row">
                <ProductTypeCard />
                <ProductTypeCard />
            </div>
            <div className="product-type-card other-product">
                <ProductTypeCard />
            </div>
        </section>
    );
};
