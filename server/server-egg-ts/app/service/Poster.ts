/*
 * @Author: jimouspeng
 * @Date: 2022-08-26 14:49:14
 * @Description: 海报
 * @FilePath: \node_service\server\server-egg-ts\app\service\Poster.ts
 */
import { Service } from 'egg';

export default class Upload extends Service {

    public async sayHi(name: string) {
        return `hi, ${name}`;
    }
}