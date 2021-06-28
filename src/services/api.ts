import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apitesttcc.protestodireto.com.br',
});
export default api;
