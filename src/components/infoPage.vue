<template>
  <div style="width: 100%">

    <div v-if="active == 0">
      <p style="color:#ffffff;font-size: 20px;text-align: center;font-weight: lighter;margin-bottom: 20px">
        请上传您的头像
      </p>
      <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          style="margin-bottom: 20px">
        <img v-if="userInfo.avatar" :src="userInfo.avatar" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

    </div>

    <div v-if="active == 1">
      <p style="color:#ffffff;font-size: 20px;text-align: center;font-weight: lighter">
        请填写您的签名
      </p>
      <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          maxlength="300"
          placeholder="请输入内容"
          style="width: 300px;margin-top: 20px;margin-bottom: 20px"
          v-model="userInfo.describeUser">
      </el-input>
    </div>

    <div v-if="active == 2">
      <p style="color:#ffffff;font-size: 20px;text-align: center;font-weight: lighter">
        请填写个人信息
      </p>


      <div class="demo-input-suffix">
        <input class="from-group-username from-register" v-model="userInfo.userName" placeholder="用户名" type="text"/>
        <input class="from-group-username from-register" v-model="userInfo.remarks" placeholder="备注" type="text"/>
        <input class="from-group-username from-register" v-model="userInfo.phone" placeholder="手机号" type="text"/>
        <input class="from-group-username from-register" v-model="userInfo.city" placeholder="城市" type="text"/>
      </div>
    </div>

    <div v-if="active == 3">
      <el-empty description="填写完毕"></el-empty>
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
                --n-border-radius:3px;" @click="next">
          <span class="btn-text">
            下一步
          </span>
    </button>
  </div>
</template>

<script>

import {addUserDetails} from "../api/sysUser/SysUserDetails";

export default {
  name: "infoPage",
  data() {
    return {
      active: 0,
      //创建对象参数
      userInfo: {
        userId: "",
        userName: "",
        avatar: "",
        describeUser: "",
        remarks: "",
        phone: "",
        city: ""
      }
    }
  },
  mounted() {
  },
  methods: {
    next() {
      if (this.active++ >= 2) {
        if (this.active == "3") {
          console.log("进来了")
          this.$confirm('信息是否填写完毕?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '填写成功!'
            });
            this.userInfo.userId = localStorage.getItem("UserIdentification")
            addUserDetails(this.userInfo).then(res => {
              if (res.data == 1) {
                this.$router.push({path: '/home'})
                return
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      }
    },
    //头像上传逻辑
    handleAvatarSuccess(res, file) {
      this.userInfo.avatar = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

<style>
.el-steps--simple {
  padding: 13px 8%;
  border-radius: 4px;
  background: rgb(30, 33, 39);
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
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
  width: 35%;
  height: 50px;
  margin: auto;
}

.el-textarea__inner {
  background: rgb(30, 33, 39);
  border: 1px solid rgb(87, 82, 82);
  color: #FFFFFF;
}

.from-group .from-group-username {
  font-size: 18px;
  line-height: 1.5;
  padding: 5px 8px;
  height: 45px;
}

.from-register {
  border: 1px solid #363a43;
  background-color: #363a43;
  color: #ffffff;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 5px;
  font-weight: 400;
  display: block;
  width: 30%;
  height: 20px;
  outline: none;
  margin: 10px auto;
  padding: 10px;
}
</style>