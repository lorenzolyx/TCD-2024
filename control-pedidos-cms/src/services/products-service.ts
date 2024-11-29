import api from './api';

export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const createProduct = async (product: { name: string; price: number; quantity: number }) => {
  const response = await api.post('/products', product);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};


export const updateProduct = async (id: string, product: {
  name: string;
  price: number;
  quantity: number;
  image?: string;
}) => {
  const response = await api.put(`/products/${id}`, product);
  return response.data;
};


