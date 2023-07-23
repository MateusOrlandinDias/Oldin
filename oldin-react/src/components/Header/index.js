import React from 'react';
import './styles.css';
import logo from '../../assets/logo-oldin.png';
import { FiChevronDown } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Oldin Logo" className="logo" />
            </div>
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-item">EMPRESA</li>
                    <li className="nav-item">PRODUTOS</li>
                    <li className="nav-item">
                        <div className="dropdown-container">
                            <span>FALE CONOSCO</span>
                            <FiChevronDown className="arrow-down-icon" />
                            <ul className="dropdown-menu">
                                <li><a href="/feedback">FEEDBACK</a></li>
                                <li><a href="/work-with-us">TRABALHE CONOSCO</a></li>
                                <li><a href="/contact">CONTATO</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className="login-register-section">
                <button className="login-button">
                    <FontAwesomeIcon icon={faSignInAlt} className="login-icon" />
                    <span>ENTRAR</span>
                </button>
                <button className="register-button">
                    <FontAwesomeIcon icon={faUserPlus} className="register-icon" />
                    <span>REGISTRAR-SE</span>
                </button>
            </div>
        </header>
    );
}
