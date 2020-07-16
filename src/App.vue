<template>
  <div id="app">
    <el-button type="primary">
      <router-link to="/list">商品列表</router-link>
    </el-button>
    <el-button type="success">
      <router-link to="/cart">购物车</router-link>
    </el-button>

    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data:function(){
    return {

    }
  },
  methods:{

  }
}
</script>

<style>
a{
  color:#f7f7f7;
  text-decoration:none;
}
</style>
