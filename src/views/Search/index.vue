<template>
    <div class="searchbox">
        <div class="imgtop">
            <img src="./../../static/others/searchtop.jpg">
        </div>
        <MyHeader :newCartNum="newCartNum"/>
        <TopBanner/>
        <NavBanner/>
        <div class="allitems">
            <div class="title">
                <div class="all">全部商品</div>
            </div>

            <div class="items" @click="handleClick($event)">
                <div class="baner" >
                    <div class="beforetitle">生活用品</div>
                    <div class="item" id="01">拖鞋</div>
                    <div class="item" id="02">风扇</div>
                </div>
                <div class="baner">
                    <div class="beforetitle">手机</div>
                    <div class="item" id="03">华为</div>
                    <div class="item" id="04">iphone</div>
                </div>
                <div class="baner">
                    <div class="beforetitle">智能</div>
                    <div class="item" id="05">ipad</div>
                    <div class="item" id="06">老年机</div>
                </div>
                <div class="baner">
                    <div class="beforetitle">书籍</div>
                    <div class="item" id="07">活着</div>
                    <div class="item" id="08">Javascript</div>
                </div>
                <div class="baner">
                    <div class="beforetitle">饮料</div>
                    <div class="item" id="09">可乐</div>
                    <div class="item" id="10">燃茶</div>
                </div>
            </div>
            
            <div class="keyworditem">
                <div class="info" v-if="keywordItem.length==0">暂无搜索结果，试试上面的关键词吧</div>
                <div class="keyitem" v-else>
                    <div class="result">查询结果：</div>
                    <div class="itemouter">
                        <div class="oneitem">
                            <div class="leftimg">
                                <img v-lazy="keywordItem[0].imgurl">
                            </div>
                            <div class="rightdetail">
                                <div class="itemtitle">{{keywordItem[0].title}}</div>
                                <div class="iteminfo">很好</div>
                                <div class="itemprice">价格：{{keywordItem[0].price}}￥</div>

                                <div class="addtocart">
                                   <button @click="addtoMycart(keywordItem[0])"> 加入到购物车</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="recommand">为你推荐:</div>
            <div class="searchall">
                <div class="oneitem" v-for="one in allItems" :key="one._id">
                    <div class="leftimg">
                        <img v-lazy="one.imgurl">
                    </div>
                    <div class="rightdetail">
                        <div class="itemtitle">{{one.title}}</div>
                        <div class="iteminfo">很好</div>
                        <div class="itemprice">价格：{{one.price}}￥</div>

                        <div class="addtocart">
                            <button @click="addtoMycart(one)"> 加入到购物车</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopBanner from '../Home/TopBanner'
import NavBanner from '../Home/NavBanner'
import {mapState} from 'vuex'
export default {
    name:'Search',
    components:{
        TopBanner,
        NavBanner
    },
    methods:{
        // 点击后改变url参数keyword
        handleClick(e){
            if(e.target.id){
                this.$router.replace(`/search?keyword=${e.target.innerHTML}`)
            }
        },
        
        // 获得关键词keyword的数据
        getBykeyword(){
            this.$store.dispatch('reqKeywordItem',this.$route.query.keyword)
        },
        // 添加到购物车
        addtoMycart(item){
            if(sessionStorage.getItem('userId')){
               
                let result = this.$store.dispatch('AddtoMycart',
                    {  
                        userid:sessionStorage.getItem('userId'),
                        itemid:item.itemid
                    }
                )
                result.then(async res=>{
                    if(res.message){
                        console.log(res.message)
                    }
                    localStorage.setItem('additem',JSON.stringify(item))
                    let result = await this.$store.dispatch('getMycart',sessionStorage.getItem('userId'))
                    sessionStorage.setItem('cartNum',result.length)
                    result.data
                    this.$router.push({
                        name:'successadd'
                    })
                })
            }else{
                this.$router.push({
                    name:'login',
                    query:{fromName:'search'}
                })
            }
        },


        
    },
    computed:{
        ...mapState({
            // 获得全部items []
            allItems(state){
                return state.item.allItems
            },
            // 获取keyword 数据 {}
            keywordItem(state){
                return state.item.keywordItem
            }
        }),
        newCartNum(){
            return sessionStorage.getItem('cartNum')
        }
    },
    watch:{
        // 对$route进行监听，这里不属于深度监听
        $route(){
            this.getBykeyword()
        }
    },
    mounted(){
        // 一上来就根据keyword派发请求
        this.getBykeyword()
    }
}
</script>

<style  lang='less' scoped>
.searchbox{
    .imgtop{
        width: 100%;
        text-align: center;
    }
    
    
    .info , .result ,.recommand{ 
        line-height: 50px;
        padding-left: 40px;
        background-color: rgb(236, 232, 232);
        margin-top: 10px;
    }

    .allitems{
        margin-top: 20px;
        box-sizing: border-box;
        padding: 0px 88px;
        .title{
            border-bottom: 2px solid red;
            .all{
                width: 100px;
                line-height: 40px;
                font-size: 16px;
                color: white;
                text-align: center;
                background-color: red;
            }
        }

        .items{
            .baner{
                display: flex;
                line-height: 30px;
                border-bottom: 1px solid rgb(236, 232, 232);
                font-size: 14px;
                .beforetitle{
                    width: 100px;
                    text-align: center;
                    background-color: rgb(224, 216, 216);
                } 
                .item{
                    text-align: center;
                    width: 100px;
                    margin-left: 50px;
                    &:hover{
                        color: red;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .keyworditem{
        width: 100%;
        font-size: 20px;
        color: rgb(77, 74, 74);
        margin-top: 20px;
       
        .keyitem{
            .itemouter{
                margin-top: 20px;
                background-color: rgb(236, 232, 232);
                width: 100%;
                .oneitem{
                    width: 100%;
                    display: flex;
                    .rightdetail{
                        position: relative;
                        padding-left: 10px;

                        .itemtitle{
                            line-height: 40px;
                            font-size: 16px;
                            color: red;
                        }
                        .addtocart{
                            position: absolute;   
                            bottom: 10px;
                            left: 10px;
                            button{
                                background-color: rgb(238, 54, 54);
                                line-height: 40px;
                                width: 100px;
                                text-align: center;
                                font-size: 15px;
                                border-radius: 5px;
                                outline: none;
                                border: none;
                                color: white;
                                cursor: pointer;
                                &:hover{
                                    background-color: red;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .searchall{
        width: 100%;
        background-color: rgb(253, 251, 251);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        img{
            width: 200px;
        }
        .oneitem{
            width: 30%;
            display: flex;
            background-color: rgb(243, 236, 236);
            .rightdetail{
                position: relative;
                padding-left: 10px;

                .itemtitle{
                    line-height: 40px;
                    font-size: 16px;
                    color: red;
                }
                .addtocart{
                    position: absolute;   
                    bottom: 10px;
                    left: 10px;
                    button{
                        background-color: rgb(238, 54, 54);
                        line-height: 40px;
                        width: 100px;
                        text-align: center;
                        font-size: 15px;
                        border-radius: 5px;
                        outline: none;
                        border: none;
                        color: white;
                        cursor: pointer;
                        &:hover{
                            background-color: red;
                        }
                    }
                }
            }
        }
    }
}
</style>