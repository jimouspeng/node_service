/*
 * @Author: jimouspeng
 * @Date: 2022-07-22 11:35:44
 * @Description: 海报模块
 * @FilePath: \node_service\server\server-egg-ts\app\controller\poster.ts
 */
import { Controller } from 'egg'
import * as path from 'path';
import * as fs from 'fs';
import * as puppeteer from 'puppeteer'

export default class PosterController extends Controller {
    public async getPoster() {
        const { ctx } = this
        // console.log(ctx, '1111');
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.baidu.com');
        const filePath = path.resolve('./resource/screen/example.png');
        await page.screenshot({
            /** https://pptr.dev/next/api/puppeteer.screenshotoptions */
            type: 'png', // 'png' | 'jpeg' | 'webp'
            quality: 0, // Quality of the image, between 0-100. Not applicable to png images.
            fullPage: true, // When true, takes a screenshot of the full page.
            encoding: 'binary', // 'base64' | 'binary'
            path: filePath // If no path is provided, the image won't be saved to the disk.
        });
        await browser.close();

        const writeStream = fs.createReadStream(filePath)

        console.log('====================================');
        console.log(ctx.res.writable);
        console.log('====================================');

        writeStream.pipe(ctx.res)

        // writeStream.on('end', () =>)

        // ctx.body = JSON.stringify({
        //     code: 0,
        //     message: '哈哈'
        // });
    }
}
