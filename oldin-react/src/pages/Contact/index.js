import React from "react";
import './styles.css';
import Header from '../../components/Sections/Header';
import Lettering from '../../components/Secondary-Components/Lettering';
import EmailContactSection from "../../components/Sections/Email-Contact-Section";

export default function Contact() {
    return (
        <div>
            <Header />
            <Lettering />
            <EmailContactSection />
        </div>
    );
}