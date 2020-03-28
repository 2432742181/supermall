// 导入 
import axios from 'axios'

//封装
export function request(config){
  let instance = axios.create({
    // baseURL:'http://123.207.32.32:8000',
    baseURL: 'http://106.54.54.237:8000',
    timeout: 5000
  })
  // instance.interceptors.request.use(config => {
  //   return config
  // },err => {

  // })
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })
  return instance(config)
}
export function request2(config){
  let instance = axios.create({
    baseURL: 'http://api.tianapi.com/meinv',
    timeout: 5000
  })
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })
  return instance(config)
}
// 导出