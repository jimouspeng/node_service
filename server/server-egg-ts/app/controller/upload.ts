/*
 * @Date: 2022-07-28 16:38:55
 * @LastEditors: Please set LastEditors
 * @Description: 上传模块
 * @LastEditTime: 2022-08-01 14:15:39
 * @FilePath: \node_service\server\server-egg-ts\app\controller\upload.ts
 */
// import fs from 'mz/fs'
import { Controller } from 'egg'
export default class UploadController extends Controller {
    public async uploadImg() {
        const { ctx } = this
        console.log(ctx.request.files, '1111')
        for (const file of ctx.request.files) {
            console.log(file, 'kankan file')
            ctx.service.upload.keepLocalImg(file.filepath)
        }
        ctx.body = await ctx.service.test.sayHi('egg')
    }
}
