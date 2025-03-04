import axios from "axios";


export const httpClient = axios.create({
  baseURL: `${process.env.API_URL||'http://localhost:3000'}/api`,
  timeout: 5000,
});