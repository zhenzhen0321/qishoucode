<template>
    <div class="title">
        <div class="line"></div>
        <div class="text">{{textName}}</div>
        <div class="line"> </div>
    </div>
</template>
<script>
    export default {
        props: {
            textName: String
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
    .title {
        display: flex;
        margin: 0 auto;
        .line {
            position: relative;
            flex: 1;
            top: -6px;
            border-bottom:1px solid #f3be1c;
        }
        .text {
            margin: 0 6px;
            font-weight: 300;
            font-size: 14px;
            color: #f3be1c;
        }

    }
</style>