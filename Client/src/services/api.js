import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5191/' //URL da API
});

export default api

