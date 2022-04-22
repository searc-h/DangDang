<template>
    <div class="childList">
        <div class="title">
            <li>孕婴童</li>
            <li>童书畅销榜</li>
            <li>童书3-6岁榜</li>
            <li>童书7-10岁榜</li>
        </div>
        <div class="imgbig">
            <img src="../../../static/others/childBig.png">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style  lang='less' scoped>
.childList{
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
        // background-color: #bfa;
        font-size: 16px;
        font-weight: 555;
        
        li{
            list-style: none;
            padding-left: 30px;
            padding-right: 20px;
            cursor: pointer;
            &:hover{
                color: red;
            
            }
        }
        :nth-child(1){
            font-size: 20px;
            font-weight: 777;
            padding-left: 0px;
        }
    }
    .imgbig{
        border: 1px solid rgb(211, 201, 201);
        padding-top: 4px;
        img{
            width: 100%;
        }
    }
}
</style>