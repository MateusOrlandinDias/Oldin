import React from "react";
import './styles.css';

export default function LocalizationSection() {
    return (
        <section className="localization-section">
            <h2 className="section-title">Localização</h2>
            <p className="section-subtitle">
                Rua Limoeiro, 279 - Liberdade - Novo Hamburgo - RS
            </p>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d728.4263946992177!2d-51.1460609932249!3d-29.719776481052904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519428ce1c9da47%3A0xa34eb0666345412b!2sOldin%20Industria%20e%20Comercio%20de%20Grampos%20e%20fitas%20adesivas!5e0!3m2!1spt-BR!2sbr!4v1692478251353!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Mapa 1"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1692478505855!6m8!1m7!1sTNwgJww0RN4ElI1wu-wZDA!2m2!1d-29.71956490253537!2d-51.14551192696898!3f150.92806583935626!4f-19.383348075908998!5f0.7820865974627469"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Mapa 2"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};
