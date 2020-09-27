import axios from 'axios';

const axiosConfig = () => ({
  baseURL: 'http://localhost:3004',
})

axios.defaults.baseURL = 'http://localhost:3004';

export const gamesAPI = axios.create(axiosConfig());
