import React from "react";
import './styles.css';
import Header from '../../components/Sections/Header';
import Lettering from '../../components/Secondary-Components/Lettering';
import ProductPage from "../../components/Sections/Product-Page";

export default function Product() {
    return (
        <div>
            <Header />
            <Lettering />
            <ProductPage />
        </div>
    );
}