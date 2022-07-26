<!--
 * @Author: jimouspeng
 * @Date: 2022-07-22 16:43:40
 * @Description: 上传图片页
 * @FilePath: \upload_service\client\client-vue\src\pages\index\index.vue
-->
<template>
    <div class="page-wrap">
        <span>jimous</span>
        <div @click.stop="goPreview">前往浏览</div>
    </div>
    <div>hahah</div>
</template>
<script>
export default {
    name: 'index-page',
    methods: {
        goPreview() {
            this.$router.push('picture-list')
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/styles/common.scss';
.page-wrap {
    font-size: 16px;
}
</style>
