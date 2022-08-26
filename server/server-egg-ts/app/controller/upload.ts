/*
 * @Date: 2022-07-28 16:38:55
 * @LastEditors: Please set LastEditors
 * @Description: 上传模块
 * @LastEditTime: 2022-08-26 11:24:27
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

        /** steam模式上传文件-单文件上传
         * ctx.getFileStream()：获取上传的文件流，仅支持上传一个文件的情况
         * stream.fields 获取其他表单字段
         */
        // const stream = await ctx.getFileStream();
        // console.log('====================================');
        // console.log(stream.readable, stream);
        // const uploadResult: Boolean = await ctx.service.upload.keepLocalImgStream(stream, stream.filename);
        // console.log('====================================', uploadResult);

        /** steam模式上传文件-多文件上传 */
        const parts: Function = ctx.multipart();
        let part;
        // parts() 返回 promise 对象
        while ((part = await parts()) != null) {
            console.log('====================================');
            console.log(part, 'kankan');
            console.log('====================================');
            if (part.length) {
                // 这是 busboy 的字段
                console.log('field: ' + part[0]);
                console.log('value: ' + part[1]);
                console.log('valueTruncated: ' + part[2]);
                console.log('fieldnameTruncated: ' + part[3]);
            } else {
                if (!part.filename) {
                    // 这时是用户没有选择文件就点击了上传(part 是 file stream，但是 part.filename 为空)
                    // 需要做出处理，例如给出错误提示消息
                    return;
                }
                // part 是上传的文件流
                console.log('field: ' + part.fieldname);
                console.log('filename: ' + part.filename);
                console.log('encoding: ' + part.encoding);
                console.log('mime: ' + part.mime);
                // 文件处理
                let result: Boolean = await ctx.service.upload.keepLocalImgStream(part, part.filename);
                console.log(result);
            }
        }
        ctx.body = JSON.stringify({
            code: 0,
            msg: '上传成功'
        })
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
