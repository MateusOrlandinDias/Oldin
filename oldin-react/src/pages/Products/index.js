import React from "react";
import './styles.css';
import Header from '../../components/Sections/Header';
import Lettering from '../../components/Secondary-Components/Lettering';
import ProductsSection from '../../components/Sections/Products-Section';
import Footer from "../../components/Sections/Footer";

export default function Products() {
    return (
        <div>
            <Header />
            <Lettering />
            <ProductsSection />
            <Footer />
        </div>
    );
}