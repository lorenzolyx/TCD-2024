import { IProductsOrder } from '../../type';
import { API } from '../axios';

const _ENDPOINT = '/products-order';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: number) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: number) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IProductsOrder) => (API.post(_ENDPOINT, data));
const update = (id: number, data: IProductsOrder) => (API.put(`${_ENDPOINT}/${id}`, data));

export const ProductsOrderService = {
  getAll,
  getById,
  create,
  update,
  remove,
}