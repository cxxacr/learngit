<template>
<div id='apply'>
  <ul class="mid">
    <li class="li"><small>采购申请编号 : </small>
      <Input v-model="input_value" style="width: 150px" />
    </li>
    <li class="li"><small>成本中心 : </small>
      <span class="s s1"><input type="text" class="s-i" readonly="readonly" v-model="s1">
      <i class="icons search"></i></span>
    </li>
    <li class="li"><small>采购类型 : </small>
      <Select v-model="type1" style="width:180px">
        <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </li>
    <li class="li"><small>申请人 : </small>
      <span class="s s2"><input type="text" class="s-i" readonly="readonly" v-model="s2">
      <i class="icons search"></i></span>
    </li>
    <li class="li"><small>申请日期 : </small>
      <DatePicker type="date" @on-change="getDate1" placeholder="请选择" style="width: 150px"></DatePicker>
      TO
      <DatePicker type="date" @on-change="getDate2" placeholder="请选择" style="width: 150px"></DatePicker>
    </li>
    <li class="li"><small>项目 : </small>
    <span class="s s3"><input type="text" class="s-i" readonly="readonly" v-model="s3">
    <i class="icons search"></i></span>
    </li>
    <li class="li"><small>采购员 : </small>
      <Select v-model="model2" style="width:180px">
        <Option v-for="item in peopleList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </li>
    <li class="li"><Button type="error" @click="check">查询</Button></li>
  </ul>
  <p>
    <i class="icon cs i_color"></i><span>超时</span>
    <i class="icon zc i_color"></i><span>正常</span>
  </p>
  <Table border ref="selection" :loading="loading" :columns="columns1" :data="data1" :disabled-hover='isHover'></Table>
  <p class="finally"><span>总共{{total}}条记录，共{{pagenumber}}页</span>
  <Page ref="pages" :total="total" show-elevator @on-change='page_change' prev-text="上一页" next-text="下一页" />
  </p>
  <ul class="final">
    <li><Button type="error">生成采购合同</Button></li>
    <li><Button type="error">生成框架协议</Button></li>
    <li><Button type="error">生成采购订单</Button></li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      // 表格的加载状态
      loading: false,
      // 储存表格的所有数据
      alldata: [],
      // 满足条件的所有数据
      truedata: [],
      // 控制状态 true红 false绿
      isLate: true,
      // 禁用鼠标悬停时的高亮
      isHover: true,
      // 数据条数
      total: 0,
      // 页码数
      pagenumber: 1,
      // 最早时间
      value1: '',
      // 最晚时间
      value2: '',
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
          value: '',
          label: '请选择'
        },
        {
          value: '固定资产',
          label: '固定资产'
        },
        {
          value: '低值易耗',
          label: '低值易耗'
        }
      ],
      type1: '',
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
        key: 'boolean',
        width: 65,
        tooltip: true,
        align: 'center',
        render: function (h, params) {
          // console.log(params)
          return h('i', {
            'class': {
              'icon cs i_color': params.row.boolean,
              'icon zc i_color': !params.row.boolean
            }
          })
        }
      },
      {
        title: '采购申请编号',
        align: 'center',
        width: 180,
        tooltip: true,
        key: 'sqnumber'
      }, {
        title: '采购类型',
        key: 'type',
        tooltip: true,
        width: 140,
        align: 'center'
      }, {
        title: '申请日期',
        key: 'sqdate',
        width: 110,
        tooltip: true,
        align: 'center'
      }, {
        title: '申请人',
        key: 'sqman',
        tooltip: true,
        width: 120,
        align: 'center'
      }, {
        title: '成本中心',
        key: 'cbzx',
        tooltip: true,
        width: 200,
        align: 'center'
      }, {
        title: '公司',
        key: 'gs',
        tooltip: true,
        width: 200,
        align: 'center'
      }, {
        title: '项目',
        key: 'xm',
        tooltip: true,
        align: 'center'
      }
      ],
      data1: []
    }
  },
  methods: {
    getDate1 (e) {
      this.value1 = e
    },
    getDate2 (e) {
      this.value2 = e
    },
    /*
     * 实现过滤(仅实现 采购申请编号) 未完成
     *
    */
    check () {
      if (this.input_value.trim() || this.value1 || this.value2 || this.type1) {
        // 数据初始化
        this.data1.splice(0, this.data1.length)
        this.truedata.splice(0, this.truedata.length)
        this.alldata.forEach(e => {
          if (e.sqnumber.toString().indexOf(this.input_value.trim()) !== -1 &&
            (this.value1 ? this.value1 < e.sqdate : true) &&
            (this.value2 ? e.sqdate < this.value2 : true) &&
            (this.type1 ? e.type === this.type1 : true)) {
            this.truedata.push(e)
          }
        })
        // 克隆页面显示数据
        for (let i = 0; i < (this.truedata.length < 10 ? this.truedata.length : 10); i++) {
          this.data1.push(this.truedata[i])
        }
        // 改变过滤后的页码 记录总数
        this.total = this.truedata.length
        this.pagenumber = Math.ceil(this.truedata.length / 10) === 0 ? 1 : Math.ceil(this.truedata.length / 10)
        this.$refs['pages'].currentPage = 1
      } else {
        // 当前查询条件为空时 表格使用全部数据
        // 将符合条件的数据清空 否则分页器不会调用全部数据
        // 每次调整表格时 要调整页面数与总记录数
        this.truedata.splice(0, this.truedata.length)
        if (this.alldata.length > 10) {
          this.data1.splice(0, this.data1.length)
          for (let i = 0; i < 10; i++) {
            this.data1.push(this.alldata[i])
          }
        } else { this.data1 = this.alldata.array }
        this.total = this.alldata.length
        this.pagenumber = Math.ceil(this.alldata.length / 10)
        this.$refs['pages'].currentPage = 1
      }
    },
    /*
     * 用来实现翻页 优先选取符合条件的数据
     * @param 页码数
     *
    */
    page_change (num) {
      this.data1.splice(0, this.data1.length)
      // 优先启用满足当前条件的数据
      let pagedata = this.truedata.length > 0 ? this.truedata : this.alldata
      for (let i = (num - 1) * 10; i <
       (num * 10 > pagedata.length ? pagedata.length : num * 10); i++) {
        this.data1.push(pagedata[i])
      }
    }
  },
  mounted () {
    this.loading = true
    axios.get('/swipes')
      .then(
        res => {
          this.alldata = res.data[0].array
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
      )
  }
}
</script>

<style lang="scss" scoped>
.ivu-table:after {
    width: 0px;
}
.ivu-page-options {
  margin-bottom: 1px;
}
#apply{
  p{
    padding-left: 20px;
    margin-bottom: 25px;
    span{
      margin-right: 20px;
      margin-left: 5px;
    }
  }
.s1{width: 228px;}
.s2{width: 130px;}
.s3{width: 120px;}
}
</style>
