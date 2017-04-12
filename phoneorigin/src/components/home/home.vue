<template>
   <!--首页list start  -->
   <div class="home-wrapper">
      <!--产品认证 start  -->
      <div class="productIde-wrapper bgcolor">
         <v-line :textName="pro.textName"></v-line>
         <v-title :titleName="pro.titleName"></v-title>
         <v-typeone :imgs="pro.imgs"></v-typeone>
      </div>
      <!--产品认证 end -->
      <!--农场介绍 start-->
      <div class="farmIntroduction-wrapper bgcolor">
         <v-line :textName="farmItd.textName"></v-line>
         <v-title :titleName="farmItd.titleName"></v-title>
         <div class="single-line">
            <div>
               <img :src="farmItd.img" alt="" class="single-image">
            </div>
            <p class="single-desc">{{farmItd.desc}}</p>
         </div>
      </div>
      <!--农场介绍 end-->
      <!--农场资质 start-->
      <div class="farmQualification-wrapper bgcolor">
         <v-line :textName="farmQua.textName"></v-line>
         <v-title :titleName="farmQua.titleName"></v-title>
         <v-typeone :imgs="farmQua.imgs"></v-typeone>
         <div class="userdetial">
            <span class="username">联系人:<em>{{farmQua.name}}</em></span>
            <span class="userphone">电话:<em>{{farmQua.phone}}</em></span>
            <span class="useraddr">地址:<em>{{farmQua.addr}}</em></span>
         </div>
      </div>
      <!--农场资质 end-->
   </div>
   <!--首页list end   -->

</template>
<script>
    import line from  'components/common/line.vue';
    import titleEnglish from 'components/common/titleEnglish.vue';
    import typeone from 'components/common/typeone.vue';

    export default {
        props: {
            datas: {},
        },
        data() {
            return {
                pro: {},
                farmItd: {},
                farmQua: {},
                farmUserDetail: {}
            }
        },
        created() {
            //产品认证
            this.pro = {
                textName: this.datas.titleName.productIde,
                titleName: this.datas.titleEnglistName.productIde,
                imgs: this.datas.products.productIde.proImgs
            }
            //农场介绍
            this.farmItd = {
                textName: this.datas.titleName.farmIntroduction,
                titleName: this.datas.titleEnglistName.farmIntroduction,
                img: this.datas.products.farmIntroduction.farmImg,
                desc: this.datas.products.farmIntroduction.descrption
            }
            //农场资质
            this.farmQua = {
                textName: this.datas.titleName.farmQualification,
                titleName: this.datas.titleEnglistName.farmQualification,
                imgs: this.datas.products.farmQualification.farmImgs,
                name: this.datas.products.farmQualification.contactsName,
                phone: this.datas.products.farmQualification.contactsPhone,
                addr: this.datas.products.farmQualification.contactsAddr
            }
            //农场资质联系人信息

        },
        components: {
            'v-line': line,
            'v-title': titleEnglish,
            'v-typeone': typeone
        }
    }

</script>
<style lang="less" rel="stylesheet/less">
    .home-wrapper {
        .productIde-wrapper {
            margin-top: 10px;
        }
        .farmIntroduction-wrapper {
            width: 100%;
            margin-top: 10px;
            .single-image {
                width: 100%;
                height: 180px;
                padding-top: 5px;
                margin: 0 auto;
            }
            .single-desc {
                box-sizing: border-box;
                padding: 5px;
                font-size: 12px;
            }

        }
        .farmQualification-wrapper {
            margin-top: 10px;
           .userdetial {
              margin-top: 15px;
              font-size: 0;
              span {
                 display: block;
                 height: 24px;
                 font-size: 14px;
                 line-height: 24px;
                 font-weight: 700;
                 vertical-align: top;
                 em {
                    padding-left: 5px;
                    font-weight: 300;
                 }
              }
           }
        }

    }

</style>