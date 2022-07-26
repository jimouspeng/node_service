/*
 * @Author: jimouspeng
 * @Date: 2022-07-22 11:35:44
 * @Description: 
 * @FilePath: \upload_service\server\server-egg\app\controller\home.ts
 */
import { Controller } from 'egg';

export default class HomeController extends Controller {
    public async index() {
        const { ctx } = this;
        ctx.body = await ctx.service.test.sayHi('egg');
    }
}
