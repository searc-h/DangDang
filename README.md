## 重写push,replace方法
```
// 重写push 与 replace方法
let originPush = VueRouter.prototype.push; // 备份原型上的push方法,但是此时的originPush的this 不再是指向VueRouter.prototype
let originReplace = VueRouter.prototype.replace;
// 重写push,replace方法
VueRouter.prototype.push = function(location , resolve , reject){
    if(resolve && reject){
        // call与apply都可以修改函数的上下文一次 ，注意区别
        // 这里的this是原型上的this ，我们需要把这个this传给originPush
        originPush.call(this,location) // 让这个oringinPush 的 上下文是 原型上的 上下文
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location , resolve , reject){
    if(resolve && reject){
        // call与apply都可以修改函数的上下文一次 ，注意区别
        // 这里的this是原型上的this ，我们需要把这个this传给originPush
        originReplace.call(this,location) // 让这个oringinPush 的 上下文是 原型上的 上下文
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
```


## store的模块化开发
```
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import item from './item/index'
import user from './user/index'

export default new Vuex.Store({
    modules:{
        user,
        item
    }
})
```

## 锚点跳转实现 以及 解决如何阻止url改变问题
```
    methods:{
        To(){
            // 阻止锚点跳转后，修改url的行为
            setTimeout(()=>{
                console.log('yes')
                this.$router.replace({
                    name:'home'
                })
            },0)
        },
        getScrollTop(){
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        },
    },
    mounted() {
        window.addEventListener('scroll',this.getScrollTop);
    },
    destroyed() {
        window.removeEventListener('scroll', this.getScrollTop);
    },
    computed:{
        <!-- 根据高度，添加不同类名，展示不同颜色 -->
        chooseToColor(){
            if(this.scrollTop > 3000) return 'fifth'
            else if(this.scrollTop > 2400) return 'forth'
            else if(this.scrollTop > 1900) return 'third'
            else if(this.scrollTop > 1329) return 'second'
            else if(this.scrollTop > 600) return 'first'
            
            else return ''
        },
```

## 图片懒加载
```
// 图片懒加载插件引入
import VueLazyload from 'vue-lazyload'
// 引入图片
import gif from './static/others/loading.gif'
Vue.use(VueLazyload,{
    loading: gif,
})

```

## 解决登陆、注册在同一个组件中的问题
```
v-if login
v-else regiser
```


## 解决input框获得焦点与失去焦点时，label标签的过渡效果
```
    
    <div @click="handleZoomT" >
        <label  :class="{'zoommin':lableZoomT==true}">输入昵称</label>
        <input type="text" ref="inputdiv" @blur="handleBlurT"  v-model="usernameL">
    </div>

    div的点击事件+ref  让input框获得焦点，同时，lable标签添加类名，获得过渡效果
    handleZoomT(){
        this.$refs.inputdiv.focus()
        this.lableZoomT = true
    },  

    input框blur事件，判断内容是否为空，
    是： 让lable标签失去类名 ，回到初始效果
    否： lable标签类名依然存在
    // 处理username框失去焦点事件
    handleBlurT(){
        // 判断是否来自login页面
        if(this.isLogin){
            // 判断usernameL是否为空
            if(!this.usernameL)
            // 为空就让他不具有缩放类名
            this.lableZoomT = false
        }
        // 来自Register页面
        else{
            if(!this.usernameR)
            this.lableZoomT = false
        } 
    },
    
    


```

## 购物车数量修改的节流操作
```
    let _ = require('lodash')   
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
    
```

## 购物车勾选逻辑实现
```
    <div class="funtions">
        <div class="check">
            全选<input type="checkbox" @change="changeAllChecked($event.target.checked)" :checked='isAllChecked'>
        </div>
        <div class="delet" @click="deleteAllChecked">
            <p>批量删除 </p>
        </div>
    </div>


    全选按钮受到 其他每个按钮的影响
    // 全选 受到 其他影响，有一个false就是false，否则就是true
        isAllChecked(){
            let isall = true
            <!-- 没用数据，不勾选 -->
            if(this.cartItems.length==0){
                return false
            }
            this.cartItems.forEach(item=>{
                if(item.isChecked==false)
                    isall = false
            })
            return isall
        },

    同时 它也可以控制其他每个勾选
        调用全选接口实现
```

## 批量删除逻辑(Promise.all)
```
    async deleteAllChecked(context,itemList){
        let promiseArr = []
        itemList.forEach(async item=>{
            if(item.isChecked){
                let result = await context.dispatch('removeToCart',
                {
                    itemid:item.data.itemid,
                    userid:sessionStorage.getItem('userId'),
                })
                promiseArr.push(result)
            }
        })
        return Promise.all(promiseArr)
    }
```

## 下载依赖
```
npm install
```


## 启动项目
```
npm run serve 
默认8080端口
```


## 配置代理

