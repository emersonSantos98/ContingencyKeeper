// src/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://keeper.free.beeceptor.com/',
  // Adicione headers ou configurações personalizadas aqui
});

axiosInstance.interceptors.request.use(config => {
  // Adicione lógica de interceptação de request aqui, como adicionar um token de autorização
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Adicione lógica de interceptação de erros aqui, como redirecionar para a página de login em caso de 401
    return Promise.reject(error);
  }
);

export default axiosInstance;
