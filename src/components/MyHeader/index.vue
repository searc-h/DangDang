<template>
    <div class="header-outer">
        <div class="left" v-if="$route.path=='/home'" @mouseenter="isHover=!isHover" @mouseleave="isHover=false">
            <div class="position" >
                送至：北京
                <i class="el-icon-arrow-down" v-show="isHover"></i>
                <i class="el-icon-arrow-up" v-show="!isHover"></i>
            </div>
            <div class="cities-div" :style="{'display':`${showCity}`}">
                <ul class="cities-ul">
                    <li>重庆</li>
                    <li>北京</li>
                    <li>四川</li>
                    <li>青海</li>
                    <li>西藏</li>
                    <li>贵州</li>
                    <li>云南</li>
                    <li>湖南</li>
                    <li>湖北</li>
                    <li>深圳</li>
                </ul>
            </div>
        </div>

        <div class="right">
            <div class="welcome">
                欢迎光临dangdang，
                <span>{{userName?'欢迎':'请'}}</span>
                <span >
                    <span @click="toLogin" style="color:red">{{userName? `${userName}`:'登录'}}</span>
                </span> 
            </div>
            <ul class="li-list">
                <li>成为会员</li>
                <li>
                    <router-link to="/mycart">购物车{{newCartNum}}</router-link>
                    
                </li>
                <i class="line"></i>
                <li>
                    <router-link to="/myorder">我的订单</router-link>
                </li>
                <i class="line"></i>
                <li>我的云书房</li><i class="line"></i>
                <li>我的当当 <i class="el-icon-arrow-down"></i></li><i class="line"></i>
                <li>当当拼团 <i class="el-icon-arrow-down"></i></li><i class="line"></i>
                <li>小说投稿</li><i class="line"></i>
                <li>企业采购 <i class="el-icon-arrow-down"></i></li><i class="line"></i>
                <li>客户舒服</li><i class="line"></i>
                <li>切换无障碍</li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {
    name:'MyHeader',
    data() {
        return {
            isHover:false
        }
    },
    props:["newCartNum"],
    computed:{
        // 是否显示
        showCity(){
            if(this.isHover) return 'block'
            else return 'none'
        },
        userName(){
            return sessionStorage.getItem('userName')
        },
    },
    methods:{
        toLogin(){
            if(!this.userName){
                this.$router.push('/login')
            }
            console.log('没用')
            return
        }
    },
}
</script>

<style lang='less' scoped>
a{
    text-decoration: none;
    color: black;
    &:hover{
        color: red;
    }
}
.header-outer{
    text-align: center;
    font-size: 11px;
    width: 100%;
    line-height: 35px;
    padding: 0px 83px;
    margin-top: -4px;
    box-sizing: border-box;
    background-color: rgb(235, 233, 233);
    display: flex;
    justify-content: space-around;
    font-size: 13px;
    border: 1px solid rgb(214, 211, 211);
    .position{
        padding: 0px 10px;
    }
    .left{
        position: relative;
        &:hover{
            background-color: #fff;
        }
        .cities-div > ul{
            width: 300px;
            height: 100px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: flex-start;
            position: absolute;
            z-index: 99;
            top: 30px;
            left: 0px;
            background-color: rgb(255, 255, 255);
            
            li{
                width: 55px;
                line-height: 20px;
                padding: 5px 0px;
                box-sizing: border-box;
                list-style: none;
                cursor: pointer;
                
            }
            
        }
    }
    .right{
        display: flex;
        justify-content: center;
        .li-list{
            display: flex;
            justify-content: space-around;
            list-style: none;
            position: relative;
            li{
                margin-left: 3px;
                width: 70px;
                &:hover{
                    color: red;
                }
                
            }
            .line{
                display: inline-block;
                height: 15px;
                width: 1px;
                background-color: rgba(136, 136, 134, 0.74);
                margin-top: 13px;
                margin-left: 3px;
            }
        }
    }
    
}
</style>