import React from 'react';
import './styles.css';
import workPng from '../../../assets/Others/retomar.png'

export default function WorkWithUsSection() {
    return (
        <section className='work-with-us-section'>
            <img className='img-work' src={workPng} />
            <div className='about-vacancies'>
                <h1 className='title-work'>TRABALHE CONOSCO</h1>
                <p className='text-work'>Envie seu currículo por email e nos conte um pouco mais sobre você.</p>
                <p className='text-work'>Venha fazer parte do time Oldin!</p>
                <a href="mailto:oldin@oldin.com.br" className='work-mail'>
                    <button className='button-work'>ENVIE SEU CURRÍCULO</button>
                </a>
            </div>
        </section>
    );
}