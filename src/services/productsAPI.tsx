import axios from 'axios';

export const productsAPI = axios.create({
  baseURL: 'https://mks-frontend-challenge-api.herokuapp.com/api/v1',
});
