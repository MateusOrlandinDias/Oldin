import React from 'react';
import './styles.css';
import phoneIcon from '../../../assets/Contact/phone-call.png';
import emailIcon from '../../../assets/Contact/o-email (1).png';
import whatsappIcon from '../../../assets/Contact/whatsapp.png';
import instagramIcon from '../../../assets/Contact/instagram.png';
import facebookIcon from '../../../assets/Contact/facebook.png';

export default function ContactSection() {
    const phoneNumber = "+55 (51) 3587-9095";
    const emailAddress = "oldin@oldin.com.br";
    const whatsappNumber = "+55 (51) 3587-9095";
    const instagramLink = "https://www.instagram.com/oldingrampos/";
    const facebookLink = "https://www.facebook.com/oldingramposefitas279/?locale=pt_BR";

    return (
        <section className="contact-section">
            <div className="contact-container">
                <p className="contact-description">
                    Ficamos felizes em ajudar! Entre em contato conosco pelos meios disponíveis abaixo. Acompanhe também nossas redes sociais para as últimas novidades e atualizações.
                </p>
                <h2 className="contact-title">Entre em Contato</h2>
                <div className="contact-options">
                    <div className="contact-option">
                        <img src={phoneIcon} alt="phone" className="contact-icon" />
                        <span className="contact-text">{phoneNumber}</span>
                    </div>
                    <div className="contact-option">
                        <img src={emailIcon} alt="email" className="contact-icon" />
                        <span className="contact-text">{emailAddress}</span>
                    </div>
                    <div className="contact-option">
                        <img src={whatsappIcon} alt="whatsapp" className="contact-icon" />
                        <span className="contact-text">{whatsappNumber}</span>
                    </div>
                    <div className="contact-option">
                        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="contact-link">
                            <img src={instagramIcon} alt="instagram" className="contact-icon" />
                            <span className="contact-text">@oldingrampos</span>
                        </a>
                    </div>
                    <div className="contact-option">
                        <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="contact-link">
                            <img src={facebookIcon} alt="facebook" className="contact-icon" />
                            <span className="contact-text">Oldin Grampos E Fitas Adesivas</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
