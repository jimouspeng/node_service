/*
 * @Date: 2022-07-27 16:15:30
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2022-07-28 18:26:13
 * @FilePath: \node_service\server\server-egg-ts\config\plugin.ts
 */
import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
    // static: true,
    // nunjucks: {
    //   enable: true,
    //   package: 'egg-view-nunjucks',
    // },
    cors: {
        enable: true,
        package: 'egg-cors',
    },
}

export default plugin
