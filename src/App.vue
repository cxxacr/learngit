<template>
  <div id="app">
  <Head></Head>
  <router-view></router-view>
  </div>
</template>
<script>
import Head from '@/components/head.vue'
// import Wait from '@/views/process/wait.vue'
import '@/style/reset.css'

export default {
  data () {
    return {

    }
  },
  components: {
    // Wait,
    Head
  }
}
</script>
<style lang="scss">
body {
    font-size: 14px;
    font-family: Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1;
    color: #333;
    background-color: #f5f5f5;
}
// 红色ul选项卡
small{
  margin-right: 5px;
}
.tit{
  border-bottom: 1px solid #dddddd;
  height: 32px;
  line-height: 32px;
  margin-bottom: 20px;
  li{
    float: left;
    .active{
      border-left: 1px solid #cccccc;
      border-right: 1px solid #cccccc;
      border-top:3px solid #d71921;
      color: #d71921;
      line-height: 27px;
      border-bottom: 3px solid #fff;
    }
    a{
      text-decoration:none;
      color:#333;
      padding: 0 10px;
      display: inline-block;
      cursor: pointer;
    }
  }
}
a {
  color: #000;
}
a:hover {
  color: #000;
}
a:active {
  color: #000;
}
.ivu-select-selection,.ivu-input{
  border-radius: 0;
  border:1px solid#ccc;
}
// 选项卡下的几个输入框
.mid{
  height: 90px;
  .li{
    float: left;
    margin-right: 15px;
    margin-bottom: 15px;
    height: 30px;
    line-height: 30px;
  }
}
// 日历的点击手势
.ivu-input-inner-container{
  cursor: pointer;
}
// 搜索样式
.search{
  position: absolute;
  height: 16px;
  width: 18px;
  background: url('./assets/IconImg.png') no-repeat;
  background-position: -23px -213px;
  top: 8px;
  right: 8px;
  cursor: pointer;
}
// 搜索样式被触发
.s{
  i.search:hover{
    background-position: 0 -213px;
        }
        border: 1px solid #ccc;
        display: inline-block;
        position: relative;
      }
.s-i{
  margin-left: 5px;
  margin-right: 5px;
  width: 90%;
  height: 28px;
  padding: 0 5px;
  border: 0;
  font-size: 12px;
  color: #666;
  outline: none;
}
.ivu-btn-error{
  padding: 5px 25px;
  color: #fff;
  background-color: #c81623;
  border-color: #c81623;
}
.icon{
  display: inline-block;
  background: url('./assets/icon.png') no-repeat;
}
// 超时 正常样式
.cs{
  background-position: 0 -96px;
}
.zc{
  background-position: -15px -96px;
}
.i_color{
  width: 16px;
  height: 15px;
  margin-bottom: -1px;
}
// 分页器样式
.finally{
  margin-bottom: 5px;
  line-height: 30px;
  margin-left: 10px;
  margin-top: 30px;
  span{
    float: left;
    margin-right: 10px;
  }
}
// 页面最后的按钮
.final{
  height: 60px;
  li{
    margin: 0 10px;
    float: right;
  }
}
</style>
