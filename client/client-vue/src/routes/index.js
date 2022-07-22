/*
 * @Author: jimouspeng
 * @Date: 2022-07-22 16:14:29
 * @Description:
 * @FilePath: \upload_service\client\client-vue\src\routes\index.js
 */
import IndexPage from '@/pages/index/index.vue'
import PictureList from '@/pages/picture-list/index.vue'
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
        path: '/picture-list',
        name: 'picture-list',
        component: PictureList,
    },
]
