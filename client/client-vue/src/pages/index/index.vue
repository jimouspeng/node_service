<template>
    <div>
        <span>jimous</span>
        <div @click.stop="goPreview">前往浏览</div>
    </div>
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
<style lang="scss" scoped></style>
