<template>
    <div id="app">
          <div class="app-content">
              <div class="main-wrapper bgcolor">
                  <h1>白萝卜</h1>
                  <v-line :textName="tempData.titleName.originCount"></v-line>
                  <!--banner start  -->
                  <div class="banner-wrapper" v-if="imgs">
                      <v-banner :cproducts="imgs" ></v-banner>
                  </div>
                  <!--banner end  -->
                  <!--nav start  -->
                  <div class="nav-wrapper">
                      <ul class="nav">
                          <li class="nav-item" @click="toggleImg(1)" >
                              <router-link to="/home">
                                  <img :src="homeImg" alt="" class="nav-image" >
                                  <span class="nav-text">首页</span>
                              </router-link>
                          </li>
                          <li class="nav-item" @click="toggleImg(2)">
                              <router-link to="/pesti">
                                  <img :src="nongyaoImg" alt="" class="nav-image" >
                                  <span class="nav-text">农药记录</span>
                              </router-link>
                          </li>
                          <li class="nav-item" @click="toggleImg(3)">
                              <router-link to="/ferti">
                                  <img :src="feiliaoImg" alt="" class="nav-image" >
                                  <span class="nav-text">肥料记录</span>
                              </router-link>
                          </li>
                          <li class="nav-item" @click="toggleImg(4)">
                              <router-link to="/farm">
                                  <img :src="nongshiImg" alt="" class="nav-image" >
                                  <span class="nav-text">农事记录</span>
                              </router-link>
                          </li>
                      </ul>
                      <ul class="nav">
                          <li class="nav-item" @click="toggleImg(5)">
                              <router-link to="/video">
                                  <img :src="shengzhangImg" alt="" class="nav-image" >
                                  <span class="nav-text">生成视频</span>
                              </router-link>
                          </li>
                          <li class="nav-item" @click="toggleImg(6)">
                              <router-link to="/rating">
                                  <img :src="yonghuImg" alt="" class="nav-image" >
                                  <span class="nav-text">用户评价</span>
                              </router-link>
                          </li>
                          <li class="nav-item" @click="toggleImg(7)">
                              <router-link to="/complaint">
                                  <img :src="tousuImg" alt="" class="nav-image" >
                                  <span class="nav-text">投诉建议</span>
                              </router-link>
                          </li>
                          <li class="nav-item" @click="toggleImg(8)">
                              <router-link to="/other">
                                  <img :src="huanjing" alt="" class="nav-image" >
                                  <span class="nav-text">其它</span>
                              </router-link>
                          </li>
                      </ul>
                  </div>
                  <!--nav end  -->
              </div>
              <router-view :datas="tempData"></router-view>
          </div>
          <div class="footer">
              <div class="footer-price">&yen5/500g</div>
              <div class="footer-btn">
                  <button>立即购买</button>
              </div>
          </div>
    </div>
</template>

<script>
    import line from  './components/common/line.vue';
    import banner from  './components/banner/banner.vue';
    import home from 'img/home.png';
    import home_1 from 'img/home_1.png';
    import nongyaojilu from 'img/nongyaojilu.png';
    import nongyaojilu_1 from 'img/nongyaojilu_1.png';
    import feiliaojilu_1 from 'img/feiliaojilu_1.png';
    import feiliaojilu from 'img/feiliaojilu.png';
    import nongshijilu from 'img/nongyaojilu.png';
    import nongshijilu_1 from 'img/nongyaojilu_1.png';
    import shengzhangshipin from 'img/shengzhangshipin.png';
    import shengzhangshipin_1 from  'img/shengzhangshipin_1.png';
    import yonghupingjia from 'img/yonghupingjia.png';
    import yonghupingjia_1 from 'img/yonghupingjia_1.png';
    import tousujianyi from  'img/tousujianyi.png';
    import tousujianyi_1 from  'img/tousujianyi_1.png';
    import huanjingcanshu from 'img/huanjingcanshu.png';
    import huanjingcanshu_1 from  'img/huanjingcanshu_1.png';

    const SUCCESS_OK = 0;
    let datajson=require('./data.json');

    export default {
      data () {
        return {
         products: {},
         imgs:[],
         tempData: {
         },
         imgIndex: 1
        }
      },
      computed: {
          homeImg() {
              return this.imgIndex==1?home_1:home;
          },
          nongyaoImg() {
              return this.imgIndex==2?nongyaojilu_1:nongyaojilu;
          },
          feiliaoImg() {
              return this.imgIndex==3?feiliaojilu_1:feiliaojilu;
          },
          nongshiImg() {
              return this.imgIndex==4?nongshijilu_1:nongshijilu;
          },
          shengzhangImg() {
              return this.imgIndex==5?shengzhangshipin_1:shengzhangshipin;
          },
          yonghuImg() {
              return this.imgIndex==6?yonghupingjia_1:yonghupingjia;
          },
          tousuImg() {
              return this.imgIndex==7?tousujianyi_1:tousujianyi;
          },
          huanjing() {
              return this.imgIndex==8?huanjingcanshu_1:huanjingcanshu;
          }
      },
      methods: {
          toggleImg($index) {
              this.imgIndex=$index;
          }
      },
      // app.vue组件创建的时候，发送请求
      created() {
          this.products = datajson;
          this.tempData.titleName =  {
              originCount: '溯源次数总计： 23次',
              productIde: '产品认证',
              farmIntroduction: '农场介绍',
              farmQualification: '农场资质',
              pesticideRecord: '农药记录',
              fertilizer: '肥料记录',
              farming: '农事记录',
              growthVideo: '生成视频',
              userEvaluate: '用户评价',
              complaintCon: '投诉建议',
              other: '其它'
          };
          this.tempData.titleEnglistName = {
              productIde: 'Product certification',
              farmIntroduction: 'Company introduction',
              farmQualification: 'Farm qualification',
              pesticideRecord: 'Spray records',
              fertilizer: 'Spray records',
              farming: 'Farming records',
              growthVideo: 'Growth video',
              userEvaluate: 'User evaluation',
              complaintCon: 'Complaibts&suggestions',
              other: 'other'
          };
          this.tempData.products = datajson;

          this.imgs.push('./src/img/banner-1.png');
          this.imgs.push('./src/img/banner-2.png');
          this.imgs.push('./src/img/banner-3.png');
          this.imgs.push('./src/img/banner-4.png');
          this.imgs.push('./src/img/banner-5.png');
          this.imgs.push('./src/img/banner-6.png');
          this.imgs.push('./src/img/banner-1.png');

      },
      components: {
          'v-line': line,
          'v-banner': banner
      }
    }


</script>


<style lang="less" rel="stylesheet/less">
    @import "./assets/mixin.less";
    /*公共背景 start*/
    .bgcolor {
        box-sizing: border-box;
        padding: 10px;
        background-color: #fff;
    }
    /*公共背景 end*/
    .main-wrapper{
        h1 {
            padding:8px 0 12px 0;
            font-size: 17px;
            text-align: center;
            color:#66990e;
        }
        .banner-wrapper {
            height: 174px;
            margin: 17px auto;
        }
        .nav-wrapper {
            padding: 0 10px;
            box-sizing: border-box;
            background-color: #fff;
            margin: 0 auto;
            .nav {
                display: flex;
                font-size: 0;
                margin-bottom: 24px;
                .nav-item {
                    flex: 1;
                    .nav-image {
                        display: block;
                        width: 42px;
                        height: 42px;
                        margin: 0 auto;
                    }
                    .nav-text {
                        display: block;
                        width: 48px;
                        font-size: 12px;
                        text-align: center;
                        margin: 0 auto;
                        padding: 8px 0 15px 0;
                    }
                    .active {
                        color: #66990e;
                    }
                    &:last-child {
                        margin-right: 0;
                    }

                }
            &:last-child {
                margin-bottom: 0;
            }
            }
        }
    }
    /**公共样式*/
    .error-item {
        display: block;
        width: 150px;
        height: 150px;
        margin: 0 auto;
    }
    .app-content {
        width: 100%;
        height: auto;
        padding-bottom: 50px;
    }
    .footer {
        position: fixed;
        display: flex;
        height: 50px;
        width: 100%;
        bottom: 0;
        left: 0;
        background-color: #f7f7f8;
        .footer-price {
            box-sizing: border-box;
            flex: 1;
            height: 50px;
            line-height: 50px;
            padding-left: 20px;
            color: #f3be1c;
            font-size: 20px;
            text-align: left;
        }
        .footer-btn {
            flex: 1;
            text-align: right;
            button {
                width: 130px;
                height: 50px;
                line-height: 50px;
                color: #fff;
                text-align: center;
                font-size: 17px;
                background-color: #f3be1c;
            }
        }
    }
    .bg-img {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        img {
            width: 100%;
            margin-top: 50%;
        }
        .close-img {
            position: absolute;
            right: 0;
            top: 10px;
            color: #fff;
            font-size: 20px;
            width: 25px;
        }
    }
</style>
