import React from "react";
import './styles.css';
import Header from '../../components/Sections/Header';
import Lettering from '../../components/Secondary-Components/Lettering';
import ContactSection from "../../components/Sections/Contact-Section";
import Footer from '../../components/Sections/Footer';

export default function Contact() {
    return (
        <div>
            <Header />
            <Lettering />
            <ContactSection />
            <Footer />
        </div>
    );
}