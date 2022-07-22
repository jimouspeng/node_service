import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import Index from './App.vue'
import { routes } from './routes/index.js'
const App = createApp(Index)
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
App.use(router)
App.mount('#app')
