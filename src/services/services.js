import http, { APP_ID } from '../http-common';

const getAll = () => http.get(`/apps/${APP_ID}/books`);
const create = (data) => http.post(`/apps/${APP_ID}/books`, data);
const remove = (id) => http.delete(`/apps/${APP_ID}/books/${id}`);

const bookServices = {
  getAll,
  create,
  remove,
};

export default bookServices;
