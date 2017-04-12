<template>
    <div class="grow-wrapper bgcolor">
        <v-line :textName="datas.titleName.growthVideo"></v-line>
        <v-title :titleName="datas.titleEnglistName.growthVideo"></v-title>
        <div class="video">
            <video :src="videoImg" v-show="videoShow"></video>
            <img src="../../../src/img/play.jpg" v-show="imgShow" class="play" id="play"/>
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
        data() {
          return {
              videoImg: '',
              videoShow: false,
              imgShow: false
          }
        },
        created() {
            if(this.datas.products.video.videoImg) {
                this.videoImg = this.datas.products.video.videoImg;
                this.videoShow = true;
            }else {
                this.imgShow = true;
            }
        },
        components: {
            'v-line': line,
            'v-title': titleEnglish
        }
    }

</script>
<style lang="less" rel="stylesheet/less">
    .grow-wrapper {
        margin-top: 10px;
        .video {
            width: 100%;
            height: 174px;
            img,video {
                width: 100%;
                height: 174px;
            }
        }
    }

</style>