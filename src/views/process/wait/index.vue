<template>
  <div id='wait'>
        <ul class="top1">
          <li><a>采购代办</a></li>
        </ul>
        <ul class="top2">
          <li class="firs">
            <router-link to='/wait/order' active-class='active'>
              <em class="amount">22</em>
              <i class="icon xd pos"></i>
              <p>待采购下单</p>
            </router-link>
          </li>
          <li>
            <router-link to='/wait/receive' active-class='active'>
              <em class="amount">0</em>
              <i class="icon"></i>
              <i class="icon sh pos"></i>
              <p>待收货</p>
            </router-link>
          </li>
          <li>
            <router-link to='/wait/check' active-class='active'>
              <em class="amount">0</em>
              <i class="icon"></i>
              <i class="icon ys pos"></i>
              <p>到货待验收</p>
            </router-link>
          </li>
          <li class="last">
            <router-link to='/wait/receipt' active-class='active'>
              <em class="amount">0</em>
              <i class="icon"></i>
              <i class="icon fp pos"></i>
              <p>待开发票</p>
            </router-link>
          </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {
  }
}
</script>

<style lang="scss">
.amount {
  position: absolute;
  left: 132px;
  display: inline-block;
  padding: 2px 5px;
  line-height: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #dc5252;
  border-radius: 9px;
  text-align: center;
  font-style: normal;
}
.sh{
  background-position: -55px 0;
}
.ys{
  background-position: -113px 0;
}
.fp{
  background-position: -165px 0;
}
.xd{
  background-position: 0 0;
}
.pos{
  margin-top: 5px;
  width: 52px;
  height: 44px;
}
#wait{
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
  .top2{
      margin: 0 10px;
      margin-bottom: 20px;
      background-color: #fff8f8;
      height: 80px;
      .firs{
          padding-left: 10px;
          }
      .last{
          padding-right: 10px;
      }
      li{
      float: left;
      position: relative;
      width: 295px;
      padding: 5px;
          a{
            cursor: pointer;
            display: block;
            width: 100%;
            background-color: #f9f0f0;
            height: 70px;
            text-align: center;
          }
          .active{
            background-color: #dc5252;
            border: 1px dashed #ffffff;
            .amount{
              color: #dc5252;
              background-color: #fff;
            }
            i{
              background-position-y:-48px;
            }
            p{
              color: #fff;
              font-weight: 700;
            }
          }
      }
  }
}
</style>
