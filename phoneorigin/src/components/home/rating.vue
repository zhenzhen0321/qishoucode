<template>
    <div class="rating-wrapper bgcolor">
        <v-line :textName="datas.titleName.userEvaluate"></v-line>
        <v-title :titleName="datas.titleEnglistName.userEvaluate"></v-title>
        <div class="rating-list" v-show="isRatingList">
            <div class="rating-btn clearfix" @click="showRatingAdd">我要评论</div>
            <ul class="rating clearfix">
                <li class="rating-item" v-for="(item,index) in datas.products.ratings" >
                    <div class="avatar">
                        <img :src="item.avatar" alt="" class="avatar-img">
                        <p class="avatar-name">{{item.username}}</p>
                        <div class="avatar-date">{{item.rateTime}}</div>
                    </div>
                    <div class="rating-content border-1px">
                        <div class="star-wrapper">
                            <star :size="36" :score="item.score"></star>
                        </div>
                        <div class="rating-content-text">
                            {{item.text}}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="rating-add" v-show="isRatingAdd">
           <div class="star-wrapper">
              <span style="float: left" class="clearfix"> 评分：</span><star :size="36" :score="4"></star>
           </div>
            <textarea   placeholder=" 请输入评价内容">
            </textarea>
            <button @click="isRatingCommit">提交</button>

        </div>
    </div>
</template>
<script>
    import star from 'components/star/star.vue';
    import line from  'components/common/line.vue';
    import titleEnglish from 'components/common/titleEnglish.vue';
    export default {
        props: {
            datas: {}
        },
        data() {
          return {
              isRatingList: true,
              isRatingAdd: false
          }
        },
        methods: {
            showRatingAdd(){
                this.isRatingAdd=true;
                this.isRatingList=false;
            },
            isRatingCommit() {
                this.isRatingAdd=false;
                this.isRatingList=true;
            }
        },
        components: {
            star,
            'v-line': line,
            'v-title': titleEnglish

        }

    }
</script>
<style lang="less" rel="stylesheet/less">
    @import "../../../src/assets/mixin.less";
    .rating-wrapper {
        width: 100%;
        margin-top: 10px;
        .rating-list {
            .rating-btn {
                float: right;
                width: 62px;
                height: 20px;
                font-size: 12px;
                line-height: 20px;
                text-align: center;
                color: #fff;
                background-color: #ffba00;
            }
            .rating {
                width: 100%;
                .rating-item {
                    display: flex;
                    margin-top: 15px;
                    .avatar {
                        flex: 0 0 40px;
                        text-align: center;
                        .avatar-img {
                            width: 35px;
                            height: 35px;
                            border-radius: 50%;
                        }
                        .avatar-name {
                            height: 18px;
                            font-size: 12px;
                            line-height: 18px;
                        }
                        .avatar-date {
                            height: 14px;
                            font-size: 10px;
                            font-weight: 300;
                            line-height: 14px;
                        }

                    }
                    .rating-content {
                        flex: 1;
                        .star-wrapper {
                            padding: 8px 0;
                            .border-1px(rgba(7, 17, 27, 0.1));

                        }
                        .rating-content-text {
                            padding-top: 8px;
                            font-size: 13px;
                            line-height: 14px;
                        }
                    }
                }
            }
        }
        .rating-add {
            width: 100%;
            font-size: 16px;
            font-weight: 200;
            textarea {
                width: 100%;
                height: 150px;
                margin-top: 15px;
                font-size: 12px;
                outline:none;
                border: 1px solid #f2f2f2;
            }
            button {
                width: 100%;
                height: 30px;
                font-size: 14px;
                line-height: 30px;
                color: #ffffff;
                margin-top: 15px;
                background-color: #ffba00;
                border: none;
                border-radius: 5px;
            }

        }

    }
</style>