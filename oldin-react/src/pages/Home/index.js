import React from "react";
import './styles.css';
import Header from '../../components/Sections/Header';
import Lettering from '../../components/Secondary-Components/Lettering';
import PromotionSection from "../../components/Sections/Promotions-Section";
import BenefitsSection from "../../components/Sections/Benefits-Section";
import Footer from "../../components/Sections/Footer";
import ProductTypesSection from "../../components/Sections/Product-Type-Section";

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
            <Footer />
        </div>
    );
}