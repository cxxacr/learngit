<template>
<div>
  <div id="head">
    <div class="head-top">
      <div class="pull-left">
        <a class="logo1" title='ipsa'></a>
        <a class="logo2" title="采购管理系统"></a>
      </div>
      <div class="pull-right">
        <ul>
          <li><a class="change"><i class="icons dj"></i>我的单据
          <font color="#d71921">(<b>0</b>)</font></a></li>
          <li><a class="change"><i class="icons sp"></i>我的审批
          <font color="#d71921">(<b>0</b>)</font></a></li>
          <li>
            <div class="buy_car_top">
              <i class="icons car"></i><em class="shopping_amount">0</em>
              <span>我的需求清单</span>
              <i class="icons jt"></i>
            </div></li>
          <li><div class="user_login_top">
            <a >xx</a>
            <i ></i>
            <div class="user_pic">
              <img src='../assets/avatar.png'>
            </div>
          </div>
          </li>
        </ul>
      </div>
    </div></div>
    <div class="head_nav">
      <div class="container">
        <ul>
          <li class="n1 n2"><a>首页</a></li>
          <li class="n1"><a>采购需求管理<i class="arrow"></i></a></li>
          <li class="n1"><a>采购过程管理<i class="arrow"></i></a></li>
          <li class="n1"><a>采购验收管理</a></li>
          <li class="n1"><a>基础数据管理</a></li>
          <li class="n1 n2"><a>报表管理</a></li>
          <li class="n1"><a>资产管理系统</a></li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
import '@/style/reset.css'
export default {

}
</script>

<style lang="scss">
.shopping_amount{
  position: absolute;
  top: -10px;
  left: 40px;
  display: inline-block;
  padding: 2px 3px;
  font-size: 12px;
  line-height: 12px;
  color: #fff;
  background-color: #d71921;
  border-radius: 7px 7px 7px 0;
  min-width: 15px;
  text-align: center;
  z-index: 999;
  font-style: normal;
}
.pull-right{
     a:hover i.sp {
    background-position: -20px -21px;
}
     a:hover i.dj {
    background-position: 0 -21px;
}
    a.change:hover {
    cursor: pointer;
    color: #d71921;
    text-decoration: underline;
}
}
.container{
  width: 1200px;
  height: 40px;
  margin: 0 auto;
    li.n1:hover a {
    background: #dd323e;
    text-decoration: none;
}
  li.n2{
    width: 95px;
    a{
      padding-left: 13px;
    }
  }
  .n1{
    width: 145px;
    float: left;
    position: relative;
    a{
    text-align: left;
    display: block;
    line-height: 40px;
    color: #fff;
    padding-left: 20px;
    cursor: pointer;
      i.arrow{
      display: inline-block;
      margin-right: 0;
      margin-left: 12px;
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 8px solid #fff;
      background: 0;
      transition: transform .1s ease-in 0s;
    }
  }
  }
}
.head_nav{
    min-width: 1200px;
    width: 100%;
    height: 40px;
    background: url('data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QOIaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDBhMzNkZTEtNTRjMy0xMDQ2LTlkZGEtY2JhZmFlYmU0NjMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU0MURCMDNBMzgzNTExRTY4QUQ3QTgxNzI4NEZEOTQzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU0MURCMDM5MzgzNTExRTY4QUQ3QTgxNzI4NEZEOTQzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNmMyZjNkYS1lZTc5LTA2NDMtYWNmZS0xY2JkZTE4MWFlMDIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozMzJhZmFlMS1lNzQzLTExZTUtOGZjOS1kMzMxODcyZGMyZDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAoAAEDAREAAhEBAxEB/8QAXAABAQEAAAAAAAAAAAAAAAAAAAUIAQEAAgMAAAAAAAAAAAAAAAAAAQMFBggQAQABBQAAAAAAAAAAAAAAAACRAQJSAxURAQACAwAAAAAAAAAAAAAAAAAhUQISFP/aAAwDAQACEQMRAD8Aw9zdGNsUaLu7b4cKU1LIAAEJgh//2Q==') repeat-x;
}
#head{
  width: 100%;
  height: 70px;
}
.head-top{
  margin: 0 auto;
  width: 1200px;
  height: 70px;
}
.user_pic{
  width: 50px;
  height: 50px;
  border-radius: 100%;
  line-height: 1.4;
  margin-top: -8px;
  float: left;
  overflow: hidden;
  img{
    width: 50px;
    height: 50px;
  }
}
.buy_car_top{
  cursor: pointer;
  width: 152px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 4px;
  line-height: 35px;
  background: #fafafa;
  position: relative;
  span{
    font-size: 12px;
    margin: 0 5px;
  }
  i.jt{
  width: 8px;
  height: 12px;
  background-position: -74px -3px;
  margin-right: 0;
  vertical-align: middle;
  margin-left: 3px;
}
}
.user_login_top {
  cursor: pointer;
  clear: both;
  a{
    max-width: 85px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    line-height: 1.4;
    float: left;
    margin-top: 7px;
}
 i{
    float: left;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 8px solid #666;
    margin: 14px 10px 0 5px;
}
}
.icons{
  display: inline-block;
  background: url('../assets/IconImg.png') no-repeat;
}
.car{
  width: 23px;
  background-position: -42px 0;
  margin-left: 10px;
  margin-right: 8px;
}
.dj{
  width: 17px;
  background-position: 0 0;
}
.sp{
  width: 19px;
  background-position: -20px 0px;
}
.pull-left{
  padding-top: 20px;
    .logo1{
      width: 86px;
      background: url('../assets/logo1.png') no-repeat;
      padding-top: 32px;
      display:block;
      cursor: pointer;
      float: left;
      margin-right:10px;
    }
    .logo2{
      padding-top: 32px;
      display:block;
      cursor: pointer;
      float: left;
      width: 233px;
      background: url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QOJaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDBhMzNkZTEtNTRjMy0xMDQ2LTlkZGEtY2JhZmFlYmU0NjMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgxRUQ4NEE5MzgzQjExRTY4N0NCRTE0NDA0RDJCQTE1IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgxRUQ4NEE4MzgzQjExRTY4N0NCRTE0NDA0RDJCQTE1IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTZmYmJmMTctZDhlMS1kMzQ5LWI2ZjQtZGVjNmRiNGVmYTlmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzMyYWZhZTEtZTc0My0xMWU1LThmYzktZDMzMTg3MmRjMmQzIi8+IDwvcmRmOkRl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) no-repeat;
    }
  }
  .pull-right{
    float: right;
    li{
      float: left;
      margin-left: 20px;
      line-height: 37px;
      i{
        height: 18px;
        margin-right: 10px;
        vertical-align: text-bottom;
      }
    }
  }

</style>
