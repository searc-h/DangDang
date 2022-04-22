<template>
    <div class="topbanner-outer">
        <div class="logo" @click="toHome">
            <img src="../../../static/images/mini_img/title_dd.gif" alt="">
        </div>
        <div class="search-input">
            <div class="search">
                <div class="search-box">
                    <input type="text" placeholder="请输入关键字" v-model="keyword">
                    <div class="allitems">
                        <el-dropdown placement='bottom' show-timeout:100>
                            <span >
                                全部商品<i class="el-icon-caret-bottom"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item >黄金糕</el-dropdown-item>
                                <el-dropdown-item >狮子头</el-dropdown-item>
                                <el-dropdown-item >螺蛳粉</el-dropdown-item>
                                <el-dropdown-item >双皮奶</el-dropdown-item>
                                <el-dropdown-item >狮子头</el-dropdown-item>
                                <el-dropdown-item >螺蛳粉</el-dropdown-item>
                                <el-dropdown-item >双皮奶</el-dropdown-item>
                                <el-dropdown-item >狮子头</el-dropdown-item>
                                <el-dropdown-item >螺蛳粉</el-dropdown-item>
                                <el-dropdown-item >双皮奶</el-dropdown-item>
                                <el-dropdown-item >狮子头</el-dropdown-item>
                                <el-dropdown-item >螺蛳粉</el-dropdown-item>
                                <el-dropdown-item >双皮奶</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <button class="btn"  @click="toSearch"> <i class="el-icon-search icon" style="font-size:30px; "></i></button>
                </div>
            </div>
            <div class="details">
                <ul style="font-size:13px">
                    <li>热搜</li>
                    <li>巴拉巴拉</li>
                    <li>热搜</li>
                    <li>热搜</li>
                    <li>热搜</li>
                    <li>热搜</li>
                    <li>热搜</li>
                    <li>巴拉巴拉</li>
                    <li>热搜</li>
                    <li>热搜</li>
                    <li>热搜</li>
                </ul>
            </div>
        </div>
        <div class="shop">
            <div class="mycart" @click="toCart">
                <i class="el-icon-shopping-cart-2" style="font-size:30px;"></i>
                购物车{{0}}
            </div>
            <div class="myorder" @click="toMyOrder">我的订单</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'TopBanner',
    data() {
        return {
            keyword:''
        }
    },
    methods:{
        toHome(){
            this.$router.push({
                name:'home'
            })
        },
        toSearch(){
            this.$router.push({
                name:'search',
                query:{keyword:this.keyword || undefined}
            })
        },
        toCart(){
            this.$router.push({
                name:'cart'
            })
        },
        toMyOrder(){
            this.$router.push({
                name:'myorder'
            })
        }
    }
}
</script>

<style lang='less' scoped>
.el-dropdown-menu {
    max-height: 200px;
    overflow-y: scroll;
}
.topbanner-outer{
    width: 100%;
    height: 100px;
    padding: 0px 75px;
    box-sizing: border-box;
    display: flex;
    background-color: #fff;
    .logo{
        width: 366px;
        height: 90px;
    }
    .search-input{
        width: 610px;
        position: relative;
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        .search-box{
            display: flex;
            input{
                width: 520px;
                border: 2px solid red;
                outline: none;
                padding-left: 10px;
            }
            .allitems{
                text-align: center;
                width: 100px;
                line-height: 36px;
                color: rgba(70, 68, 68, 0.829);
                position: absolute;
                background-color: rgb(246,246,246);
                left: 430px;
                top: 23px;
            }  
            .btn{
                width: 50px;
                line-height: 40px;
                background-color: red;
                border: none;
                outline: none;
                position: relative;
                i{
                    position: relative;
                    top: 5px;
                    color:white
                }
            }
        }
        
        ul{
            display: flex;
            li{
                list-style: none;
                margin-left: 10px;
                color: rgba(70, 68, 68, 0.829);
            }    
        }
    }
    .details{
        display: flex;
        justify-content: space-between;
        height: 100%;
        ul{
            li{
                &:hover{
                    color:red;
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }
    }
    .shop{
        display: flex;
        height: 40px;
        margin-top: 21px;
        border: 1px solid rgb(134, 134, 134);
        font-size: 14px;
        .mycart{
            background-color: red;
            text-align: center;
            line-height: 40px;
            color: white;
            width: 100px;
            position: relative;
            i{
                position: relative;
                top: 5px;
                color:white
            }
            &:hover{
                color: red;
                background-color: white;
                i{
                    color: red;
                }
            }
        }
        .myorder{
            line-height: 40px;
            width: 100px;
            background-color: rgb(205, 211, 202);
            text-align: center;
            &:hover{
                color: red;
            }
        }
    }
}
</style>