import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchLogs = (userId) => API.get(`/logs/${userId}`);
export const addLog = (data) => API.post('/logs', data);
