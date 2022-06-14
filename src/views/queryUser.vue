<template>
  <div>
    <input class="from-group-username from-register" v-model="registerUserName" placeholder="输入用户名" type="text"/>
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
            点击查询
          </span>
    </button>

    <div v-if="userInfoData != ''">

    </div>
    <div v-else>
      <el-empty :image-size="200"></el-empty>
    </div>
  </div>
</template>

<script>

import {queryUserDetails} from "../api/sysUser/SysUserDetails";

export default {
  name: "queryUser",
  data(){
    return{
      registerUserName:"",
      userInfoData :""
    }
  },
  methods:{
    submitForm(){
      queryUserDetails(this.registerUserName).then(res =>{
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.from-group-username {
  font-size: 18px;
  line-height: 1.5;
  padding: 5px 8px;
  height: 45px;
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
  width: 50%;
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
  width: 45%;
  height: 50px;
}
</style>