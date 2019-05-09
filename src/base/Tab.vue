<template>
  <div class="footer">
    <router-link to="/home" style="text-align: -webkit-center">
      <i class="iconfont icon-shouye"></i>
      <span>homepage</span>
    </router-link>
    <router-link to="/task1" style="text-align: -webkit-center">
      <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      <span>task 1</span>
    </router-link>
    <router-link to="/task2" style="text-align: -webkit-center">
      <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      <span>task 2</span>
    </router-link>
    <router-link to="/task3" style="text-align: -webkit-center">
      <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      <span>task 3</span>
    </router-link>
    <router-link to="/task4" style="text-align: -webkit-center">
      <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      <span>task 4</span>
    </router-link>
    <router-link to="/task5" style="text-align: -webkit-center">
      <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      <span>task 5</span>
    </router-link>
    <router-link to="/task6" style="text-align: -webkit-center">
      <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      <span>task 6</span>
    </router-link>
    <router-link to="/task7" style="text-align: -webkit-center">
      <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      <span>task 7</span>
    </router-link>
    <router-link to="/task8" style="text-align: -webkit-center">
      <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      <span>task 8</span>
    </router-link>
    <router-link to="/wiki" style="text-align: -webkit-center">
      <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      <span>wiki</span>
    </router-link>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: "tab"
  }
</script>
<!--display:flex
    flex-direction: row/column
    justify-content-center 垂直居中
    align-item:center 横向居中
    flex:1 每份占1
-->
<style scoped lang="less">
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #ccc;
    a {
      diplay: flex;
      color: yellowgreen;
      flex-direction: column;
      flex: 5;
      align-items: center;
      justify-content: center;

    }

    a.router-link-active {
      color: red;
    }
  }
</style>
