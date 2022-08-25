import Http from '@/utils/http';

export const loginHttp = () => {
    return Http.post('./user_login');
};
