/*
 * @Author: jimouspeng
 * @Date: 2022-08-01 11:53:04
 * @Description: 上传
 * @FilePath: \node_service\server\server-egg-ts\app\service\Upload.ts
 */
import { Service } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

const keepPath = path.resolve(__dirname, '../../resource')

export default class Upload extends Service {
    public keepLocalImg(filePath: string, fileName: string): Promise<Boolean> {
        return new Promise((resolve, reject) => {
            console.log(keepPath, '看看keepPath', filePath);

            console.log('\nfileName:', fileName);


            const readableStream = fs.createReadStream(filePath);

            const file = fs.createWriteStream(path.resolve(keepPath, `./${fileName}`));

            readableStream.pipe(file)

            file.on('finish', () => {
                console.log('数据写入完成');
                resolve(true)
                /** 删除内存中的数据 */
                fs.unlink(filePath, (err) => {
                    console.log(err, '删除了吗');
                })
            })

            file.on('error', () => {
                reject(false)
            })
        })

    }
}