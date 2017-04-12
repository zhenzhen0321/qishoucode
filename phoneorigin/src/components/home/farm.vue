<template>
    <div class="farm-wrapper bgcolor">
        <v-line :textName="datas.titleName.farming"></v-line>
        <v-title :titleName="datas.titleEnglistName.farming"></v-title>
        <v-typethree :dataDetails="farmDetails"></v-typethree>
    </div>
</template>
<script>
    import line from  'components/common/line.vue';
    import titleEnglish from 'components/common/titleEnglish.vue';
    import typethree from 'components/common/typethree.vue';

    export default {
        props: {
            datas: {},
        },
        data() {
            return {
                farmDetails: {}
            }
        },
        created() {
            this.farmDetails = this.datas.products.farming.farmingList;
        },
        components: {
            'v-line': line,
            'v-title': titleEnglish,
            'v-typethree': typethree
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
    .farm-wrapper {
        margin-top: 10px;
    }

</style>