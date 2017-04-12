<template>
    <div class="title-english">{{titleName}}</div>
</template>
<script>
    export default {
        props: {
            titleName: String
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
    .title-english {
        height: 24px;
        font-size: 12px;
        line-height: 24px;
        text-align: center;
        vertical-align: middle;
    }
</style>