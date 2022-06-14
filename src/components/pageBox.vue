<template>
  <div class="login">
    <div class="loginPart">
      <!--  左侧图片      -->
      <div class="right-image-box" style="z-index: 7">
      </div>
      <div class="left-box">
        <p class="left-box-text">
          用户登陆
        </p>
        <div class="from-group">
          <input class="from-group-username from-public" v-model="userName" placeholder="用户名" type="text"/>
        </div>
        <div class="from-group">
          <input class="from-group-username from-public" v-model="password" placeholder="密码" type="password"/>
        </div>
        <button type="button"
                class="submit login-btn"
                style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1);
                --n-bezier-ease-out:cubic-bezier(0, 0, 0.2, 1);
                --n-ripple-duration:0.6s; --n-opacity-disabled:0.5;
                --n-wave-opacity:0.6; font-weight: 400;
                --n-color:#161A21;
                --n-color-hover:rgba(59, 63, 69, 1);
                --n-color-pressed:rgba(19, 23, 29, 1);
                --n-color-focus:rgba(59, 63, 69, 1);
                --n-color-disabled:#161A21;
                --n-ripple-color:#161A21;
                --n-text-color:#FFF;
                --n-text-color-hover:#FFF;
                --n-text-color-pressed:#FFF;
                --n-text-color-focus:#FFF;
                --n-text-color-disabled:#FFF;
                --n-border:1px solid rgb(224, 224, 230);
                --n-border-hover:1px solid #36ad6a;
                --n-border-pressed:1px solid #0c7a43;
                --n-border-focus:1px solid #36ad6a;
                --n-border-disabled:1px solid rgb(224, 224, 230);
                --n-width: initial; --n-height:34px;
                --n-font-size:14px; --n-padding:0 14px;
                --n-icon-size:18px;
                --n-icon-margin:6px;
                --n-border-radius:3px;" @click="submitForm">
          <span class="btn-text">
            登陆
          </span>
        </button>
        <p style="font-size: 18px;color:#FFFFFF;margin-top: 25px" @click="dialogVisible = true">
          立即注册
        </p>
      </div>
    </div>
    <el-dialog
        title="用户注册"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="register">
      <input class="from-group-username from-register" v-model="registerUserName" placeholder="用户名" type="text"/>
      <input class="from-group-username from-register" v-model="registerPassword" placeholder="密码" type="text"/>
      <span slot="footer" class="dialog-footer">
          <el-button @click="registerClose">取 消</el-button>
          <el-button type="primary" @click="registerClose">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
import {loginUserInfo,addUserInfo} from "../api/sysUser/sysUser";
// import axios from "axios";
export default {
  name: "pageBox",

  data() {
    return {
      userName: "",
      password: "",
      registerUserName:"",
      registerPassword:"",
      //控制弹出框
      dialogVisible: false,
      loading:false
    }
  },
  mounted() {

  },
  methods: {
    //用户登陆
    submitForm() {
      if (this.userName == "") {
        this.$message.warning("请输入用户名!")
      }
      if (this.password == "") {
        this.$message.warning("请输入密码!")
      }
      loginUserInfo(this.userName, this.password).then(res => {
        this.loading = true
        if (res.data.status == 200) {
          this.$message.success("登陆成功!")
          //token存入缓存
          window.localStorage.setItem("Authorization", res.data.data.token)
          window.localStorage.setItem("UserIdentification",res.data.data.id)
          this.$store.commit("changeLogin", res.headers['x-auth-token'])
          this.$router.push({path: '/home'})
        } else {
          this.$message.error("登陆失败,请检查账号密码")
        }
      })


      //后端发送验证请求
      // axios({
      //   method: "GET",
      //   url: "http://localhost:8081/sysUser/login",
      //   header:{
      //     'Access-Control-Allow-Origin':'*'
      //   },
      //   params: {
      //     userName: this.userName,
      //     password: this.password,
      //   },
      // }).then((res) => {
      //   if (res.data.status == 200) {
      //     this.$message.success("登陆成功!")
      //     //token存入缓存
      //     window.localStorage.setItem("Authorization", res.data.data.token)
      //     this.$store.commit("changeLogin",res.headers['x-auth-token'])
      //
      //     this.$router.push({path: '/home'})
      //   } else {
      //     this.$message.error("登陆失败,请检查账号密码")
      //   }
      // });
    }
    ,
    //用户注册
    register() {
      this.dialogVisible = false
    },
    registerClose(){
      this.dialogVisible = false;
      if (this.registerUserName == "" || this.registerPassword == ""){
        this.$message.warning("用户名或密码输入错误")
      }else {
        addUserInfo(this.registerUserName,this.registerPassword).then( res =>{
          if (res.data == 1){
            this.$message.success("注册成功，请去登陆")
          }else {
            this.$message.error("注册失败")
          }
        })
      }
    }
  }
}
</script>


<!--样式-->
<style>

.loginPart {
  position: absolute;
  /*定位方式绝对定位absolute*/
  top: 45%;
  left: 50%;
  /*顶和高同时设置50%实现的是同时水平垂直居中效果*/
  transform: translate(-50%, -50%);
  /*实现块元素百分比下居中*/
  width: 990px;
  height: 500px;
  padding: 50px;
  background: rgb(30, 33, 39);
  /*背景颜色为黑色，透明度为0.8*/
  box-sizing: border-box;
  /*box-sizing设置盒子模型的解析模式为怪异盒模型，
  将border和padding划归到width范围内*/
  box-shadow: 0px 15px 25px rgb(12 8 8 / 50%);
  /*边框阴影  水平阴影0 垂直阴影15px 模糊25px 颜色黑色透明度0.5*/
  border-radius: 15px;
  /*边框圆角，四个角均为15px*/
  padding: 10px;
  display: flex;
}

.login {
  width: 100%;
  height: 100%;
}

.loginPart .right-image-box {
  width: 50%;
  height: 100%;
  background-image: url('~@/assets/login/funny.99ca52c6.jpg');
  /*border: 1px solid red;*/
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
}

.loginPart .left-box {
  width: 50%;
  height: 94%;
  /*padding: 14px;*/
  /*border: 1px solid red;*/
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
}

.left-box .left-box-text {
  text-align: center;
  font-weight: 900;
  font-size: 28px;
  margin-right: 20px;
  margin-bottom: 40px;
  color: white;
}

.from-group {
  margin-bottom: 40px;
}

.from-group .from-group-username {
  font-size: 18px;
  line-height: 1.5;
  padding: 5px 8px;
  height: 45px;
}

.from-public {
  border: 1px solid #363a43;
  background-color: #363a43;
  color: #6f6f70;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 5px;
  font-weight: 400;
  display: block;
  width: 80%;
  outline: none;
  margin: 0 auto;
}

.from-register{
  border: 1px solid #363a43;
  background-color: #363a43;
  color: #6f6f70;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 5px;
  font-weight: 400;
  display: block;
  width: 80%;
  height: 20px;
  outline: none;
  margin: 10px auto;
  padding: 10px;
}

.submit {
  font-weight: 400;
  line-height: 1;
  font-family: inherit;
  padding: var(--n-padding);
  height: var(--n-height);
  font-size: var(--n-font-size);
  border-radius: var(--n-border-radius);
  color: var(--n-text-color);
  background-color: #161a21;
  width: var(--n-width);
  white-space: nowrap;
  outline: none;
  position: relative;
  z-index: auto;
  border: none;
  display: inline-flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  user-select: none;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: color .3s var(--n-bezier), background-color .3s var(--n-bezier), opacity .3s var(--n-bezier), border-color .3s var(--n-bezier);
}

.login-btn {
  width: 85%;
  height: 50px;
}

.btn-text {
  font-size: 20px;
}

.el-dialog, .el-pager li {
  background: #161A21;
}
.el-dialog__title {
  color: #FFFFFF;
}
</style>