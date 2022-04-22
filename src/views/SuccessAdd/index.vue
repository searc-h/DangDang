<template>
  <div class="addsuccess">
    <MyHeader :newCartNum='newCartNum'/>

    <div class="alert">
      <div class="text">商品已经添加到购物车</div>
      <div class="oneitem">
        <div class="leftimg">
          <img :src="one.imgurl" />
        </div>
        <div class="rightdetail">
          <div class="itemtitle">{{ one.title }}</div>
          <div class="iteminfo">很好</div>
          <div class="itemprice">价格：{{ one.price }}￥</div>

        </div>
      </div>
      <div class="btnbox">
          <button class="continue" @click="toSearch">继续购物</button>
          <button class="gocart" @click="toCart">去购物车结算</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessAdd",
  data() {
      return {
          one:{}
      }
  },
  methods:{
      toCart(){
          this.$router.push('/mycart')
      },
      toSearch(){
          this.$router.push('/search')
      }
  },
  computed:{
    newCartNum(){
      return sessionStorage.getItem('cartNum')
    }
  },
  mounted(){
      this.one = JSON.parse(localStorage.getItem('additem')) 
  }
};
</script>

<style lang='less' scoped>

.alert{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(238, 243, 245);
    .text{
        font-size: 20px;
    }
    .btnbox{

        width: 250px;
        line-height: 50px;
        text-align: center;
        .continue ,.gocart{
            width: 40%;
            line-height: 40px;
            font-size: 15px;
            background-color: rgb(240, 51, 51);
            color: white;
            border: 1px solid red;
            outline: none;
            margin: 0px 10px;
            transition: all 0.2s;
            cursor: pointer;
            &:hover{
                transform: scale(1.05);
                background-color: rgb(146, 2, 2);
            }
        }
    }
    .oneitem {
        background-color: rgb(243, 233, 233);
        display: flex;
        margin: 0px 20px;
        .rightdetail {
            position: relative;
            padding-left: 10px;

            .itemtitle {
            line-height: 40px;
            font-size: 16px;
            color: red;
            }
            .addtocart {
            position: absolute;
            bottom: 10px;
            left: 10px;
            }
        }
    }
}
</style>