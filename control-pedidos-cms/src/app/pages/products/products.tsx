import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../services/products-service';
import { Link } from 'react-router-dom';
import Table from '../../components/table/table';

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <Table data={products} />
      <Link to="/products/add">
        <button>Adicionar Produto</button>
      </Link>
    </div>
  );
};

export default Products;
