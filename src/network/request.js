
// 导入axios模块
import axios from 'axios';


export function request(config){
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/wh/',
    // baseURL: "http://123.207.32.32:8000/api/wh/",
    timeout: 5000,
  });

  //响应拦截器
  instance.interceptors.response.use(res => {
    return res.data;
  },err => {
    console.log(err);
  });
  return instance(config);
};