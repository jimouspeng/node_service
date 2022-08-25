/*
 * @Date: 2022-07-28 16:38:55
 * @LastEditors: Please set LastEditors
 * @Description: 上传模块
 * @LastEditTime: 2022-08-25 17:53:51
 * @FilePath: \node_service\server\server-egg-ts\app\controller\upload.ts
 */
// import fs from 'mz/fs'
interface fileDesc {
    name: string,
    status: Boolean
}
import { Controller } from 'egg'
export default class UploadController extends Controller {
    /** FormData文件上传 */
    public async uploadImg() {
        const { ctx } = this

        /** file模式上传文件-需要开启config.multipart.mode = 'file' */
        // console.log(ctx.request.files, '1111')
        // for (const file of ctx.request.files) {
        //     // console.log(file, 'kankan file')
        //     ctx.service.upload.keepLocalImg(file.filepath, file.filename)
        // }
        // ctx.body = await ctx.service.test.sayHi('egg')

        /** steam模式上传文件 */
        const stream = await ctx.getFileStream();
        console.log('====================================');
        console.log(stream.readable);
        console.log('====================================');

        // ctx.body = await ctx.service.test.sayHi('egg')
    }

    /** Iframe文件上传, 上传成功后返回302重定向页面 */
    public async iframeUpload() {
        const { ctx } = this;
        const fileStatusList: any[] = [];
        for (const file of ctx.request.files) {
            console.log(file, 'kankan file')
            const status = await ctx.service.upload.keepLocalImg(file.filepath, file.filename)
            console.log('====================================');
            console.log(status, '----');
            const fileCtx: fileDesc = {
                name: file.filename,
                status
            }
            fileStatusList.push(fileCtx)
            console.log('====================================');
        }
        ctx.status = 302;
        const callBackUrl = ctx.queries.callback[0] + '/#/' + ctx.queries.params[0]
        ctx.set('Location', callBackUrl + `?code=0`)
        // ctx.body = 'hello， file'
    }
}
