<template>
  <div id='order'>
      <ul class='tit'>
          <li><router-link to="/wait/order/apply" active-class='active'>采购申请单</router-link></li>
          <li><router-link to="/wait/order/detail" active-class='active'>采购申请明细</router-link></li>
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
  methods: {

  }
}
</script>

<style lang="scss" scoped>
#order{
  margin: 0 10px;
}
</style>
