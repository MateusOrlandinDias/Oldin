import React from 'react';
import './styles.css';
import ProductTypeCard from '../../Secondary-Components/Product-Type-Card';
import imgGrampos from './../../../assets/Product-Types/grampos.png';
import imgFitas from './../../../assets/Product-Types/fitas.png';
import imgGrampeadores from './../../../assets/Product-Types/grampeador.png';
import imgPinos from './../../../assets/Product-Types/pinos.png';
import imgOutros from './../../../assets/Product-Types/outros.png';

export default function ProductTypesSection() {
    return (
        <section className="product-types-section">
            <div className="product-types-row">
                <ProductTypeCard
                    srcImgProductType={imgGrampos}
                    cardTitle='Grampos' />
                <ProductTypeCard
                    srcImgProductType={imgFitas}
                    cardTitle='Fitas'
                />
            </div>
            <div className="product-types-row">
                <ProductTypeCard 
                    srcImgProductType={imgGrampeadores}
                    cardTitle='Grampeadores'
                />
                <ProductTypeCard 
                    srcImgProductType={imgPinos}
                    cardTitle='Pinos'
                />
            </div>
            <div className="product-type-card other-product">
                <ProductTypeCard 
                    srcImgProductType={imgOutros}
                    cardTitle='Outros'
                />
            </div>
        </section>
    );
};
