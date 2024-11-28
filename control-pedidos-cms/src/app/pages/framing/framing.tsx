import React from 'react';
import './framing.css';
import Table from '../../components/table/table';

const Framing: React.FC = () => {
  const headers = ['ID', 'Produto', 'Quantidade', 'Data', 'Status'];
  const data = [
    { ID: '1', Produto: 'Pão', Quantidade: 10, Data: '2024-11-28', Status: 'Entregue' },
    { ID: '2', Produto: 'Refrigerante', Quantidade: 5, Data: '2024-11-27', Status: 'Pendente' },
  ];

  return (
    <div className="products-framing">
      <h1>Pedidos</h1>
      <Table headers={headers} data={data} />
    </div>
  );
};

export default Framing;
