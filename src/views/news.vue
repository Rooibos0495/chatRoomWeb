<template>
  <div class="box-max">
    <div class="left-box">
      <ul class="infinite-list" style="overflow:auto;width: 179px;height: 479px;" infinite-scroll-distance="10">
        <div class="user-list" style="overflow:auto;cursor: pointer" @click="clickUserTable">
          <div class="user-title">
            <img :src="userList.title" style="vertical-align:middle"/>
          </div>
          <div class="user-name">
            {{ userList.userName }}
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      userList: {
        title: "",
        userName: "少年维特的烦恼"
      }
    }
  },
  mounted() {
  },
  methods:{
    clickUserTable(){
      console.log(123)
    }
  }
}
</script>

<style>
.box-max {
  width: 875px;
  height: 479px;
  /*border: 1px solid red;*/
  background: rgb(39, 42, 47);
  /*border-radius: 10px;*/
}

.box-max .left-box {
  width: 20%;
  height: 100%;
  /*border: 1px solid red;*/
}

.user-list {
  width: 133px;
  height: 7%;
  /*border:1px solid red;*/
  display: flex;
  padding: 15px;
}

.user-title {
  width: 30px;
  height: 30px;
  border: 1px solid red;
  margin-right: 10px;
}

.user-name {
  height: 10px;
  /*border:1px solid blue;*/
  line-height: 30px;
  color: white;
  font-weight: lighter;
  font-size: 12px;
}

/*//滚动条的样式*/
::-webkit-scrollbar {
  /*//滚动条宽高*/
  width: 0px;
  height: 0px;
}

::-webkit-scrollbar-thumb {
  /*//滚动条颜色和圆角*/
  background-color: #dbd9d9;
  border-radius: 3px;
}

</style>