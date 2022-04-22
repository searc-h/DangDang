<template>
    <div class="cartbox">
        <MyHeader :newCartNum='newCartNum'/>
        <div >

            <img src="./../../static/others/waterhome.png" >
        </div>
        <div class="cart_bgimg">
            <img src="./../../static/others/ddcart.png" class="ddcart" @click="toHome">
            <img src="./../../static/others/cartthree.png">
        </div>

        <div @click="toLogin" v-if="userid==null">
            <img src="./../../static/others/nologin.png" alt="">
        </div>
        <div v-else>
            <div class="title">你的购物车数据：</div>
            <div class="mycart">
                <div class="oneitem" v-for="one in cartItems" :key="one.data._id">
                    <div class="selectbox">
                        <input type="checkbox" :checked='one.isChecked' @change="changeChecked(one.data,$event.target.checked)">
                    </div>
                    <div class="leftimg">
                        <img v-lazy="one.data.imgurl">
                    </div>
                    <div class="rightdetail">
                        <div class="itemtitle">{{one.data.title}}</div>
                        <div class="iteminfo">描述：很好</div>
                        <div class="itemprice">价格：{{one.data.price}}￥</div>
                        <div class="count">
                            <div class="number">数量:{{one.count}}</div>
                            <button class="add" @click="addCount(one.data)">+1</button>
                            <button class="des" @click="desCount(one.count,one.data)">-1</button>
                        </div>
                    </div>

                    <div class="rightbox">
                        <div class="totalprice">
                            总价：{{one.count*one.data.price}}
                        </div>
                        <div class="delete">
                            <button @click="removeItem(one.data)">移除</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottombar">
                <div class="funtions">
                    <div class="check">
                        全选<input type="checkbox" @change="changeAllChecked($event.target.checked)" :checked='isAllChecked'>
                    </div>
                    <div class="delet" @click="deleteAllChecked">
                        <p>批量删除 </p>
                    </div>
                </div>
               
                <div class="totalprice">
                    <div>
                        总价{{alltotalprice}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var _ = require('lodash')
export default {
    name:'Cart',
    data() {
        return {
            cartItems:[],
            userid:'',
        }
    },
    methods:{
        toHome(){
            this.$router.push({
                name:'home'
            })
        },
        toLogin(){
            this.$router.push({
                name:'login',
                query:{fromName:'cart'}
            })
        },
        // 节流
        addCount: _.throttle(function({itemid}){
            let result = this.$store.dispatch('changCount',{userid:sessionStorage.getItem('userId'),itemid,count:1})
            result.then(res=>{
                if(res.message){
                    alert(res.message)
                    return
                }

                this.getMyCart()

            })
            
        },1000),
        desCount:_.throttle(function(count,{itemid}){
            if(count-1<=0){
                return
            }
            let result = this.$store.dispatch('changCount',{userid:sessionStorage.getItem('userId'),itemid,count:-1})
            result.then(res=>{
                if(res.message){
                    alert(res.message)
                    return
                }

                this.getMyCart()

            })
        },1000),
        getMyCart(){
            let result = this.$store.dispatch('getMycart',sessionStorage.getItem('userId'))
            result.then(res=>{
                if(res.message){
                    console.log(res.message)
                    this.cartItems = []
                    sessionStorage.setItem('cartNum',0)
                    return
                }
                sessionStorage.setItem('cartNum',res.length)
                this.cartItems = res
            })
        },
        removeItem({itemid}){
            let result = this.$store.dispatch('removeToCart',{itemid,userid:sessionStorage.getItem('userId')})
            result.then(res=>{
                if(res.message){
                    console.log(res.message)
                    sessionStorage.setItem('cartNum',0)
                }
                setTimeout(() => {
                    this.getMyCart()
                    sessionStorage.setItem('cartNum',res.length)
                }, 100);
            })
        },
        // 一个item的勾选框变化
        changeChecked({itemid},ischecked){
            let userid = sessionStorage.getItem('userId')
            let result = this.$store.dispatch('changeChecked',{userid,itemid,ischecked})
            result.then(res=>{
                if(res.message){
                    alert(res.message)
                    return
                }
                this.getMyCart()
            })
        },
        // 全选框逻辑
        changeAllChecked(ischecked){
            let userid = sessionStorage.getItem('userId')
            let result = this.$store.dispatch('changeAllChcked',{userid,ischecked})
            result.then(res=>{
                if(res.message){
                    alert(res.message)
                    return
                }
                this.getMyCart()
            })
        },
        // 删除勾选逻辑
        deleteAllChecked(){
            let result = this.$store.dispatch('deleteAllChecked',this.cartItems)
            console.log(result)

            result.then(res=>{
                if(res.message){
                    alert(res.message)
                    return
                }
                this.getMyCart()
            })

        }
        
    },
    computed:{
        newCartNum(){
            return sessionStorage.getItem('cartNum')
        },
        // 全选 受到 其他影响，有一个false就是false，否则就是true
        isAllChecked(){
            let isall = true
            if(this.cartItems.length==0){
                return false
            }
            this.cartItems.forEach(item=>{
                if(item.isChecked==false)
                    isall = false
            })
            return isall
        },
        alltotalprice(){
            let totalprice = 0
            this.cartItems.forEach(item=>{
                if(item.isChecked==true)
                    totalprice += parseInt( item.data.price) * item.count
            })
            return totalprice
        }
    },
    mounted(){
        this.getMyCart(),
        this.userid = sessionStorage.getItem('userId')
    }
}
</script>

<style lang='less' scoped>
.cartbox{
    text-align: center;
    position: relative;
    .cart_bgimg{
        text-align: center;
        border-bottom: 4px solid red;
        position: relative;
        margin-top: 10px;
    }
    img{
        cursor: pointer;
    }
    .title{
        font-size: 20px;
        border-bottom: 1px solid rgb(219, 58, 58);
    }
    
    .bottombar{
        position: fixed;
        left: 14.8%;
        bottom: 0px;
        width: 69%;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        background-color: rgb(177, 177, 177);
        .funtions{
            width: 200px;
            display: flex;
            justify-content: space-around;
            font-size: 14px;
            .delet{
                text-decoration: underline;
                cursor: pointer;
                &:hover{
                    color: red;
                }
            }
        }
        .totalprice{
            width: 200px;
            background-color: rgb(231, 130, 130);
            color: white;
            font-size: 20px;
        }
    }
}
.mycart{
    width: 100%;
    height: 320px;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .oneitem{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        background-color: rgb(240, 227, 227);
        .selectbox{
            padding-right: 70px;
        }
        img{
            width: 80px;
        }
        .leftimg{
            border: 1px solid rgb(175, 172, 172);
            width: 90px;
            height: 90px;
            padding-top: 5px;
        }
        .rightdetail{
            position: relative;
            padding-left: 10px;

            .itemtitle{
                line-height: 20px;
                font-size: 14px;
                color: rgb(185, 34, 34);
                background-color: rgb(231, 220, 220);
            }
            .iteminfo{
                line-height: 20px;
            }
            .itemprice{
                line-height: 20px;
            }
            .count{
                .number{
                    line-height: 20px;
                    text-decoration: underline;
                }
                .add,.des{
                        width: 50px;
                        line-height: 20px;
                        background-color: rgb(161, 159, 159);
                        margin-right: 10px;
                        outline: none;
                        border: 1px solid rgb(104, 99, 99);
                        border-radius: 5px;
                        &:hover{
                            background-color: rgb(104, 99, 99);
                        }
                }
            }
            
        }

        .rightbox{
            width: 200px;
            // background-color: red;
            .totalprice{
                font-size: 16px;
                margin-bottom: 50px;
            }
            .delete{
                button{
                    width: 100px;
                    line-height: 30px;
                    font-size: 16px;
                    background-color:rgb(219, 58, 58);
                    color:white;
                    outline: none;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    &:hover{
                        background-color: red;
                    }
                }
            }
        }
    }
}


</style>