import React from 'react';
import './Products.css';
import Button from '../../components/button/button';
import Table from '../../components/table/table';


const Products: React.FC = () => {
  const headers = ['ID', 'Nome', 'Preço', 'Quantidade', 'Categoria'];
  const data = [
    { ID: '1', Nome: 'Pão', Preço: 'R$ 5,00', Quantidade: 50, Categoria: 'Padaria' },
    { ID: '2', Nome: 'Refrigerante', Preço: 'R$ 8,00', Quantidade: 20, Categoria: 'Bebidas' },
  ];

  const handleAddProduct = () => {
    console.log('Adicionar Produto');
  };

  return (
    <div className="products">
      <div className="products-header">
        <h1>Produtos</h1>
        <Button label="Adicionar Produto" onClick={handleAddProduct} />
      </div>
      <Table headers={headers} data={data} />
    </div>
  );
};

export default Products;
