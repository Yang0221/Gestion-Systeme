import http from './axios'

export const getData = () => {
    return http.request({
        url: '/home/getData',
        method: 'get'
        //params: {} 传入对应的参数
    })
}