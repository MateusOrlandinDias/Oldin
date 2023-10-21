// ProductSection.js
import React from 'react';
import './styles.css';
import ProductCard from '../../Secondary-Components/Product-Card';
import products from '../../../assets/products';

export default function ProductSection() {
    return (
        <div className="product-section">
            {products.map((product, index) => (
                <div key={index} className="product-card-container">
                    <ProductCard
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        lastPrice={product.lastPrice}
                        imageSource={product.imageSource}
                    />
                </div>
            ))}
        </div>
    );
}
