<template>
    <div>
        <ul v-if="dataDetails.length" class="typetthree">
            <li v-for="(item,index) in dataDetails" class="typetthree-item">
                <img :src="item.img" alt="" v-if="item" class="typetthree-image" @click="bgImg(item.img)">
                <div class="text">
                    <span>日期：<em>{{item.useDate != ''?item.useDate:'-'}}</em></span>
                    <span>农事内容：<em>{{item.farmCount != ''?item.farmCount:'-'}}</em></span>
                    <span>生长阶段：<em>{{item.generationPhase != ''?item.generationPhase:'-'}}</em></span>
                    <span>操作人：<em>{{item.useUserName != ''?item.useUserName:'-'}}</em></span>
                    <span>肥/药名称：<em>{{item.brand != ''?item.brand:'-'}}</em></span>
                    <span>品牌：<em>{{item.brand != ''?item.brand:'-'}}</em></span>
                    <span>亩使用量：<em>{{item.useAmount != ''?item.useAmount:'-'}}</em></span>
                    <span>使用方法：<em>{{item.useMethod != ''?item.useMethod:'-'}}</em></span>
                    <span>供应商：<em>{{item.supplierName != ''?item.supplierName:'-'}}</em></span>
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
    .typetthree {
        width: 100%;
        .typetthree-item {
            width: 100%;
            .typetthree-image {
                flex: 1;
                width: 100%;
                height: 180px;
                padding-top: 5px;
                margin: 0 auto;
            }
            .text {
                width: 100%;
                display: flex;
                flex-flow: row wrap;
                padding: 8px;
                font-size: 0;
                span {
                    display: block;
                    flex: 0 0 50%;
                    height: 24px;
                    line-height: 24px;
                    font-size: 12px;
                    font-weight: 700;
                    vertical-align: middle;
                    em {
                        font-weight: 300;
                        padding-left: 2px;
                    }
                &:last-child {
                    flex: 1;
                }
                }

            }
        }
    }
</style>