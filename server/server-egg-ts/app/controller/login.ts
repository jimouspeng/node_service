/*
 * @Date: 2022-07-29 16:17:00
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2022-07-29 16:59:45
 * @FilePath: \node_service\server\server-egg-ts\app\controller\login.ts
 */
import { Controller } from 'egg'

export default class LoginController extends Controller {
    public async userLogin() {
        const { ctx } = this
        console.log(ctx, '1111')
        const data = {
            code: 0,
            msg: '登陆成功',
        }
        ctx.body = JSON.stringify(data)
    }
}
