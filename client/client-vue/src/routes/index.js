/*
 * @Author: jimouspeng
 * @Date: 2022-07-22 16:14:29
 * @Description:
 * @FilePath: \node_service\client\client-vue\src\routes\index.js
 */
import IndexPage from '@/pages/index/index.vue';
import ImgList from '@/pages/img-list/index.vue';
import SuccessCallback from '@/pages/success/index.vue';
export const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/index',
    },
    {
        path: '/index',
        name: 'index',
        component: IndexPage,
    },
    {
        path: '/callback',
        name: 'callback',
        component: SuccessCallback,
    },
    {
        path: '/img-list',
        name: 'img-list',
        component: ImgList,
    },
];
