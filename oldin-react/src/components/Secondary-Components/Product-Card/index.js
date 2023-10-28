import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function ProductCard({ title, description, price, lastPrice, imageSource, isPromotion }) {
    return (
        <div className="card-product">
            <Link className='link-to-page-product' to="/produto">
                {isPromotion && <div className="promotion-tag">Promoção</div>}
                <div className="card-img-product">
                    <img src={imageSource} alt="Product" />
                </div>
                <div className="card-info-product">
                    <p className="text-title-product">{title}</p>
                    <p className="text-body-product">{description}</p>
                </div>
                <div className="card-footer-product">
                    {lastPrice && (
                        <span className="text-last-price-product">{lastPrice}</span>
                    )}
                    <span className="text-title-product">{price}</span>
                </div>
            </Link>
        </div >
    );
}
