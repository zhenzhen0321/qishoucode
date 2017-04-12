<template>
    <div class="ohter-wrapper bgcolor">
        <v-line :textName="datas.titleName.other"></v-line>
        <v-title :titleName="datas.titleEnglistName.other"></v-title>
        <img src="../../../src/img/no-data.png" alt="" class="error-item">

    </div>
</template>
<script>
    import line from  'components/common/line.vue';
    import titleEnglish from 'components/common/titleEnglish.vue';

    export default {
        props: {
            datas: {}
        },
        components: {
            'v-line': line,
            'v-title': titleEnglish
        }
    }

</script>
<style lang="less" rel="stylesheet/less">
    .other-wrapper {
    }

</style>