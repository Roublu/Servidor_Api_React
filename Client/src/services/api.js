import axios from 'axios';

const api = axios.create({
 baseURL: 'http://localhost:5174/'
});
export default api

