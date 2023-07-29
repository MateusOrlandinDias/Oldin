import React from "react";
import './styles.css';
import Header from '../../components/Header';
import Lettering from '../../components/Lettering';
import PromotionSection from "../../components/Promotions-Section";
import BenefitsSection from "../../components/Benefits-Section";

import img1 from '../../assets/Promos/imagem_promocao_1.jpg';
import img2 from '../../assets/Promos/imagem_promocao_2.jpg';
import img3 from '../../assets/Promos/imagem_promocao_3.jpg';

const images = [
    img1,
    img2,
    img3
];

export default function Landing() {
    return (
        <div>
            <Header />
            <Lettering />
            <PromotionSection images={images}/>
            <BenefitsSection />
        </div>
    );
}