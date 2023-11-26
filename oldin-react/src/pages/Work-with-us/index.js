import React from "react";
import './styles.css';
import Header from '../../components/Sections/Header';
import Lettering from '../../components/Secondary-Components/Lettering';
import Footer from "../../components/Sections/Footer";
import WorkWithUsSection from "../../components/Sections/Work-With-Us-Section";

export default function WorkWithUs() {
    return (
        <div>
            <Header />
            <Lettering />
            <WorkWithUsSection />
            <Footer />
        </div>
    );
}