<!--
 * @Author: jimouspeng
 * @Date: 2022-07-22 17:04:42
 * @Description: 上传图片临时展示
 * @FilePath: \node_service\client\client-vue\src\components\img-show\index.vue
-->
<template>
    <div class="img-list" v-if="imgList.length">
        <div class="img-item" v-for="item in imgList" :key="item">
            <img :src="item" alt="" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'img-show',
    props: {
        imgList: {
            type: Array,
            default: () => [],
        },
    },
}
</script>
<style lang="scss" scoped>
.img-list {
    flex: 1;
    margin-left: 24px;
    text-align: left;
    display: flex;
    .img-item {
        width: 260px;
        padding: 12px;
        box-sizing: border-box;
        img {
            width: 100%;
        }
    }
}
</style>
