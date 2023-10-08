import React from "react";
import './styles.css';
import Header from '../../components/Sections/Header';
import Lettering from '../../components/Secondary-Components/Lettering';
import FilterProductsSection from '../../components/Sections/Filter-Products-Section';

export default function Products() {
    return (
        <div>
            <Header />
            <Lettering />
            <FilterProductsSection />
        </div>
    );
}