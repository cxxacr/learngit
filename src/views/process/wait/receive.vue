<template>
  <div id='receive'>
    <ul class='tit'>
      <li><router-link to="/wait/receive/contract" active-class='active'>采购订单/合同</router-link></li>
      <li><router-link to="/wait/receive/contractdetail" active-class='active'>采购订单/合同明细</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#receive{
  margin: 0 10px;
}
</style>
