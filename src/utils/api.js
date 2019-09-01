/* eslint-disable no-console */
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://18.223.205.190:8080/',
  responseType: 'json',
});

instance.interceptors.request.use(config => {
  console.log('-> Request: ', config);
  return config;
});

instance.interceptors.response.use(response => {
  console.log('-> response: ', response.data);
  return response.data;
});

export default instance;
