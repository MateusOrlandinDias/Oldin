import React from 'react';
import './styles.css';
import { FaTruck } from 'react-icons/fa';
import { MdOutlineSell } from 'react-icons/md';
import { AiFillSafetyCertificate } from 'react-icons/ai';

export default function BenefitsSection() {
    return (
        <section className='benefits-section'>
            <ul>
                <li>
                    <span className='benefit-icon'>
                        <FaTruck className='benefit-icon' />
                    </span>
                    <p className='benefit-text'>
                        <small>Temos</small>
                         FRETE 
                        <small className='benefit-info'>*transportadora</small>
                    </p>
                </li>
                <hr className='separator' />
                <li>
                    <span className='benefit-icon'>
                        <MdOutlineSell className='benefit-icon' />
                    </span>
                    <p className='benefit-text'>
                        <small>Compra</small>
                         Online e Presencial 
                    </p>
                </li>
                <hr className='separator' />
                <li>
                    <span className='benefit-icon'>
                        <AiFillSafetyCertificate className='benefit-icon' />
                    </span>
                    <p className='benefit-text'>
                        <small>FAZENDO HISTÓRIA</small>
                         DESDE 2001 
                    </p>
                </li>
            </ul>
        </section>
    );
}