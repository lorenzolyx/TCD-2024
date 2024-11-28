import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__menu">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/orders">Pedidos</Link>
        </li>
        <li>
          <Link to="/products">Produtos</Link>
        </li>
        <li>
          <Link to="/settings">Configurações</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;