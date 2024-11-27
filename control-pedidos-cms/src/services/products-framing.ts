import { IProductsFraming } from '../../type';
import { API } from '../axios';

const _ENDPOINT = '/products-framing';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: number) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: number) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IProductsFraming) => (API.post(_ENDPOINT, data));
const update = (id: number, data: IProductsFraming) => (API.put(`${_ENDPOINT}/${id}`, data));

export const ProductsFramingService = {
  getAll,
  getById,
  create,
  update,
  remove,
}