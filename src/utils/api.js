import axios from 'axios';

export default axios.create({
  baseURL: 'http://18.223.205.190:8080/',
  responseType: 'json'
});
