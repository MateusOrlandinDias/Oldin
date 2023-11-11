import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <div className="card-product">
            <Link className='link-to-page-product' to={`/produto/${product.id}`}>
                {product.isPromotion && <div className="promotion-tag">Promoção</div>}
                <div className="card-img-product">
                    <img src={product.imageURL} alt="Product" />
                </div>
                <div className="card-info-product">
                    <p className="text-title-product">{product.name}</p>
                    <p className="text-body-product">{product.description}</p>
                </div>
                <div className="card-footer-product">
                    {product.lastPrice && (
                        <span className="text-last-price-product">R$ {product.lastPrice}</span>
                    )}
                    <span className="text-title-product">R$ {product.price}</span>
                </div>
            </Link>
        </div >
    );
}
