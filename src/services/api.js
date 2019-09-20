import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/dantxal/rocketshoes-mobile',
});

export default api;
