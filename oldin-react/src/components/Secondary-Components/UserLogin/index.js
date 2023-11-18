import React, { useState } from 'react';
import './styles.css';
import { FiChevronDown } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faUser, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function UserLogin() {
    const [loginUser, setLoginUser] = useState(false);

    const disabled = true;

    return (
        <div className={`user-login-container ${disabled ? 'disabled' : ''}`} style={{ position: 'relative' }}>
            {loginUser ? (
                <div className="user-profile">
                    <div className="user-info">
                        <FontAwesomeIcon icon={faUser} className="user-avatar" />
                        <span>Nome do Usuário</span>
                        <FiChevronDown className="dropdown-icon" />
                    </div>
                    <ul className="user-dropdown-menu">
                        <li>
                            <FontAwesomeIcon icon={faUser} className="user-icon" />
                            Perfil
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                            Meus pedidos
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSignOutAlt} className="signout-icon" />
                            Logoff
                        </li>
                    </ul>
                </div>
            ) : (
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
            )}
        </div>
    );
}
