/*
 * @Author: jimouspeng
 * @Date: 2022-07-22 11:35:44
 * @Description: 
 * @FilePath: \upload_service\server\server-egg\app\router.ts
 */
import { Application } from 'egg';

export default (app: Application) => {
    const { controller, router } = app;

    router.get('/', controller.home.index);
};
