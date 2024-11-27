import { IProducts } from '../../type/index';
import { API } from '../axios';

const _ENDPOINT = '/products';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: number) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: number) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IProducts) => (API.post(_ENDPOINT, data));
const update = (id: number, data: IProducts) => (API.put(`${_ENDPOINT}/${id}`, data));


export const ProductsService = {
  getAll,
  getById,
  create,
  update,
  remove,
}