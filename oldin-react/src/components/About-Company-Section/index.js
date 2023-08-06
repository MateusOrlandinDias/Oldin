import React from "react";
import './styles.css';

import PhotosCompany from "../Photos-Company";

export default function AboutCompanySection({photos}) {
    return (
        <section className="about-company-section">
            <div className="about-company">
                <h2 className="company-title">Bem-vindos à <br />
                    <span className="company-name">Oldin Grampos e Fitas Industriais Ltda</span>
                </h2>
                <div className="company-text">
                    &nbsp; A OLDIN, foi fundada em 2001 com o propósito de fabricar de grampos industriais e atender as indústrias dos ramos calçadista e moveleiro do Rio Grande do Sul oferecendo qualidade dos produtos e agilidade na entrega. <br />
                    &nbsp; Em 2006, a empresa entrou no ramo de flexografia oferecendo além de grampos, fitas adesivas.<br />
                    &nbsp; Hoje, possuímos no catálogo de produtos da nossa empresa 107 tipos de grampos, pinos industriais, fitas lisas e personalizadas, tnt, filme, pezinhos estofados, percintas, entre outros materiais.<br />
                    &nbsp; Desde a sua fundação, a OLDIN sempre buscou ter um projeto inovador para atender seus clientes e atualmente a empresa se preocupa em atender de forma satisfatória, investindo continuamente nos seus produtos, no seu atendimento e no seu quadro de colaboradores visando colocar a qualidade acima de tudo, como um compromisso com o cliente.
                </div>
            </div>
            <PhotosCompany photos={photos}/>
        </section>
    );
}