import axios from 'axios'

export function request(config){
    const instance1 = axios.create({
        // baseURL:"http://106.54.54.237:8000/api/hy",
        baseURL:'http://123.207.32.32:8000/api/hy',
        timeout:5000
    })
    // axios的拦截器
    // 请求拦截
    // instance1.interceptors.request.use(config =>{
    //     console.log(config)
    //     return config
    // },err => {
    //     console.log(err)
    // })
    // 响应拦截
    // instance1.interceptors.response.use(res =>{
    //     console.log(res)
    //     return res.data
    // },err=>{
    //     console.log(err)
    // })
    return instance1(config)
}