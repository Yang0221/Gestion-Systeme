import http from './axios'

export const getDate = () => {
    http.request({
        url: '/home/getData',
        method: 'get',
        params: {}
    })
}