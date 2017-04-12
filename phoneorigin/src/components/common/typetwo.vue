<template>
    <div>
        <ul v-if="dataDetails.length" class="typetwo">
            <li v-for="(item,index) in dataDetails" class="typetwo-item">
                <img :src="item.img" alt="" v-if="item" class="typetwo-image" @click="bgImg(item.img)">
                <div class="text">
                    <span>品牌：<em>{{item.brand != ''?item.brand:'-'}}</em></span>
                    <span>供应商名称：<em>{{item.supplierName != ''?item.supplierName : '-'}}</em></span>
                    <span>生长阶段：<em>{{item.generationPhase!=''?item.generationPhase:'-'}}</em></span>
                    <span>使用日期：<em>{{item.useDate!=''?item.useDate:'-'}}</em></span>
                    <span>亩使用量：<em>{{item.useAmount!=''?item.useAmount:'-'}}</em></span>
                </div>
            </li>
            <img src="../../../src/img/no-data.png" alt="" class="error-item" v-show="imgShow">
        </ul>
        <div class="bg-img" v-show="isBgImg">
            <div class="close-img" @click="closeImg">X</div>
            <img :src="bgImgSrc" alt="" >
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            dataDetails: {
                type: Array
            }
        },
        data() {
            return {
                imgShow: false,
                isBgImg: false,
                bgImgSrc: ''
            };
        },
        methods: {
            bgImg(src) {
                this.bgImgSrc=src;
                this.isBgImg=true;
            },
            closeImg() {
                this.bgImgSrc='';
                this.isBgImg=false;
            }
        },
        created() {
            if(!this.dataDetails || !this.dataDetails.length){
                this.imgShow=true;
            }
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
    .typetwo {
        width: 100%;
        .typetwo-item {
            margin-top: 15px;
            display: flex;
            .typetwo-image {
                flex: 0 0 100px;
                width: 100px;
                height: 100px;
            }
            .text {
                flex: 1;
                margin-left: 20px;
                span {
                    display: block;
                    font-size: 14px;
                    height: 21px;
                    line-height: 21px;
                    font-weight: 500;
                    vertical-align: top;
                    em {
                        font-weight: 300;
                        padding-left: 5px;
                    }
                }
            }
        }


    }

</style>