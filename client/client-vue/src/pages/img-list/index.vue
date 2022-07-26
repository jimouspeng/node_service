<template>
    <div>
        <span>图片列表</span>
        <div @click.stop="goUpload">继续上传</div>
    </div>
</template>
<script>
export default {
    name: 'picture-list',
    methods: {
        goUpload() {
            this.$router.push('index')
        },
    },
}
</script>
<style lang="scss" scoped></style>
