/*
 * @Author: jimouspeng
 * @Date: 2022-07-22 11:35:44
 * @Description: 
 * @FilePath: \upload_service\server\server-egg\app\service\Test.ts
 */
import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

    /**
     * sayHi to you
     * @param name - your name
     */
    public async sayHi(name: string) {
        return `hi, ${name}`;
    }
}
