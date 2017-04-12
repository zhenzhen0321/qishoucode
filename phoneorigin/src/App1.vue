<template>
    <div>
      <h1>白萝卜</h1>
      <v-line :textName="products.ITEMMODAL"></v-line>
      <div class="banner-wrapper">
          <!--<v-banner :cproducts="products.CPRODUCE.DATA"></v-banner>-->
      </div>

    </div>
</template>

<script>
    import dataUrl from  './components/util/util';
    import line from  './components/common/line.vue';
    import banner from  './components/banner/banner.vue';


    const SUCCESS_OK = 0;
    const host=dataUrl.host;

    export default {
      data () {
        return {
         products: {}
        }
      },
      // app.vue组件创建的时候，发送请求
      created() {
         this.$http.get(host).then((response) => {
             response = response.body;
             if(response.CODE==SUCCESS_OK){
                 this.products = response.DATA;
                 console.log(this.products);
                 console.log(this.products.CPRODUCE);
             }
            });
         },
         components: {
            'v-line':line,
             'v-banner':banner
         }
    }
</script>


<style lang="less" rel="stylesheet/less">
    h1 {
        font-size: 17px;
        text-align: center;
        color:#66990e;
        padding:18px 0 12px 0;
    }
    .title {
        display: flex;
        width: 95%;
        margin: 0 auto;
        .line {
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom:1px solid #f3be1c;
        }
        .text {
            margin: 0 6px;
            font-weight: 300;
            font-size: 14px;
            color: #f3be1c;
        }

    }
    .banner-wrapper {
        width: 95%;
    }

</style>
