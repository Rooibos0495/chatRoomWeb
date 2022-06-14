<template>
  <div id="app">

    <!-- 路由页面配置 -->
    <router-view>

    </router-view>

  </div>
</template>


<script>

export default {
  data () {
    return {
      loading:true
    }
  },
  components: {
  },
}


</script>


<style>
*{
  padding: 0;
  margin: 0;
}
div, span, p {
  caret-color: transparent;
}
body{
  background: rgb(41,45,50);
}
#app{
  text-align: center;
}
</style>