<template>
    <div>
        <ul v-if="imgs" class="typeone">
            <li v-for="(item,index) in imgs" class="typeone-item">
                <img :src="item" alt="" v-if="item" class="typeone-image" @click="bgImg(item)">
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
            imgs: {
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
            if(!this.imgs || !this.imgs.length){
                this.imgShow=true;
            }
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
    .typeone {
        display: flex;
        width: 100%;
        flex-flow: row wrap;
        .typeone-item {
            width: 31%;
            height: 70px;
            padding-right: 5px;
            padding-bottom: 5px;
            padding-top: 5px;
            .typeone-image {
                width: 100%;
                height: 70px;
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>