/*
 * @Author: jimouspeng
 * @Date: 2022-07-22 11:35:44
 * @Description:
 * @FilePath: \node_service\server\server-egg-ts\app\controller\home.ts
 */
import { Controller } from 'egg'

export default class HomeController extends Controller {
    public async index() {
        const { ctx } = this
        console.log(ctx, '1111')
        ctx.body = await ctx.service.test.sayHi('egg')
    }
}
