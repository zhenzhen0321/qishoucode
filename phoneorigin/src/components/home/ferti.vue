<template>
    <div class="pestis-wrapper bgcolor">
        <v-line :textName="datas.titleName.fertilizer"></v-line>
        <v-title :titleName="datas.titleEnglistName.fertilizer"></v-title>
        <v-typetwo :dataDetails="pestiDetails"></v-typetwo>
    </div>
</template>
<script>
    import line from  'components/common/line.vue';
    import titleEnglish from 'components/common/titleEnglish.vue';
    import typetwo from 'components/common/typetwo.vue';


    export default {
        props: {
            datas: {}
        },
        data() {
            return {
                pestiDetails: {},
                pesti: {}
            }
        },
        created() {
            this.pestiDetails = this.datas.products.farming.farmingList;
        },
        components: {
            'v-line': line,
            'v-title': titleEnglish,
            'v-typetwo': typetwo
        }
    }

</script>
<style lang="less" rel="stylesheet/less">
    .pestis-wrapper {
        margin-top: 10px;
    }

</style>