<!--
 * @Author: jimouspeng
 * @Date: 2022-07-22 16:43:40
 * @Description: 上传图片页
 * @FilePath: \node_service\client\client-vue\src\pages\index\index.vue
-->
<template>
    <div class="page-wrap">
        <div class="upload-module">
            <div class="upload-list">
                <!-- 表单FormData上传文件 -->
                <div class="upload-item">
                    <div class="upload-title">表单input上传</div>
                    <div class="upload-input">
                        <!-- multiple属性支持多选, max属性好像无效 -->
                        <input type="file" accept="*" @change="fileChange" multiple="multiple" max="2" />
                    </div>
                    <div class="btn-upload flex-box" @click.stop="uploadFile">上传</div>
                </div>
                <!-- iframe上传文件 -->
                <div class="upload-item">
                    <div class="upload-title">iframe上传</div>
                    <!-- form表单的target必须指向iframe的name -->
                    <form class="form-module" action="http://127.0.0.1:7001/iframe_upload?callback=http://localhost:8080&params=callback" method="post" enctype="multipart/form-data" target="iframe_uplaod">
                        <div class="upload-input">
                            <!-- input必须要有name属性 -->
                            <input name="img" type="file" accept="*" multiple="multiple" max="2" @change="fileChange" />
                        </div>
                        <input type="submit" value="上传" />
                    </form>
                </div>
                <!-- 拖放上传文件 -->
                <div class="upload-item">
                    <div class="drop-area flex-box" @dragover="fileDragover" @drop="fileDrop">将文件拖拽到这里</div>
                    <div class="btn-upload flex-box" @click.stop="uploadFile">上传</div>
                </div>
            </div>
            <img-show :img-list="imgList" />
        </div>
        <div class="reset-btn" @click.stop="resetData">重置</div>
        <div class="router-item" @click.stop="goPreview">前往浏览</div>
        <iframe name="iframe_uplaod" style="display: none"></iframe>
    </div>
</template>
<script>
import { loginHttp, IndexHttp, uploadFormHttp } from '@/apis/index.js';
import ImgShow from '@/components/img-show/index.vue';
export default {
    name: 'index-page',
    components: {
        ImgShow,
    },
    data() {
        return {
            imgList: [],
            formCtx: null,
        };
    },
    created() {
        loginHttp().then((res) => {
            console.log(res, '登陆-----------');
        });
        IndexHttp().then((res) => {
            console.log(res, '\n---from index.vue');
        });
        window.jsoncallback = function (data) {
            var code = data.result_code;
            if (code == 1) {
                window.location.href = data.url ? data.url : window.location.href;
            } else {
                alert(data.result_msg);
            }
        };
    },
    methods: {
        fileChange(e) {
            const fileList = Array.from(e.target.files);
            const formCtx = new FormData();
            fileList.forEach((item, index) => {
                const imgUrl = URL.createObjectURL(item);
                this.imgList.push(imgUrl);
                console.log(index, '09000');
                formCtx.append(`upload_${index}`, e.target.files[index]);
            });
            this.formCtx = formCtx;
            console.log(this.formCtx, 'form-----------');
        },
        /** 表单方式上传 */
        uploadFile() {
            uploadFormHttp(this.formCtx).then((res) => {
                console.log(res);
            });
        },
        resetData() {
            this.imgList = [];
        },
        goPreview() {
            // this.$router.push('img-list')
            this.$router.push('callback');
        },
        // 拖拽上传, chrome下必须阻止dragenter和dragover的默认行为，才能触发drop事件
        fileDragover(e) {
            e.preventDefault();
        },
        fileDrop(e) {
            e.preventDefault();
            const fileCtx = e.dataTransfer;
            const formCtx = new FormData();
            console.log(fileCtx.files);
            for (let i = 0; i < fileCtx.files.length; i++) {
                const imgUrl = URL.createObjectURL(fileCtx.files[i]);
                this.imgList.push(imgUrl);
                console.log(i, '09000');
                formCtx.append(`upload_${i}`, fileCtx.files[i]);
            }
            this.formCtx = formCtx;
            console.log(this.formCtx, 'form-----------');
        },
    },
};
</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';
.flex-box {
    display: flex;
    align-items: center;
    justify-content: center;
}
.page-wrap {
    font-size: 16px;
    padding-top: 36px;
    .upload-module {
        display: flex;
        margin-left: 48px;
        .upload-list {
            .upload-item {
                background: #ccc;
                width: 360px;
                padding: 24px;
                box-sizing: border-box;
                .btn-upload {
                    background-color: #fff;
                    width: 120px;
                    height: 28px;
                    margin-top: 12px;
                }
                .upload-title {
                    text-align: left;
                    font-weight: 700;
                }
                .upload-input {
                    display: flex;
                    justify-content: flex-start;
                    margin-top: 12px;
                }
                &:nth-child(n + 2) {
                    margin-top: 12px;
                }
                .form-module {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    input {
                        margin-top: 12px;
                        width: 120px;
                        height: 30px;
                    }
                }
                .drop-area {
                    width: 240px;
                    height: 90px;
                    background-color: greenyellow;
                    color: gray;
                }
            }
        }
    }
    .reset-btn {
        text-align: left;
        margin-left: 48px;
        margin-top: 12px;
        font-weight: 700;
    }
    .router-item {
        margin-left: 48px;
    }
}
</style>
