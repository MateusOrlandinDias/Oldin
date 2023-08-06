import React from "react";
import './styles.css';
import Header from '../../components/Header';
import Lettering from '../../components/Lettering';
import AboutCompanySection from "../../components/About-Company-Section";
import Footer from "../../components/Footer";

import photo1 from '../../assets/Company-Photos/Oldin-frente.jpg';
import photo2 from '../../assets/Company-Photos/Oldin-maquinas.jpg';
import photo3 from '../../assets/Company-Photos/Oldin-materia-prima.jpg';
import photo4 from '../../assets/Company-Photos/Oldin-estoque.jpg';

const photos = [
    photo1,
    photo2,
    photo3,
    photo4
];


export default function Company() {
    return (
        <div>
            <Header />
            <Lettering />
            <AboutCompanySection photos={photos}/>
            <Footer />
        </div>
    );
}