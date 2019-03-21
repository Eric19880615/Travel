import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'
// import store from '../store'
// import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.PLAT_API, // api的base_url
  timeout: 15000, // 请求超时时间
  //withCredentials: true // 携带cookie信息
})

// request拦截器
service.interceptors.request.use(config => {
  let token = getToken();
  if (token) {
    config.headers['Access-Token'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
  }

  // config.headers['Content-Type'] = 'application/x-www-form-url; charset=UTF-8'
  // config.headers['Content-Type'] = 'application/json; charset=UTF-8'

  // 强制把data中的数值改成json格式
  // if (config.method.toLowerCase() === 'post') {
  //   config.data = JSON.stringify(config.data)
  // }

  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非1是抛错
  */
    const res = response.data
    if (res.code !== 1) {
      // 9003 会话过期
      if (res.code === -9003) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        })
      } else {
        Message({
          message: res.message,
          type: 'error',
          duration: 5 * 1000
        })
      }
      return Promise.reject(res.error)
    } else {
      return response.data
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
