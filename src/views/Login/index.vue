<template>
    <div>
        <div class="dangdang"><img src="./../../static/others/dangdang.png" @click="toHome"></div>
        <div class="mainbox">
            <div><img src="./../../static/others/loginbig.png" > </div>
            <div class="loginbox" v-if="isLogin">
                <div class="qrcode"><img src="./../../static/others/qrcode.png"></div>
                <div class="head">
                    <div class="password">密码登录</div>
                    <h3>|</h3>
                    <div class="codelogin">验证码登录</div>
                </div>
                <div class="main">
                    <div @click="handleZoomT" >
                        <label  :class="{'zoommin':lableZoomT==true}">输入昵称</label>
                        <input type="text" ref="inputdiv" @blur="handleBlurT"  v-model="usernameL">
                    </div>
                    <div class="passwordinput" @click="handleZoomP">
                        <label :class="{'zoommin':lableZoomP==true}">密码</label>
                        <input :type="isPassword" ref="passworddiv" @blur="handleBlurP"  v-model="passwordL">
                        <i class="el-icon-eyes" @click="passToText">闭眼</i>
                    </div>
                    
                </div>
                <div class="commit">
                    <span>登录即同意 </span>
                    <span class="strong"> 用户协议、隐私政策</span>
                </div>
                <div class="btn">
                    <button @click="loginAfter">登录</button>
                </div>
                <div class="register">
                    <span @click="toRegister">立即注册</span>
                    <span class="line">|</span>
                    <span>忘记密码</span>
                </div>
                <div class="others">
                    <div><img src="./../../static/others/wx.png"></div>
                    <div><img src="./../../static/others/qq.png"></div>
                    <div><img src="./../../static/others/alipay.png"></div>
                    <div><img src="./../../static/others/weibo.png"></div>
                    <div><img src="./../../static/others/baidu.png"></div>
                </div>
            </div>
            
            <div v-else class="loginbox">
                <div class="back" @click="toLogin">返回登录</div>
                <div class="head">
                    <div class="rightNow">立即注册</div>
                </div>
                <div class="main">
                    <div @click="handleZoomT" >
                        <label  :class="{'zoommin':lableZoomT==true}">昵称(20位字符以内)</label>
                        <input type="text" ref="inputdiv" @blur="handleBlurT"  v-model="usernameR">
                    </div>
                    <div class="passwordinput" @click="handleZoomP">
                        <label :class="{'zoommin':lableZoomP==true}">密码</label>
                        <input :type="isPassword" ref="passworddiv" @blur="handleBlurP"  v-model="passwordR">
                        <i class="el-icon-eyes" @click="passToText">闭眼</i>
                    </div>
                    
                </div>
                <div class="commit">
                    <span>登录即同意 </span>
                    <span class="strong"> 用户协议、隐私政策</span>
                </div>
                <div class="btn">
                    <button @click="registerAfter">同意并注册</button>
                </div>
                
                <div class="others" style="margin-top:50px">
                    <div><img src="./../../static/others/wx.png"></div>
                    <div><img src="./../../static/others/qq.png"></div>
                    <div><img src="./../../static/others/alipay.png"></div>
                    <div><img src="./../../static/others/weibo.png"></div>
                    <div><img src="./../../static/others/baidu.png"></div>
                </div>
            </div>
        </div>
    </div>
        
</template>

<script>
export default {
    name:'Login',
    
    data() {
        return {
            isLogin:true,
            lableZoomT:false,
            lableZoomP:false,
            usernameL:'',
            passwordL:'',
            usernameR:'',
            passwordR:'',
            isPassword:'password',
        }
    },
    methods:{
        toHome(){
            this.$router.push({
                name:'home'
            })
        },
        handleZoomT(){
            this.$refs.inputdiv.focus()
            this.lableZoomT = true
        },
        handleZoomP(){
            this.$refs.passworddiv.focus()
            this.lableZoomP = true
        },
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
        // 处理password框失去焦点事件
        handleBlurP(){
            if(this.isLogin){
                if(!this.passwordL)
                this.lableZoomP = false
            }
            else {
                if(!this.passwordR)
                this.lableZoomP = false
            }
        },
        passToText(){
            this.isPassword =  this.isPassword=='password'?'text':'password'
        },
        toRegister(){
            this.isLogin = false
            this.clearLoginData()
        },
        toLogin(){
            this.isLogin = true
            this.clearLoginData()
        },
        clearLoginData(){
            this.isPassword = 'password'
            this.lableZoomT = false
            this.lableZoomP = false
            this.passwordL =''
            this.usernameL = ''
            this.passwordR = ''
            this.usernameR = ''
        },
        // 点击登录后触发的事件
        loginAfter(){
            let result = this.$store.dispatch('Login',{username:this.usernameL,password:this.passwordL})
            result.then(res=>{
                if(res.code==200){
                    if(this.$route.query.fromName){
                        this.$router.push({
                            name:this.$route.query.fromName
                        })
                    }else{
                        this.toHome()
                    }
                }

                else alert(res.message)
            })
            
        },
        registerAfter(){

            let result = this.$store.dispatch('Register',{username:this.usernameR,password:this.passwordR})
            result.then(res=>{
                if(res.code==200){
                   this.$message({
                        message: '注册成功',
                        type: 'success'
                    });
                    setTimeout(() => {
                        this.toLogin()
                    }, 1000);
                }
                
                else alert(res.message)
            })
            
            
        }
    }
}
</script>

<style lang='less' scoped>
.dangdang{
    margin-top: 40px;
    margin-left: 70px;
}
.mainbox{
    display: flex;
    .loginbox{
        margin-top: 100px;
        width: 450px;
        height: 450px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        background-color: rgb(253, 253, 253);
        border-radius: 20px;
        box-sizing: border-box;
        padding: 10px 30px;
        position: relative;
        .back{
            position: absolute;
            top: 20px;
            left: 30px;
        }
        .qrcode{
            position: relative;
            img{
                width: 80px;
                position: absolute;
                right: -30px;
                top: -10px;
            }
        }
        .head{
            margin-top: 30px;
            padding: 0px 20px;
            box-sizing: border-box;
            width: 100%;
            line-height: 50px;
            // background-color: red;
            display: flex;
            justify-content: space-around;
            font-size: 18px;
            font-weight: 888;
            .password, .codelogin{
                cursor: pointer;
            }
        }

        .main{
            width: 380px;
            height: 150px;
            // background-color: #bfa;
            div{
                text-align: center;
                position: relative;
                label{
                    
                    position: absolute;
                    top: 50%;
                    left: 20px;
                    font-size: 15px;
                    color: rgba(121, 114, 114);
                    transition: all 0.3s;
                }
                .zoommin{
                    top: 25px;
                    font-size: 10px;
                }
            }
            .passwordinput{
                position: relative;
                i{
                    right: 20px;
                    top: 50%;
                    position: absolute;
                }
            }
            input{
                margin-top: 20px;
                width: 93%;
                line-height: 30px;
                font-size: 16px;
                padding-left: 20px;
                padding-top: 20px;
                background-color: rgb(218, 218, 218);
                border: none;
                outline: none;
                border-radius: 5px;
            }
        }
        .commit{
            font-size: 14px;
            color: rgb(147, 148, 148);
            text-align: center;
            margin-top: 5px;
            span{
                margin-left: 20px;
            }
            .strong{
                color: black;
                text-decoration: underline;
                cursor: pointer;
            }
        }
        .btn{
            width: 100%;
            height: 50px;
            text-align: center;
            margin-top: 15px;
            button{
                width: 95%;
                height: 100%;
                border: none;
                background-color: rgb(236, 70, 70);
                color: white;
                font-size: 20px;
                border-radius: 10px;
                transition: all 0.3s;
                &:hover{
                    background-color: rgb(202, 60, 60);
                }
            }
        }
        .register{
            width: 100%;
            line-height: 50px;
            margin-top: 15px;
            display: flex;
            justify-content: space-around;
            padding: 0px 100px;
            box-sizing: border-box;
            font-size: 15px;
            color: rgb(116, 119, 121);
            cursor: pointer;
            .line{
                width: 7px;
                font-size: 10px;
            }
        }
        .others{
            display: flex;
            justify-content: space-around;
            padding: 10px 50px;
            box-sizing: border-box;
            img{
                cursor: pointer;
                width: 30px;
            }
        }
    }

}

</style>