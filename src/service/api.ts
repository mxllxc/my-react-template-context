import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}/`,
});

export const postLogin = async (
  data:{ login: string; acesso: string }, 
  config?: AxiosRequestConfig) => {
  try {
    const response = await api.post<string>('auth/login', data, { ...config });
    return response.data;
  } catch (error) {
    return "";
  }
};
