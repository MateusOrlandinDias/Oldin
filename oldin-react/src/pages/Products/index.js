import React from "react";
import './styles.css';
import Header from '../../components/Sections/Header';
import Lettering from '../../components/Secondary-Components/Lettering';
import FilterProductsSection from '../../components/Sections/Filter-Products-Section';
import ProductsSection from '../../components/Sections/Products-Section';
import Footer from "../../components/Sections/Footer";
import productsObject from '../../assets/products';

export default function Products() {
    return (
        <div>
            <Header />
            <Lettering />
            <FilterProductsSection />
            <ProductsSection products={productsObject}/>
            <Footer />
        </div>
    );
}