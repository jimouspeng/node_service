/*
 * @Author: jimouspeng
 * @Date: 2022-07-22 11:35:44
 * @Description:
 * @FilePath: \node_service\server\server-egg-ts\app\router.ts
 */
import { Application } from 'egg'

export default (app: Application) => {
    const { controller, router } = app
    router.post('/get_poster', controller.poster.getPoster)
    router.post('/user_login', controller.login.userLogin)
    router.post('/iframe_upload', controller.upload.iframeUpload)
    router.post('/upload_img', controller.upload.uploadImg)
    router.get('/', controller.home.index)
}
