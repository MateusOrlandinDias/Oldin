import React, { useState } from 'react';
import './styles.css';
import logo from '../../../assets/logo-oldin.png';
import { FiChevronDown } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import UserLogin from '../../Secondary-Components/UserLogin';

export default function Header() {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(location.pathname);

    const handleItemClick = (path) => {
        setActiveItem(path);
    };

    return (
        <header className="header">
            <Link className="logo-container" to="/">
                <img src={logo} alt="Oldin Logo" className="logo" />
            </Link>
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className={activeItem === '/empresa' ? 'active' : ''}>
                        <Link
                            to="/empresa"
                            onClick={() => handleItemClick('/empresa')}>
                            EMPRESA
                        </Link>
                    </li>
                    <li className={activeItem === '/produtos' ? 'active' : ''}>
                        <Link
                            to="/produtos"
                            onClick={() => handleItemClick('/produtos')}>
                            PRODUTOS
                        </Link>
                    </li>
                    <li>
                        <div className="dropdown-container">
                            <div
                                className={activeItem.includes('/feedback')
                                    || activeItem.includes('/trabalhe-conosco')
                                    || activeItem.includes('/contato')
                                    ? 'active' : ''}>
                                <span>FALE CONOSCO</span>
                                <FiChevronDown className="arrow-down-icon" />
                            </div>
                            <ul className="dropdown-menu">
                                <li className={activeItem === '/trabalhe-conosco' ? 'active' : ''}>
                                    <Link
                                        to="/trabalhe-conosco"
                                        onClick={() => handleItemClick('/trabalhe-conosco')}>
                                        TRABALHE CONOSCO
                                    </Link>
                                </li>
                                <li className={activeItem === '/contato' ? 'active' : ''}>
                                    <Link
                                        to="/contato"
                                        onClick={() => handleItemClick('/contato')}>
                                        CONTATO
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <UserLogin />
        </header>
    );
}
