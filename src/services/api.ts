import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.tavarestech.com.br',
});
export default api;
