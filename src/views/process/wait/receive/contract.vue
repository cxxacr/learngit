<template>
<div id='contract'>
<ul class="mid">
      <li class="li"><small>采购单据号 : </small>
        <Input v-model="input_value" style="width: 140px" />
      </li>
      <li class="li"><small>采购类型 : </small>
        <Select v-model="model1" style="width:140px">
           <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </li>
      <li class="li"><small>供应商 : </small>
        <span class="s s2"><input type="text" class="s-i" readonly="readonly" v-model="s1">
        <i class="icons search"></i></span>
      </li>
      <li class="li"><small>成本中心 : </small>
        <span class="s s2"><input type="text" class="s-i" readonly="readonly" v-model="s1">
        <i class="icons search"></i></span>
      </li>
      <li class="li"><small>单据类型 : </small>
        <Select v-model="model1" style="width:140px">
           <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </li>
      <li class="li"><small>项目 : </small>
        <span class="s s1"><input type="text" class="s-i" readonly="readonly" v-model="s1">
        <i class="icons search"></i></span>
      </li>
      <li class="li"><small>单据日期 : </small>
        <DatePicker type="date" placeholder="请选择" style="width: 150px"></DatePicker>
        TO
        <DatePicker type="date" placeholder="请选择" style="width: 150px"></DatePicker>
      </li>
      <li class="li"><small>采购员 : </small>
        <Select v-model="model2" style="width:180px">
          <Option v-for="item in peopleList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </li>
      <li class="li"><Button type="error">查询</Button></li>
    </ul>
    <p>
        <i class="icon cs i_color"></i><span>超时</span>
        <i class="icon zc i_color"></i><span>正常</span>
    </p>
    <Table border ref="selection" :columns="columns1" :data="data1"
      @on-select="tableSelect"
      @on-select-cancel="tableSelectCancel"
      @on-select-all="tableSelectAll"
      @on-select-all-cancel="tableSelectAllCancel"
      :disabled-hover='isHover'></Table>
    <p class="finally"><span>总共{{total}}条记录，共{{pagenumber}}页</span>
        <Page :total="total" show-elevator @on-change='page_change'/>
    </p>
    <ul class="final">
        <li><Button type="error">到货确认</Button></li>
    </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      checkAll: false,
      loading: true,
      alldata: [],
      total: 0,
      // 控制状态 true红 false绿
      isLate: true,
      // 禁用鼠标悬停时的高亮
      isHover: true,
      // 页码数
      pagenumber: 1,
      // 查询成本中心
      s1: '',
      // 查询申请人
      s2: '',
      // 查询项目
      s3: '',
      // 申请编号
      input_value: '',
      // 采购类型
      typeList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model1: '',
      // 采购员
      peopleList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model2: '',
      // 表格数据
      columns1: [{
        type: 'selection',
        width: 50,
        align: 'center'
      }, {
        title: '状态',
        key: 'statue',
        width: 65,
        tooltip: true,
        align: 'center',
        render: function (h, params) {
          // console.log(params.row.name)
          return h('i', {
            'class': {
              'icon cs i_color': params.row.name,
              'icon zc i_color': !params.row.name
            }
          })
        }
      }, {
        title: '采购单据号',
        key: 'purchaseDocumentNumber',
        tooltip: true,
        // width: 140,
        align: 'center'
      }, {
        title: '单据类型',
        align: 'center',
        // width: 180,
        tooltip: true,
        key: 'documentType'
      }, {
        title: '采购类型',
        key: 'purchaseType',
        // width: 110,
        tooltip: true,
        align: 'center'
      }, {
        title: '通知供应商',
        key: 'notifyTheSupplier',
        tooltip: true,
        width: 120,
        align: 'center',
        render: (h, params) => {
          return h('checkbox', {
            props: { value: params.row.notifyTheSupplier },
            on: {
              'on-change': (e) => {
                this.check(e, params)
              }
            }
          }
          )
        },
        renderHeader: (h, params) => {
          return h('div', [
            h('span', '通知供应商'
            ),
            h('checkbox', {
              props: {
                value: this.checkAll
              },
              on: {
                'on-change': (e) => {
                  this.data1.forEach(it => {
                    it.notifyTheSupplier = e
                  })
                  this.checkAll = e
                }
              }
            })]
          )
        }
      }, {
        title: '供应商',
        key: 'supplier',
        tooltip: true,
        // width: 200,
        align: 'center'
      }, {
        title: '到货地址',
        key: 'deliveryAddress',
        tooltip: true,
        // width: 200,
        align: 'center'
      }, {
        title: '单据日期',
        key: 'documentDate',
        tooltip: true,
        align: 'center'
      }, {
        title: '单据金额',
        key: 'documentAmount',
        tooltip: true,
        align: 'center'
      }, {
        title: '公司',
        key: 'company',
        tooltip: true,
        align: 'center'
      }
      ],
      data1: []
    }
  },
  methods: {
    check (e, params) {
      let checks = true
      this.data1.forEach(it => {
        if (it.purchaseDocumentNumber === params.row.purchaseDocumentNumber) {
          it.notifyTheSupplier = e
        }
        checks = it.notifyTheSupplier && checks
      })
      this.checkAll = checks
    },
    page_change (num) {
      this.data1.splice(0, this.data1.length)
      // 优先启用满足当前条件的数据
      let pagedata = this.alldata
      for (let i = (num - 1) * 10; i <
        (num * 10 > pagedata.length ? pagedata.length : num * 10); i++) {
        this.data1.push(pagedata[i])
      }
      this.change_asked()
    },
    // 单行选择
    tableSelect (selection, row) {
      this.data1.map(s => {
        if (s.purchaseDocumentNumber === row.purchaseDocumentNumber) {
          s['_checked'] = true
        }
      })
    },
    // 单行取消选择
    tableSelectCancel (selection, row) {
      this.data1.map(s => {
        if (s.purchaseDocumentNumber === row.purchaseDocumentNumber) {
          s['_checked'] = false
        }
      })
    },
    // 全选
    tableSelectAll (selection) {
      this.data1.map(s => {
        s['_checked'] = true
      })
    },
    // 取消全选
    tableSelectAllCancel (selection) {
      this.data1.map(s => {
        s['_checked'] = false
      })
    },
    // 已询价的全选
    change_asked () {
      let checks = true
      this.data1.forEach(it => {
        checks = it.notifyTheSupplier && checks
      })
      this.checkAll = checks
    }
  },
  props: ['newData'],
  mounted () {
    this.loading = true
    this.alldata = this.newData.newData2
    this.total = this.alldata.length
    this.pagenumber = Math.ceil(this.alldata.length / 10)
    this.alldata.sort(function (a, b) {
      return a.sqdate > b.sqdate ? 1 : -1
    })
    if (this.alldata.length > 10) {
      this.data1.splice(0, this.data1.length)
      for (let i = 0; i < 10; i++) {
        this.data1.push(this.alldata[i])
      }
    } else { this.data1 = this.alldata.array }
    this.loading = false
    this.change_asked()
  }
}
</script>

<style lang='scss' scoped>
.s2{
    width: 140px;
}
p{
  padding-left: 20px;
  margin-bottom: 25px;
  span{
    margin-right: 20px;
    margin-left: 5px;
  }
}
</style>
