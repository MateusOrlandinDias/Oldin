import React from "react";
import './styles.css';
import Header from '../../components/Sections/Header';
import Lettering from '../../components/Secondary-Components/Lettering';
import ProductPage from "../../components/Sections/Product-Page";
import Footer from "../../components/Sections/Footer";

export default function Product() {
    return (
        <div>
            <Header />
            <Lettering />
            <ProductPage />
            <Footer />
        </div>
    );
}