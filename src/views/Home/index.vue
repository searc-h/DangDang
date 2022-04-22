<template>
    <div class="home-outer">
        <transition name="fade">
            <div class="aside-top" v-show="scrollTop>=700">
                <span @click="toHome">dangdang</span>
                <input type="text" placeholder="输入关键字" v-model="keyword">
                <i class="el-icon-search" @click="toSearch"></i>
            </div>
        </transition>
       
        <transition name="fade">
            <div class="aside-left" @click="To" v-show="scrollTop>=100">
                <a href="#categoryList" :class="{'first':chooseToColor=='first'}">
                    <li> <i class="el-icon-search"></i><div >图书</div></li>
                </a>
                <a href="#costumeList" :class="{'second':chooseToColor=='second'}">
                    <li> <i class="el-icon-search"></i><div>服装</div></li>
                </a>
                <a href="#generallList" :class="{'third':chooseToColor=='third'}">
                    <li><i class="el-icon-search"></i> <div>百货</div></li>
                </a>
                <a href="#childList" :class="{'forth':chooseToColor=='forth'}">
                    <li><i class="el-icon-search"></i> <div>母婴</div></li>
                </a>
                <a href="#recommandList" :class="{'fifth':chooseToColor=='fifth'} " >
                    <li> <i class="el-icon-search"></i><div>推荐</div></li>
                </a>
            </div>
        </transition>
        
        <div class="aside-top-right">
            <div class="right-all">
                <img src="./../../static/others/adv.jpg" alt="">
                <li @click="toCart">
                    <i class="el-icon-shopping-cart-full"></i>
                    <div class="item" >购物车</div>
                </li>
                <li>
                    <i class="el-icon-star-off"></i>
                    <div class="item">我的收藏</div>
                </li>
                <li>
                    <i class="el-icon-star-off"></i>
                    <div class="item">我的足迹</div>
                </li>
                <li>
                    <i class="el-icon-star-off"></i>
                    <div class="item">我的叮当</div>
                </li>
                <li>
                    <i class="el-icon-star-off"></i>
                    <div class="item">咨询小专家</div>
                </li>
            </div>
        </div>
        <div class="aside-right">
            
            <a href="#top" @click="To">
                <i class="el-icon-top"></i>
            </a>
        </div>
        <img src="../../static/images/backgound_img/header.jpg" >
        <MyHeader :newCartNum='newCartNum'/>
        <TopBanner/>
        <NavBanner/>
        <ListBanner/>
        <ClockList/>
        <div id="categoryList"></div>
        <CategoryList/>
        <div id="costumeList"></div>
        <CostumeList/>
        <div id="generallList"></div>
        <GenerallList/>
        <div id="childList"></div>
        <ChildList/>
        <div id="recommandList"></div>
        <RecommandList/>
        <MyFooter/>
    </div>
</template>

<script>

import CategoryList from './CategoryList'
import ChildList from './ChildList'
import ClockList from './ClockList'
import CostumeList from './CostumeList'
import GenerallList from './GeneralList'
import ListBanner from './ListBanner'
import NavBanner from './NavBanner'
import RecommandList from './RecommandList'
import TopBanner from './TopBanner'
export default {
    name:'Home',
    data() {
        return {
            scrollTop:0,
            keyword:''
        }
    },
    components:{
        CategoryList,
        ChildList,
        ClockList,
        CostumeList,
        GenerallList,
        ListBanner,
        NavBanner,
        RecommandList,
        TopBanner
    },
    methods:{
        To(){
            // 阻止锚点跳转后，修改url的行为
            setTimeout(()=>{
                console.log('yes')
                this.$router.replace({
                    name:'home'
                })
            },0)
        },
        getScrollTop(){
            console.log('yes')
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        },
        toSearch(){
            this.$router.push({
                name:'search',
                query:{keyword:this.keyword}
            })
        },
        toCart(){
            this.$router.push({
                name:'cart'
            })
        },
        toHome(){
            this.$router.push({
                name:'home'
            })
        }
    },
    mounted() {
        window.addEventListener('scroll',this.getScrollTop);
    },
    destroyed() {
        window.removeEventListener('scroll', this.getScrollTop);
    },
    computed:{
        chooseToColor(){
            if(this.scrollTop > 3000) return 'fifth'
            else if(this.scrollTop > 2400) return 'forth'
            else if(this.scrollTop > 1900) return 'third'
            else if(this.scrollTop > 1329) return 'second'
            else if(this.scrollTop > 600) return 'first'
            
            else return ''
        },
        newCartNum(){
            return sessionStorage.getItem('cartNum')
        }
    }
}
</script>

<style lang='less' scoped>
.fade-enter-active{
    transition:all .4s;
}

.fade-enter{
    opacity: 0;
    transform: scale(1.25);
}
.fade-enter-to{
    transform: scale(1);
}

.fade-leave-active {
    transition:all .4s;
}
.fade-leave{
    transform: scale(1);
}
 .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: scale(1.25);
}
.home-outer{
    width: 100%;
    text-align: center;
    position: relative;
    
    .aside-top{
        width: 1315px;
        background-color: rgba(232,49,62,0.9);
        height: 50px;
        position: fixed;
        z-index: 99999;
        padding: 8px 0px ;
        box-sizing: border-box;
        text-align: start;
        span{
            display: inline-block;
            width: 250px;
            line-height: 30px;
            margin-right: 30px;
            color: white;
            text-align: center;
        }
        input{
            padding-left: 20px;
            box-sizing: border-box;
            line-height: 30px;
            width: 700px;
            outline: none;
            &:active{
                outline: none;
            }
        }
        
        i{
            position: absolute;
            top: 9px;
            color: white;
            background-color: rgb(199, 6, 6);
            font-size: 30px;
            line-height: 33px;
        }
    }
    .aside-top-right{
        position: fixed;
        top: 0px;
        right: 0px;
        list-style: none;
        .right-all{
            display: flex;
            flex-direction: column;
            background-color: rgba(20, 13, 13, 0.8);
            li{
                line-height: 35px;

                cursor: pointer;
                position: relative;
                .item{
                    position: absolute;
                    top: 0px;
                    left: 80px;
                    // transform: translateX(-80px);
                    font-size: 13px;
                    color: #fff;
                    width: 80px;
                    line-height: 35px;
                    text-align: center;
                    background-color: rgba(20, 13, 13, 0.8);
                    transition: all 0.3s;
                }
                i{
                    font-size: 28px;
                    color: white;
                }
                &:hover{
                    background-color: red;
                    .item{
                        left: -80px;
                    }
                }
            }
        }
    }
    .aside-left{
        // height: 150px;
        box-sizing: border-box;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: rgb(231, 213, 213);
        position: fixed;
        bottom: 100px;
        left:25px;
        list-style: none;
        z-index: 999999;
        a{
            line-height: 25px;
            text-decoration: none;
            color: black;
            padding: 5px;
            display: inline-block;
            li{
                position: relative;
                i{
                    font-size: 25px;
                }
                div{
                    line-height: 38px;
                    width: 50px;
                    position: absolute;
                    top: -5px;
                    left: 30px;
                    opacity: 0;
                    transition: all 0.3s;
                }
                &:hover{
                    div{
                        opacity: 1;
                        background-color: aqua;
                    }
                }
            }
            &:hover{
                background-color: aqua;
            }
        }
        .first{
            background-color: rgb(147,212,111);
        }
        .second{
            background-color: rgb(249,127,103);
        }
        .third{
            background-color: rgb(114,213,153);
        }
        .forth{
            background-color: rgb(255,133,127);
        }
        .fifth{
            background-color: rgb(249,127,103);
        }
    }
    .aside-right{
        position: fixed;
        bottom: 50px;
        right: 0px;
        background-color: rgb(204, 197, 197);
        border-radius: 25px;
        a{
            i{
                font-size: 30px;
            }
        }   
    }

}
</style>