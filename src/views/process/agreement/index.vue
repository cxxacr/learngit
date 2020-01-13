<template>
  <div id='agreement'>
    <ul class="top1">
      <li><a>框架协议</a></li>
    </ul>
    <div class="center">
      <ul class='tit'>
        <li><router-link to="/agreement/submit" active-class='active'>待提交</router-link></li>
        <li><router-link to="/c" active-class='active'>我的单据</router-link></li>
        <li><router-link to="/a" active-class='active'>所有单据</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#agreement{
  background: #fff;
  box-shadow: 0 0 3px rgba(0,0,0,.3);
  margin-bottom: 30px;
  min-height: 300px;
  height: auto;
  width: 1200px;
  margin: 0 auto;
  .top1{
    border-bottom: 1px solid #cccccc;
    height: 42px;
    line-height: 42px;
    margin-bottom: 20px;
    li>a{
        padding: 0 10px;
        display: inline-block;
        border-bottom: 2px solid #d71921;
    }
    li>a:hover {
        cursor: pointer;
        color: #d71921;
      }
  }
}
.center{
  margin: 0 10px;
  padding-bottom: 40px;
}
</style>
