import { IProductsType } from '../../type';
import { API } from '../axios';

const _ENDPOINT = '/products-type';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: number) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: number) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IProductsType) => (API.post(_ENDPOINT, data));
const update = (id: number, data: IProductsType) => (API.put(`${_ENDPOINT}/${id}`, data));

export const ProductsTypeService = {
  getAll,
  getById,
  create,
  update,
  remove,
}