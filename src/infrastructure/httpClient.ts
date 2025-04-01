import axios from "axios";


export const httpClient = axios.create({
  baseURL: `${process.env.API_URL||'http://localhost:3001'}/`,
  timeout: 5000,
});