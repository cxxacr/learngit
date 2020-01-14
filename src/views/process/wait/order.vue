<template>
  <div id='order'>
      <ul class='tit'>
          <li><a :class="{'active': isActive}" @click="changeTab">采购申请单</a></li>
          <li><a :class="{'active': !isActive}" @click="changeTab">采购申请明细</a></li>
      </ul>
      <component :is="currentTabComponent" :newData='newData' ></component>
  </div>
</template>

<script>
import Apply from './order/apply'
import Detail from './order/detail'
export default {
  data () {
    return {
      isActive: true,
      currentTabComponent: Apply
    }
  },
  props: ['newData'],
  components: {
    Apply, Detail
  },
  methods: {
    changeTab (e) {
      switch (e.toElement.textContent) {
        case '采购申请单':
          this.currentTabComponent = Apply
          this.isActive = true
          break
        case '采购申请明细':
          this.currentTabComponent = Detail
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
#order{
  margin: 0 10px;
}
</style>
