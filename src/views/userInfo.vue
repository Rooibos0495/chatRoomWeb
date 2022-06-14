<template>
  <div class="login">
    <div class="loginPart">
        <infoPage></infoPage>
      </div>
    </div>
</template>

<script>
import infoPage from "../components/infoPage";
export default {
  name: "userInfo",
  components:{
    infoPage
  }
}
</script>

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
</style>