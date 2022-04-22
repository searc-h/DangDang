<template>
    <div class="clockList">
        <div class="left">
            <div class="title">
                <img src="../../../static/others/qianggou.png" width="75px">
                <span class="clocktime">
                    <span>11</span>: 
                    <span>12</span>:
                    <span>13</span>
                </span>
                <div class="time">
                    <li>00:00场</li>
                    <li>08:00场</li>
                    <li>12:00场</li>
                    <li>16:00场</li>
                    <li>20:00场</li>
                </div>
            </div>
            <div class="imglists">
                <li>
                    <img src="../../../static/others/timebrief.jpg" width="170px">
                    <span class="price">价格</span>//
                    <span class="normalprice">原价</span>
                </li>
                <li>
                    <img src="../../../static/others/timebrief.jpg" width="170px">
                </li>
                <li>
                    <img src="../../../static/others/timebrief.jpg" width="170px">
                </li>
                <li>
                    <img src="../../../static/others/timebrief.jpg" width="170px">
                </li>
                <li>
                    <img src="../../../static/others/timebrief.jpg" width="170px">
                </li>
                <li>
                    <img src="../../../static/others/timebrief.jpg" width="170px">
                </li>
                <li>
                    <img src="../../../static/others/timebrief.jpg" width="170px">
                </li>
                <li>
                    <img src="../../../static/others/timebrief.jpg" width="170px">
                </li>
                <li>
                    <img src="../../../static/others/timebrief.jpg" width="170px">
                </li>
                <li>
                    <img src="../../../static/others/timebrief.jpg" width="170px">
                </li>


            </div>
        </div>
        <div class="right">
            <div class="title">
                厂商周
                <div class="select">
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
            
            <div class="imglists">
                <li><img src="../../../static/others/changshang.jpg" height="107px"></li>
                <li><img src="../../../static/others/changshang.jpg" height="107px"></li>
                <li><img src="../../../static/others/changshang.jpg" height="107px"></li>
                <li><img src="../../../static/others/changshang.jpg" height="107px"></li>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.clockList{
    width: 100%;
    background-color: white;
    height: 500px;
    margin-top: 20px;
    padding: 0px 87px;
    box-sizing: border-box;
    list-style: none;
    display: flex;
    .left{
        width: 84%;
        height: 500px;
        .title{
            display: flex;
            line-height: 30px;
            border-bottom: 2px solid black;
            z-index: 9;
            .clocktime{
                padding-top: 10px;
                margin-left: 30px;
                span{
                    width: 30px;
                    line-height: 30px;
                    border: 1px solid rgb(190, 186, 186);
                    border-radius: 2px;
                    
                }
            }
            .time{
                padding-top: 11px;
                display: flex;
                font-size: 20px;
                font-weight: 888;
                margin-left: 100px;
                li{
                    margin-left: 50px;
                    z-index: 99;
                    &:hover{
                        border-bottom: 3px solid red;
                    }
                }
            }
        }
        .imglists{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            li{
                width: 20%;
                height: 225px;
                padding: 2px 9px;
                box-sizing: border-box;
                // margin-top: 10px;
                text-align: center;
                border: 1px solid rgb(223, 217, 217);
            }
        }
    }
    .right{
        width: 17%;
        height: 500px;
        .title{
            font-size: 20px;
            font-weight: 443;
            padding-top: 6px;
            display: flex;
            line-height: 40px;
            border-bottom: 2px solid red;
            z-index: 9;
            .select{
                display: flex;
                margin-left: 80px;
                .dot{
                    background-color: rgb(138, 134, 134);
                    width: 10px;
                    height: 10px;
                    border-radius: 25px;
                    margin-left: 10px;
                    margin-top: 19px;
                    box-sizing: border-box;
                    &:hover{
                        background-color: red;
                        cursor: pointer;
                    }
                }
            }
        }
        .imglists{
            li{
                border: 1px solid rgb(216, 209, 209);
                img{
                    transition: all 0.3s;
                    &:hover{
                        transform: translateX(-3px);
                    }
                }
            }
        }
    }
}
</style>