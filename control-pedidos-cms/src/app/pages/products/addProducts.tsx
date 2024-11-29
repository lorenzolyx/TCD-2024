import React, { useState } from 'react';
import { createProduct } from '../../../services/products-service';
import { useNavigate } from 'react-router-dom';

const AddProduct: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProduct({ name, price, quantity });
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Preço:
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      </label>
      <label>
        Quantidade:
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AddProduct;
