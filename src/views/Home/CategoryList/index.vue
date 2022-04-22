<template>
    <div class="categoryList">
        <div class="left">
            <div class="title">
                <div class="left-title">
                    <div>图书•电子书</div>
                </div>
                <div class="right-title">
                    <div>最新上架</div>
                    <div>独家畅品</div>
                    <div>重点推荐</div>
                    <div>电子书</div>
                </div>
            </div>
            <div class="imglists">
                <div class="leftlists">
                    <img src="../../../static/others/categoryleft.jpg">
                </div>
                <div class="rightlists">
                    <div class="toplists">
                        <div class="leftswiper">
                            <img src="../../../static/others/3swiper.jpg">
                        </div>
                        <div class="rightimgs">
                            
                            <div class="item">
                                <img src="../../../static/others/areyouhere.jpg" >
                                <div>价格</div>
                            </div>
                            <div class="item">
                                <img src="../../../static/others/areyouhere.jpg" >
                                <div>价格 </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottomlists">
                        <div class="fourimgs">
                           
                            <div class="item">
                                 <img src="../../../static/others/areyouhere.jpg">
                                 <div>价格</div>
                            </div>
                            <div class="item">
                                 <img src="../../../static/others/areyouhere.jpg">
                                 <div>价格</div>
                            </div>
                            <div class="item">
                                 <img src="../../../static/others/areyouhere.jpg">
                                 <div>价格</div>
                            </div>
                            <div class="item">
                                 <img src="../../../static/others/areyouhere.jpg">
                                 <div>价格</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="title">
                <div class="left-title">图书畅销榜</div>
                <div class="right-title">童书新书榜</div>
            </div>
            <div class="content">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CategoryList'
}
</script>

<style lang='less' scoped>
.categoryList{
    width: 100%;
    background-color: white;
    height: 500px;
    margin-top: 20px;
    padding: 0px 87px;
    box-sizing: border-box;
    list-style: none;
    display: flex;

    .left{
        width: 74%;
        height: 100%;
        margin-right: 15px;

        .title{
            width: 100%;
            line-height: 40px;
            // background-color: red;
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid black;
            .left-title{
                font-size: 20px;
                font-weight: 555;
            }
            .right-title{
                width: 50%;
                font-size: 14px;
                font-weight: 222;
                display: flex;
                div{
                    width: 25%;
                    
                    border: 1px solid rgb(182, 172, 172);

                    background-color: white;
                    z-index: 99;
                    &:hover{
                        height: 101%;
                        font-weight: 777;
                        border: 2px solid black;
                        border-bottom: none;
                    }
                }
            
            }
        }

        .imglists{
            margin-top: 12px;
            display: flex;
            .rightlists{
                width: 73%;
                .toplists,.bottomlists{
                    height: 50%;
                }
                .toplists{
                    display: flex;

                    .leftswiper{
                        width: 53%;
                        border: 1px solid rgb(180, 171, 171);
                    }
                    .rightimgs{
                        display: flex;
                        .item{
                            padding-top: 10px;
                            box-sizing: border-box;
                            border: 1px solid rgb(180, 171, 171);
                        }
                    }
                }

                .bottomlists{
                    height: 50%;
                    padding-top: 15px;
                    box-sizing: border-box;
                    .fourimgs{
                        height: 100%;
                        display: flex;
                        justify-content: space-around;
                        .item{
                            height: 95%;
                            border: 1px solid rgb(180, 171, 171);
                        }
                    }
                }
            }
        }
    }

    .right{
        width: 25%;
        height: 100%;
        border: 1px solid rgb(180, 171, 171);
        
        .title{
            display: flex;
            justify-content: space-around;
            .left-title,.right-title{
                width: 50%;
                font-size: 18px;
                color: rgb(78, 75, 75);
                line-height: 40px;
            }
        }
        .content{
            li{
                list-style: none;
            }
        }
    }
   
}
</style>