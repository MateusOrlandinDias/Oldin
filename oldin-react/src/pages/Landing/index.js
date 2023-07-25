import React from "react";
import './styles.css';
import Header from '../../components/Header';
import Lettering from '../../components/Lettering';
import PromotionSection from "../../components/Promotions-Section";

import img1 from '../../assets/Promos/imagem_promocao_1.jpg';
import img2 from '../../assets/Promos/imagem_promocao_2.jpg';
import img3 from '../../assets/Promos/imagem_promocao_3.jpg';

const images = [
    img1,
    img2,
    img3
];
const text = 'AVISO: ESTAREMOS FECHADOS NO FERIADO DO DIA XX/XX/XXXX.'

export default function Landing() {
    return (
        <div>
            <Header />
            <Lettering text={text}/>
            <PromotionSection images={images}/>
        </div>
    );
}