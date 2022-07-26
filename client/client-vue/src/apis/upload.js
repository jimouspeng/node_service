import Http from '@/utils/http.js'

export const IndexHttp = (params) => {
    return Http.get('/', params)
}

export const uploadFormHttp = (params) => {
    return Http.post('/upload_img', params)
}
