<template>
    <div class="generalList">
        <div class="title">
            <div>日用百货</div>
            <div>滴露<span>旗舰店</span></div>
            <div>水星家纺<span>旗舰店</span></div>
            <div>戴森<span>旗舰店</span></div>
            <div>碧然德<span>旗舰店</span></div>
            <div>焦下<span>旗舰店</span></div>
        </div>
        <div class="imgbig">
            <img src="../../../static/others/generalBig.png" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.generalList{
    width: 100%;
    background-color: white;
    height: 500px;
    margin-top: 20px;
    padding: 0px 87px;
    box-sizing: border-box;
    list-style: none;
    .title{
        width: 100%;
        display: flex;
        line-height: 40px;
        
        div{
            padding-left: 20px;
            padding-right: 30px;
            font-size: 16px;
            font-weight: 555;
            cursor: pointer;
            &:hover{
                color: red;
            }
            span{
                font-weight: 100;
                padding-left: 5px;
                font-size: 14px;
            }
        }
        div:nth-child(1){
            font-size: 20px;
            font-weight: 777;
            padding-left: 0px;

        }
    }
    .imgbig{
        border: 1px solid rgb(226, 221, 221);
        img{
            width: 100%;
        }
    }
}
</style>