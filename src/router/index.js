import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

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
const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/login',
            name:'login',
            component:()=>import('../views/Login'),
        },
        {
            path:'/home',
            name:'home',
            component:()=>import('../views/Home'),
            
        },
        {
            path:'/mycart',
            name:'cart',
            component:()=>import('../views/MyCart'),
            
        },
        {
            path:'/search',
            name:'search',
            component:()=>import('../views/Search'),
            
        },
        {
            path:'/successadd',
            name:'successadd',
            component:()=>import('../views/SuccessAdd'),
            
            // 独享路由组件
            beforeEnter(to,from ,next){
                if(from.path=='/search'){
                    next()
                }
                else next(false)
            }
        },
        {
            path:'/myorder',
            name:'myorder',
            component:()=>import('../views/MyOrder'),
        }
    ]
})

// 全局路由守卫
router.beforeEach( (to,from ,next)=>{
    let userid = sessionStorage.getItem('userId')
    // 已经有userid ,说明已经登录
    if(to.path=='/login'&&userid) {next(false)}
    else next()
})



export default router