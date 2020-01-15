<template>
  <div id='detail'>
    <ul class="mid">
      <li  class="li"><small>物料 : </small>
        <span class="s s1"><input type="text" class="s-i" readonly="readonly" v-model="s1">
        <i class="icons search"></i></span>
      </li>
      <li class="li"><small>公司 : </small>
        <span class="s s1"><input type="text" class="s-i" readonly="readonly" v-model="s1">
        <i class="icons search"></i></span>
      </li>
      <li class="li"><small>采购申请编号 : </small>
        <Input v-model="input_value" style="width: 150px" />
      </li>
      <li class="li"><small>项目 : </small>
        <span class="s s1"><input type="text" class="s-i" readonly="readonly" v-model="s1">
        <i class="icons search"></i></span>
      </li>
      <li class="li"><small>采购类型 : </small>
        <Select v-model="model1" style="width:180px">
        <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </li>
      <li class="li"><small>成本中心 : </small>
        <span class="s s2"><input type="text" class="s-i" readonly="readonly" v-model="s1">
        <i class="icons search"></i></span>
      </li>
      <li class="li"><small>申请日期 : </small>
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
    <Table border ref="selection" :columns="columns1" :data="data1" :disabled-hover='isHover'></Table>
    <p class="finally"><span>总共{{total}}条记录，共{{pagenumber}}页</span>
      <Page :total="total" show-elevator @on-change='page_change' />
    </p>
    <ul class="final">
      <li><Button type="error">生成采购合同</Button></li>
      <li><Button type="error">生成框架协议</Button></li>
      <li><Button type="error">生成采购订单</Button></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkAll: false,
      // 最早时间
      value1: '',
      // 最晚时间
      value2: '',
      // 数据条数
      total: 0,
      // 页码数
      pagenumber: 1,
      // 表格的加载状态
      loading: false,
      // 储存表格的所有数据
      alldata: [],
      // 满足条件的所有数据
      truedata: [],
      isHover: false,
      s1: '',
      input_value: ' ',
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
      columns1: [{
        type: 'selection',
        width: 50,
        align: 'center'
      }, {
        title: '状态',
        key: 'state',
        width: 65,
        tooltip: true,
        align: 'center',
        render: function (h, params) {
          // console.log(params.row.name)
          return h('i', {
            'class': {
              'icon cs i_color': params.row.state,
              'icon zc i_color': !params.row.state
            }
          })
        }
      },
      {
        title: '采购申请编号',
        align: 'center',
        // width: 180,
        tooltip: true,
        key: 'sqnumber'
      }, {
        title: '申请人',
        key: 'sqman',
        tooltip: true,
        // width: 140,
        align: 'center'
      }, {
        title: '审批通过日期',
        key: 'passdate',
        // width: 110,
        tooltip: true,
        align: 'center'
      }, {
        title: '已询价',
        key: 'asked',
        tooltip: true,
        align: 'center',
        render: (h, params) => {
          return h('Checkbox', {
            props: { value: params.row.asked, name: 'asked' },
            on: {
              'on-change': (e) => {
                this.data1.forEach(it => {
                  if (it.sqnumber === params.row.sqnumber) {
                    it.asked = e
                  }
                })
                this.checkAlls()
              }
            }
          }
          )
        },
        renderHeader: (h, params) => {
          return h('div', [
            h('span', '已询价'
            ),
            h('Checkbox', {
              props: {
                value: this.checkAll,
                name: 'asked'
              },
              on: {
                'on-change': (e) => {
                  this.data1.forEach(it => {
                    it.asked = e
                  })
                  this.checkAll = e
                }
              }
            })]
          )
        }
      }, {
        title: '公司',
        key: 'gc',
        tooltip: true,
        // width: 200,
        align: 'center'
      }, {
        title: '公司到货地址',
        key: 'gcdhdz',
        tooltip: true,
        // width: 200,
        align: 'center'
      }, {
        title: '备注',
        key: 'bz',
        tooltip: true,
        align: 'center'
      }, {
        title: '项目',
        key: 'xm',
        tooltip: true,
        align: 'center'
      }, {
        title: '是否预付',
        key: 'pay',
        tooltip: true,
        align: 'center'
      }
      ],
      data1: []
    }
  },
  computed: {
    // checkAll () {
    //   let checks = true
    //   this.data1.forEach(e => {
    //     checks = e.asked && checks
    //   })
    //   return checks
    // }
  },
  methods: {
    checkAlls () {
      let checks = true
      this.data1.forEach(e => {
        checks = e.asked && checks
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
    }
  },
  props: [
    'newData'
  ],
  mounted () {
    this.loading = true
    this.alldata = this.newData
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
  }
}
</script>

<style lang="scss" scoped>
.s1{
  width: 150px;
}
.s2{
  width: 220px;
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
