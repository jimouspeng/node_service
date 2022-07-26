import Axios from 'axios'

const Http = Axios.create({
    baseURL: 'http://127.0.0.1:7001',
    timeout: 20 * 1000,
})

// 添加请求拦截器
Http.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        config.headers = {
            'x-csrf-token': 'jimous-login',
            'Content-Type': 'multipart/form-data',
        }
        return config
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 添加响应拦截器
Http.interceptors.response.use(
    function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        console.log(response, '-------response-----', '\n cookie: ', document.cookie)
        if (parseInt(response.data.code) === 0) {
            return response
        }
        return response.data
    },
    function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        console.log(error, '----error--', '\n cookie: ', document.cookie)
        return Promise.reject(error)
    }
)

export default Http
