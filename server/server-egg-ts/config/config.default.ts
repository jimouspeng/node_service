/*
 * @Date: 2022-07-27 16:15:30
 * @LastEditors: Please set LastEditors
 * @Description: 描述文件内容
 * @LastEditTime: 2022-08-01 14:43:49
 * @FilePath: \node_service\server\server-egg-ts\config\config.default.ts
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1658460926134_7106'

    // add your egg config in here
    config.middleware = []

    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    }

    /** 配置跨域参数
     * https://www.jianshu.com/p/1abb56b57746
     */
    config.cors = {
        origin: '*',
        allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH',
        credentials: true,
    }

    /** 
     * 文件上传配置 - https://github.com/eggjs/egg-multipart
     * 启用 file 模式 用于文件上传
     * https://www.eggjs.org/zh-CN/basics/controller#%E8%8E%B7%E5%8F%96%E4%B8%8A%E4%BC%A0%E7%9A%84%E6%96%87%E4%BB%B6
     */
    config.multipart = {
        mode: 'file',
        fileExtensions: ['.csv', '.doc'],
    }

    /** 配置CSRF
     * https://www.eggjs.org/zh-CN/core/security#%E5%AE%89%E5%85%A8%E5%A8%81%E8%83%81-csrf-%E7%9A%84%E9%98%B2%E8%8C%83
     */
    config.security = {
        csrf: {
            // cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
            // queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
            // bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
            // headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
            ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
            enable: false, // 跳过 crsf 检测
            ignore: (ctx) => {
                // 配置忽略crsf检测的路由
                if (ctx.request.url === '/user_login') {
                    return true
                }
            },
        },
    }

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    }
}
