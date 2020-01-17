<template>
  <div id='receive'>
    <ul class='tit'>
      <li><a :class="{'active': isActive}" @click="changeTab">采购订单/合同</a></li>
      <li><a :class="{'active': !isActive}" @click="changeTab">采购订单/合同明细</a></li>
    </ul>
    <component :is="currentTabComponent" :newData='newData'></component>
  </div>
</template>

<script>
import Contract from '@/views/process/wait/receive/contract'
import Contractdetail from '@/views/process/wait/receive/contractdetail'
export default {
  data () {
    return {
      isActive: true,
      currentTabComponent: Contract
    }
  },
  props: ['newData'],
  components: {
    Contract, Contractdetail
  },
  methods: {
    changeTab (e) {
      switch (e.toElement.textContent) {
        case '采购订单/合同':
          this.currentTabComponent = Contract
          this.isActive = true
          break
        case '采购订单/合同明细':
          this.currentTabComponent = Contractdetail
          this.isActive = false
          break
        default :
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#receive{
  margin: 0 10px;
}
</style>
