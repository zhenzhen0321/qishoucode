<template>
    <div class="complaint-wrapper bgcolor">
        <v-line :textName="datas.titleName.complaintCon"></v-line>
        <v-title :titleName="datas.titleEnglistName.complaintCon"></v-title>
        <div class="commplaint-add">
            <span>建议内容:</span>
            <input type="text" placeholder="请输入建议内容"><i>＊</i>
            <span>联系方式:</span>
            <input type="text" placeholder="请输入手机号/QQ/邮箱">
            <button>提交</button>
        </div>
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
    .complaint-wrapper {
        width: 100%;
        margin-top: 10px;
        .commplaint-add {
            span {
                font-size: 16px;
            }
            input {
                height: 40px;
                width: 90%;
                line-height: 40px;
                font-size: 14px;
                margin: 10px 0;
                border: 1px solid #f7f7f7;
            }
            i {
                color: red;
            }
            button {
                width: 100%;
                height: 30px;
                margin-top: 15px;
                color: #ffffff;
                font-size: 14px;
                line-height: 30px;
                border: none;
                border-radius: 5px;
                background-color: #ffba00;
            }
        }
    }
</style>