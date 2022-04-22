<template>
    <div class="recommandList">
        <div class="title">为您推荐</div>
        <div class="imglist">
            <div class="row">
                <div class="item">
                    <div class="imgdiv">
                        <img src="../../../static/others/threebody.jpg"> 
                    </div>
                    <div class="price">价格</div>
                </div>
                <div class="item">
                    <div class="imgdiv">
                        <img src="../../../static/others/threebody.jpg"> 
                    </div>
                    <div class="price">价格</div>
                </div>
                <div class="item">
                    <div class="imgdiv">
                       <img src="../../../static/others/threebody.jpg"> 
                    </div>
                    <div class="price">价格</div>
                </div>
                <div class="item">
                    <div class="imgdiv">
                        <img src="../../../static/others/threebody.jpg"> 
                    </div>
                    <div class="price">价格</div>
                </div>
                <div class="item">
                    <div class="imgdiv">
                        <img src="../../../static/others/threebody.jpg"> 
                    </div>
                    <div class="price">价格</div>
                </div>
                <div class="item">
                    <div class="imgdiv">
                        <img src="../../../static/others/threebody.jpg"> 
                    </div>
                    <div class="price"></div>
                </div>
            </div>
            <div class="row">
                <div class="item">
                    <div class="imgdiv">
                        <img src="../../../static/others/threebody.jpg"> 
                    </div>
                    <div class="price">价格</div>
                </div>
                <div class="item">
                    <div class="imgdiv">
                        <img src="../../../static/others/threebody.jpg"> 
                    </div>
                    <div class="price">价格</div>
                </div>
                <div class="item">
                    <div class="imgdiv">
                       <img src="../../../static/others/threebody.jpg"> 
                    </div>
                    <div class="price">价格</div>
                </div>
                <div class="item">
                    <div class="imgdiv">
                        <img src="../../../static/others/threebody.jpg"> 
                    </div>
                    <div class="price">价格</div>
                </div>
                <div class="item">
                    <div class="imgdiv">
                        <img src="../../../static/others/threebody.jpg"> 
                    </div>
                    <div class="price">价格</div>
                </div>
                <div class="item">
                    <div class="imgdiv">
                        <img src="../../../static/others/threebody.jpg"> 
                    </div>
                    <div class="price"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.recommandList{
    width: 100%;
    background-color: white;
    // height: 500px;
    margin-top: 20px;
    padding: 0px 87px;
    box-sizing: border-box;
    list-style: none;

    .title{
        width:100%;
        line-height: 50px;
        font-size: 22px;
        color: rgb(240, 26, 26);
        // background-color: #bfa;
        border-bottom: 2px solid red;
        text-align: start;
    }
    .imglist{
       margin-top: 20px;
       padding-top: 20px;
        border: 1px solid rgb(226, 224, 224);
        width: 100%;
            .row{
                display: flex;
                justify-content: space-around;
                .item{
                    border: 1px solid transparent;
                    padding-top: 10px;
                    transition: all 0.2s;
                    &:hover{
                        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
                        border: 1px solid rgb(226, 224, 224);
                        transform: scale(1.01);
                    }
                    img{
                        width: 175px;
                    }
                    .price{
                        line-height: 50px;
                    }
                }
            }
        }
}
</style>