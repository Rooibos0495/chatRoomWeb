<template>
  <div class="hello">

    <h1>我们就从这里开始把!!!</h1>
    <h1>使用 npm run serve 启动哦！！！</h1>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary"
                 @click="openFullScreen1"
                 v-loading.fullscreen.lock="fullscreenLoading"
      >主要按钮
      </el-button>
      <el-button type="success"
                 @click="openFullScreen1"
                 v-loading.fullscreen.lock="fullscreenLoading">成功按钮
      </el-button>
      <el-button type="info"
                 @click="openFullScreen1"
                 v-loading.fullscreen.lock="fullscreenLoading">信息按钮
      </el-button>
      <el-button type="warning"
                 @click="openFullScreen1"
                 v-loading.fullscreen.lock="fullscreenLoading">警告按钮
      </el-button>
      <el-button type="danger"
                 @click="openFullScreen1"
                 v-loading.fullscreen.lock="fullscreenLoading">危险按钮
      </el-button>
    </el-row>

    <el-button @click="textMethod"> 请求测试 </el-button>
  </div>


</template>

<script>

import {
  text
} from '@/api/text/text';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      fullscreenLoading: false
    }
  },
  methods: {
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 1000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 500);
    },
    textMethod() {
      text().then(response=>{
        console.log(response)
      })
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
