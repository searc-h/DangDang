# 开发过程中的难点：
## 登录框：lable的动画与input框的协调
```
    handleZoomT(){
        this.$refs.inputdiv.focus()
        this.lableZoomT = true
    },
    handleZoomP(){
        this.$refs.passworddiv.focus()
        this.lableZoomP = true
    },
    handleBlurT(){
        if(!this.username)
            this.lableZoomT = false
    },
    handleBlurP(){
        if(!this.password)
            this.lableZoomP = false
    },
    passToText(){
        this.isPassword =  this.isPassword=='password'?'text':'password'
    }
```

## 悬浮固定aside框实现页面内锚点导航
```
1.用a标签实现锚点跳转
2.用scrollTop的值实现判断类名是否添加
3.if-else语句实现唯一性
```