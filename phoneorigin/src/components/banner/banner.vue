<template>
    <div class="banner" id="banner">
        <ul :style="{width:ulWidth}">
            <li v-for="(item,index) in cproducts" class="banner-item">
                <img :src="cproducts[index]" alt="">
            </li>
        </ul>
        <ol :style="{width: olWidth+'px',marginLeft: olMarginLeft+'px' }">
            <li v-for="(item,index) in cproducts" class="circle"></li>
        </ol>
    </div>
</template>
<script>
    window.onload =function () {
        function banner() {
            //1.获取事件源及相关元素。（老三步）
            var banner = document.getElementById("banner");
            var imgWidth = banner.offsetWidth;
            var ul = banner.firstElementChild || banner.firstChild;
            var ol = banner.children[1];


            //3.点亮第一个按钮。
            var olLiArr = ol.children;
            olLiArr[0].className = "current";

            //4.鼠标放到ol的li上切换图片
            for(var i=0;i<olLiArr.length;i++){
                //自定义属性，把索引值绑定到元素的index属性上
                olLiArr[i].index = i;
                olLiArr[i].onmouseover = function () {
                    //排他思想
                    for(var j=0;j<olLiArr.length;j++){
                        olLiArr[j].className = "";
                    }
                    this.className = "current";
                    //鼠标放到小的方块上的时候索引值和key以及circle同步
                    key = circle = this.index;
                    //移动盒子
                    animate(ul,-this.index*imgWidth);
                }
            }

            //5.添加定时器
            var timer = setInterval(autoPlay,500);

            //固定向右切换图片
            //两个定时器（一个记录图片，一个记录小方块）
            var key = 0;
            var circle = 0;
            function autoPlay(){
                //通过控制key的自增来模拟图片的索引值，然后移动ul
                key++;
                if(key>olLiArr.length){
                    //图片已经滑动到最后一张，接下来，跳转到第一张，然后在滑动到第二张
                    ul.style.left = 0;
                    key = 1;
                }
                animate(ul,-key*imgWidth);
                //通过控制circle的自增来模拟小方块的索引值，然后点亮盒子
                //排他思想做小方块
                circle++;
                if(circle>olLiArr.length-1){//索引值不能大于等于5，如果等于5，立刻变为0；
                    circle = 0;
                }
                for(var i=0;i<olLiArr.length;i++){
                    olLiArr[i].className = "";
                }
                olLiArr[circle].className = "current";
            }

            banner();
            //鼠标放上去清除定时器，移开后在开启定时器
            all.onmouseover = function () {
                div.style.display = "block";
                clearInterval(timer);
            }
            all.onmouseout = function () {
                div.style.display = "none";
                timer = setInterval(autoPlay,500);
            }
        }
        function animate(ele,target) {
            clearInterval(ele.timer);
            var speed = target>ele.offsetLeft?10:-10;
            ele.timer = setInterval(function () {
                var val = target - ele.offsetLeft;
                ele.style.left = ele.offsetLeft + speed + "px";
                if(Math.abs(val)<Math.abs(speed)){
                    ele.style.left = target + "px";
                    clearInterval(ele.timer);
                }
            },100)
        }
    }
    export default {
        props: {
            cproducts: {
                type: Array
            }
        },
        computed: {
            ulWidth() {
               return this.cproducts.length*100+"%";
            },
            olWidth() {
                return (this.cproducts.length-1)*17+12;
            },
            olMarginLeft() {
                return -((this.cproducts.length-1)*17+12)/2;
            }
        },
        created() {
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
    .banner {
        width: 100%;
        position: relative;
        height: 174px;
        overflow: hidden;
        ul {
            display: flex;
            position:absolute;
            left:0;
            top:0px;
            .banner-item {
                flex: 1;
                img {
                    width: 100%;
                    height: 174px;
                    margin: 0 auto;
                }

            }

        }
        ol {
            position: absolute;
            bottom: 10px;
            text-align: center;
            left: 50%;
            .circle {
                float: left;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background:#fff;
                border:1px solid #ccc;
                margin-left:5px;
                &:first-child {
                    margin-left: 0;
                }
            }
            .current {
                background-color: red;
            }

        }

    }
</style>