<template>
  <div class="login">
    <div class="loginPart">
        <div class="left-box">
          <!--      最左边-->
          <router-link to="/personal">
          <div :class="bgkType1 ? 'row-1' : 'bgkColor'" @click="switchImg1">
            <img src="../assets/table/personal.png" class="row-1-img">
          </div>
          </router-link>
          <router-link to="/news">
          <div :class="bgkType2 ? 'row-2' : 'bgkColor2'" @click="switchImg2">
            <img src="../assets/table/news.png" class="row-2-img">
          </div>
          </router-link>
          <router-link to="/mailList">
          <div :class="bgkType3 ? 'row-2' : 'bgkColor2'" @click="switchImg3">
            <img src="../assets/table/personal.png" class="row-2-img">
          </div>
          </router-link>
          <router-link to="/queryUser">
            <div :class="bgkType5 ? 'row-2' : 'bgkColor2'" @click="switchImg5">
              <img src="../assets/table/query.png" class="row-2-img">
            </div>
          </router-link>

            <div :class="bgkType4 ? 'row-2' : 'bgkColor2'" @click="switchImg4">
            <img src="../assets/table/signOut.png" class="row-2-img">
          </div>
        </div>
        <el-container>
          <el-main>
              <router-view>

              </router-view>
          </el-main>
        </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      userName: "",
      password: "",
      imgTitleSrc:"../src/assetc/table/personal.png",
      bgkType1:true,
      bgkType2:true,
      bgkType3:true,
      bgkType4:true,
      bgkType5:true
    }
  },
  mounted() {

  },
  methods: {
    switchImg1(){
      this.bgkType1 = false
      this.bgkType2 = true
      this.bgkType3 = true
      this.bgkType4 = true
    },
    switchImg2(){
      this.bgkType1 = true
      this.bgkType2 = false
      this.bgkType3 = true
      this.bgkType4 = true
      this.bgkType5 = true
    },
    switchImg3(){
      this.bgkType1 = true
      this.bgkType2 = true
      this.bgkType3 = false
      this.bgkType4 = true
      this.bgkType5 = true
    },
    switchImg4(){
      this.bgkType1 = true
      this.bgkType2 = true
      this.bgkType3 = true
      this.bgkType4 = false
      this.bgkType5 = true
    },
    switchImg5(){
      this.bgkType1 = true
      this.bgkType2 = true
      this.bgkType3 = true
      this.bgkType4 = true
      this.bgkType5 = false
    }

  }
}
</script>

<style scoped>
.loginPart {
  position: absolute;
  /*定位方式绝对定位absolute*/
  top: 45%;
  left: 50%;
  /*顶和高同时设置50%实现的是同时水平垂直居中效果*/
  transform: translate(-50%, -50%);
  /*实现块元素百分比下居中*/
  width: 990px;
  height: 520px;
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
  padding: 0px;
  display: flex;
}

.login {
  width: 100%;
  height: 100%;
}
.left-box{
  width: 75px;
  height: 100%;
  border-top-left-radius: 18px;
  border-bottom-left-radius : 18px;
  /*border: 1px solid red;*/
}
.left-box .row-1{
  width: 100%;
  height: 80px;
  /*border: 1px solid white;*/
  border-top-left-radius: 16px;
  padding-top: 40px;
  cursor:pointer;
}
.row-1-img{
  width: 50px;
  height: 50px;
  /*border: 1px solid yellow;*/
  margin: auto;
  border-radius: 100px;
  background-image: url("../assets/table/personal.png");
  background-size:100% 100%;
}
.left-box .row-2{
  width: 100%;
  height: 50px;
  /*border: 1px solid white;*/
  cursor:pointer;
  padding-top: 20px ;
}
.row-2-img{
  width: 35px;
  height: 35px;
  /*border: 1px solid yellow;*/
  margin: auto;
  border-radius: 100px;
  background-size:100% 100%;
  cursor:pointer;
}

.bgkColor{
  width: 100%;
  height: 80px;
  /*border: 1px solid white;*/
  border-top-left-radius: 16px;
  padding-top: 40px;
  cursor:pointer;
  background: -webkit-linear-gradient(left top, rgb(47,52,56) , rgb(35,38,43));
  background: -o-linear-gradient(bottom right, rgb(47,52,56) , rgb(35,38,43));
  background: -moz-linear-gradient(bottom right, rgb(47,52,56) , rgb(35,38,43));
  background: linear-gradient(to bottom right, rgb(47,52,56) , rgb(35,38,43));
}

.bgkColor2{
  width: 100%;
  height: 50px;
  /*border: 1px solid white;*/
  cursor:pointer;
  padding-top: 20px ;
  background: -webkit-linear-gradient(left top, rgb(47,52,56) , rgb(35,38,43));
  background: -o-linear-gradient(bottom right, rgb(47,52,56) , rgb(35,38,43));
  background: -moz-linear-gradient(bottom right, rgb(47,52,56) , rgb(35,38,43));
  background: linear-gradient(to bottom right, rgb(47,52,56) , rgb(35,38,43));

}

</style>