import Http from '@/utils/http.js';

export const getPosterHttp = () => {
    return Http.post('/get_poster');
};
