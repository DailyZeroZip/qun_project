<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
  <!-- <div id="app">

    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

  </div> -->
    <div id="app">
    <el-container>
      <el-header class="header">
        <vheader />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
             <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
</template>

<script>
import api from "@/api/api";
import NavMenu from "@/components/NavMenu";
import Header from "@/components/Header";
export default {
  name: "App",
  components: {
   'navmenu': NavMenu,
    'vheader': Header
  },
  methods: {
    getList() {
      api
        .getListAPI()
        .then((res) => {
          //数据处理
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    //  this.getList();
  },

  // mounted(){
  //   let url ="https://www.fastmock.site/mock/84b732ed8dbb779a79838da0826c6788/api/api/getList"
  //   axios.get(url).then(()=>{

  //   })
  // }
};
</script>

<style>
.header {
  background-color: #409eff;
  color: #fff;
  line-height: 60px;
}
</style>
