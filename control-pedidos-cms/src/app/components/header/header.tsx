import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/assets/images/logo.png" alt="CMS Logo" />
        <h1>Controle de Pedidos</h1>
      </div>
      <div className="header__menu">
        <button className="header__menu-item">Sair</button>
      </div>
    </header>
  );
};

export default Header;
