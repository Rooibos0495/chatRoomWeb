<template>
  <div class="max-box">
<!--    头像-->
    <div v-if="pageFrom">
      <div class="title-image">
        <img src="../assets/table/title.jpg" width="80" height="80" style="border-radius: 100px"/>
      </div>
      <div class="box-name">
        {{ this.userInfo.userName }}
      </div>
      <!--    描述框-->
      <div class="box-message">
        {{this.userInfo.describeUser}}
      </div>
      <div class="message-1">
        备&nbsp;&nbsp;&nbsp;注:&nbsp;&nbsp; {{this.userInfo.remarks}}
      </div>
      <div class="message-1">
        手机号: &nbsp;&nbsp;{{ this.userInfo.phone}}
      </div>
      <div class="message-1">
        地&nbsp;&nbsp;&nbsp;区: &nbsp;&nbsp;{{this.userInfo.city}}
      </div>
    </div>

    <div v-else>
      <el-result icon="info" title="信息提示" subTitle="您还未完善您的用户信息哦">
        <template slot="extra">
          <el-button type="primary" size="medium" @click="addUserInfo">去完善</el-button>
        </template>
      </el-result>
    </div>
  </div>
</template>

<script>

import {queryByidUserDetails} from "../api/sysUser/SysUserDetails";

export default {
  name: "personal",
  data(){
    return{
      userInfo:{},
      pageFrom:true
    }
  },
  mounted() {
    this.queryUserInfo();
  },
  methods:{
    queryUserInfo(){
      //获取缓存用户标识
      let userId = localStorage.getItem("UserIdentification")
      queryByidUserDetails(userId).then(res =>{
        if (res.data == "") {
          //没有信息让他去添加信息
          this.pageFrom = false
        }else {
          //参数复制
          this.userInfo = res.data
        }
      })
    },
    addUserInfo(){
      this.$router.push({path: '/info'})
    }
  }
}
</script>

<style>
.max-box{
  width: 832px;
  height: 439px;
  /*border: 1px solid red;*/
  background: rgb(39,42,47);
  border-radius: 10px;
  padding: 20px;
}
.max-box .title-image{
  width: 80px;
  height: 80px;
  /*border: 1px solid white;*/
  margin: auto;
  border-radius: 100px;
}

.max-box .box-name{
  height: 30px;
  color: green;
  font-size: 20px;
  font-weight: lighter;
  margin-top: 10px;
}

.max-box .box-message{
  width: 400px;
  height: 180px;
  /*border: 1px solid white;*/
  margin: 10px auto;
  color: #FFFFFF;
  text-align: left;
  line-height: 25px;
  font-size: 14px;
}
.max-box .message-1{
  color: white;
  width: 400px;
  height: 30px;
  /*border: 1px solid white;*/
  text-align:left;
  margin:auto;
  font-weight: lighter;
}
.el-result__title p{
  color: white;
}
</style>