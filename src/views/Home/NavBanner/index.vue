<template>
    <div class="navbanner">
        <div class="left">
            <div class="allitems">
                全部商品分类

                <i class="el-icon-arrow-down"></i>
            </div>
        </div>
        <div class="right">
            <ul>
                <li>图书</li>
                <li>服装</li>
                <li>日常百货</li>
                <li>孕婴童</li>
                <li>猜你喜欢</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'NavBanner'
}
</script>

<style lang='less' scoped>
.navbanner{
    width: 100%;
    box-sizing: border-box;
    padding: 0px 82px;
    background-color: #fff;
    line-height: 44px;
    display: flex;
    border-bottom: 3px solid red;
    .left{
        width: 15%;
        background-color: red;
        color: white;
        text-align: start;
        padding: 0px 20px ;
        box-sizing: border-box;
        position: relative;
        i{
            position: relative;
            right: -30px;
        }
    }
    .right{
        width: 30%;
        font-weight: 999;
        font-size: 15px;
        ul{
            width: 100%;
            display: flex;
            justify-content: space-around;
            li{
                list-style: none;
                cursor: pointer;
                &:hover{
                    color: red;
                }
            }
        }
    }
    
}
</style>