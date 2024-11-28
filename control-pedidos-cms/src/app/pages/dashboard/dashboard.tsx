import React from 'react';
import './Dashboard.css';
import Card from '../../components/card/card';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>
      <div className="cards-container">
        <Card title="Total de Pedidos" content={120} />
        <Card title="Produtos Disponíveis" content={45} />
        <Card title="Vendas Hoje" content="R$ 1.250,00" />
      </div>
    </div>
  );
};

export default Dashboard;
