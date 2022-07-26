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
                <div class="upload-item">
                    <div class="upload-title">表单input上传</div>
                    <div class="upload-input">
                        <!-- multiple属性支持多选, max属性好像无效 -->
                        <input type="file" accept="*" @change="fileChange" multiple="multiple" max="2" />
                    </div>
                </div>
            </div>
            <img-show :img-list="imgList" />
        </div>
        <div class="reset-btn" @click.stop="resetData">重置</div>
        <div class="router-item" @click.stop="goPreview">前往浏览</div>
    </div>
</template>
<script>
import { loginHttp, IndexHttp, uploadFormHttp } from '@/apis/index.js'
import ImgShow from '@/components/img-show/index.vue'
export default {
    name: 'index-page',
    components: {
        ImgShow,
    },
    data() {
        return {
            imgList: [],
        }
    },
    created() {
        loginHttp().then((res) => {
            console.log(res, '登陆-----------')
        })
        IndexHttp().then((res) => {
            console.log(res, '\n---from index.vue')
        })
    },
    methods: {
        fileChange(e) {
            const fileList = Array.from(e.target.files)
            const formCtx = new FormData()
            fileList.forEach((item, index) => {
                const imgUrl = URL.createObjectURL(item)
                this.imgList.push(imgUrl)
                console.log(index, '09000')
                formCtx.append(`upload_${index}`, e.target.files[index])
            })

            console.log(formCtx, 'form-----------')

            this.uploadWithFormdata(formCtx)
        },
        /** 表单方式上传 */
        uploadWithFormdata(file) {
            uploadFormHttp(file).then((res) => {
                console.log(res)
            })
        },
        resetData() {
            this.imgList = []
        },
        goPreview() {
            this.$router.push('img-list')
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';
.page-wrap {
    font-size: 16px;
    padding-top: 36px;
    .upload-module {
        display: flex;
        margin-left: 48px;
        .upload-item {
            background: #ccc;
            width: 360px;
            padding: 24px;
            box-sizing: border-box;
            .upload-title {
                text-align: left;
                font-weight: 700;
            }
            .upload-input {
                display: flex;
                justify-content: flex-start;
                margin-top: 12px;
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
