<template>
    <div class="listbanner">
        <div class="left-list" >
            <ul class="list-ul" @click="clickToSearch()">
                <li class="item"  
                @mouseleave="HandleLeaveHover" 
                @mouseenter="handleEnterHover(index)" 
                :class="{'hoverLi':curentIndex==index}"
                v-for="(item,index) in listData" :key="index">
                    <a v-for="(itema,indexa) in item.content" :key="indexa">
                        {{itema}} 
                        {{indexa+1==item.content.length?'':'、'}}
                    </a>
                </li>
            </ul>
            <div class="details" @mouseenter="keepTheHover" @mouseleave="removeTheHover">
                我很大，你忍一下
            </div>
        </div>

        <div class="center-imgs">
            <div class="swiper-container" id="mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="../../../static/images/swiper_img/swiper01.jpg" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../../../static/images/swiper_img/swiper02.jpg" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../../../static/images/swiper_img/swiper03.jpg" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../../../static/images/swiper_img/swiper04.jpg" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../../../static/images/swiper_img/swiper05.jpg" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../../../static/images/swiper_img/swiper06.jpg" />
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>

                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev prebtn"></div>
                <div class="swiper-button-next nextbtn" ></div>
            </div>
        </div>

        <div class="right-list">
            <img src="../../../static/others/title.jpg" alt="">
            <div class="title">
                <div class="left" :class="{'on':curentDir=='left'}" @mouseenter="curentDir='left'">信息公告</div>
                <div class="right" :class="{'on':curentDir=='right'}" @mouseenter="curentDir='right'">服务公告</div>
            </div>
            <div class="content">
                <div v-show="curentDir=='left'">
                    <li>阅读</li>
                    <li>精选</li>
                    <li>乐高</li>
                    <li>抢购</li>
                    <li>文艺</li>
                </div>
                <div v-show="curentDir=='right'">
                    <li>诈骗</li>
                    <li>花费</li>
                    <li>商品</li>
                    <li>处罚</li>
                    <li>其他</li>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import Swiper from 'swiper/js/swiper'   
export default {
    name:'ListBanner',
    data() {
        return {
            // 记录list导航栏下标
            curentIndex:-1,
            temp :-1,
            // 记录右侧公告类型
            curentDir:'left',
            // 对公告类型的间断切换
            timer:null,
            listData :[]
        }
    },
    methods:{
        handleEnterHover(index){
            // 进入,添加hoverLi类名
            this.curentIndex = index
            this.temp = index
        },
        HandleLeaveHover(){
            // 离开，删除hoverLi的类名
            this.curentIndex = -1

        },
        keepTheHover(){
            // 进入大框，让当前的li hover
            this.curentIndex = this.temp
        },
        removeTheHover(){
            // 离开大框，让当前的li 取消hover
            
            this.curentIndex = -1
        },
        clickToSearch(){
            this.$router.push({
                name:'search',
                query:{keyword:this.listData[this.curentIndex].content}
            })

        }
    },
    mounted(){
        this.$nextTick(()=>{
            new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                effect:'fade',
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                clickable:true
                },
                
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
          })
        }),

        // 间断切换右侧公告类型
        this.timer = setInterval(() => {
            this.curentDir=='left'?this.curentDir='right':this.curentDir='left'
            this.timer = null
        }, 3000);

        this.listData = [
            {index:0,content:['图书','童书']},
            {index:1,content:['电子书']},
            {index:2,content:['创意文体']},
            {index:3,content:['服饰','内衣']},
            {index:4,content:['鞋靴','箱包']},
            {index:5,content:['户外运动']},
            {index:6,content:['孕','婴','童']},
            {index:7,content:['家具','家纺','汽车']},
            {index:8,content:['家居','家装','康体']},
            {index:9,content:['个人护理','清洁']},
            {index:10,content:['食品','茶酒']}
        ]
    }
}
</script>

<style lang='less' scoped>
.listbanner{
    display: flex;
    padding: 0px 82px;
    box-sizing: border-box;
    background-image: url('../../../static/others/bg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    .left-list{
        height: 328px;
        background-color: rgb(255, 255, 255);
        position: relative;
        .list-ul{
            width: 178px;
            z-index: 99;
            li{
                line-height: 25.6px;
                list-style: none;
                z-index: 999;
                position: relative;
                font-size: 14px;
                text-align: start;
                padding-left: 20px;
                box-sizing: border-box;
                background-color: rgb(247, 248, 239);
                border: 2px solid transparent;
                a:hover{
                    text-decoration: underline;
                }
            }
            .hoverLi{
                color: red;
                border: 2px solid red;
                border-spacing: none;
                cursor: pointer;
                font-size: 15px;
                width: 180px;
                border-right: 0;
            }
        }

        .details{
            top: 0px;
            left: 178px;
            width: 800px;
            height: 340px;
            background-color: rgb(255, 255, 255);
            z-index: 9;
            border: 2px solid red;
            outline: none;
            display: none;
            position: absolute;
        }
    }
    .left-list:hover{
        // li:hover{
        //     color: red;
        //     border: 2px solid red;
        //     cursor: pointer;
        //     font-size: 15px;
        //     width: 180px;
        //     border-right: 0;
        // }
        .details{
            display: block;
        }
    }

    .center-imgs{
        width: 796px;
        height: 326px;
        .prebtn,.nextbtn{
            width: 40px;
            height: 70px;
            margin-top: -35px;

            color: rgb(185, 179, 179);
            box-sizing: border-box;
            background-color: rgba(65, 62, 62, 0.3);
            transition: all 0.3s;
            &:hover{
                background-color: rgba(82, 79, 79,0.6);
            }
        }
        .prebtn{
            transform: translateX(-60px);
            
        }
        .nextbtn{
            transform: translateX(60px);
            
        }
        &:hover{
            .prebtn{
                transform: translateX(-12px);
            }
            .nextbtn{
                transform: translateX(12px);
            }
        }

        
    }
    .right-list{
        .title{
            display: flex;
            .left,.right{
                width: 50%;
                line-height: 30px;
                background-color: rgb(185, 179, 179);
                
            }
            .on{
                background-color: white;
            }
        }
        .content{
            background-color: white;
            list-style: none;
            font-size: 13px;
            li{
                line-height: 19.4px;
            }
        }
    }
}

</style>