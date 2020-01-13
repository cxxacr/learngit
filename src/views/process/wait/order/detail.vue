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
    <p class="finally"><span>总共{{data1.length}}条记录，共{{pagenumber}}页</span>
      <Page :total="data1.length" show-elevator prev-text="上一页" next-text="下一页" />
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
      pagenumber: 1,
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
        key: 'name',
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
      },
      {
        title: '采购申请编号',
        align: 'center',
        // width: 180,
        tooltip: true,
        key: 'age'
      }, {
        title: '申请人',
        key: 'address',
        tooltip: true,
        // width: 140,
        align: 'center'
      }, {
        title: '审批通过日期',
        key: 'address',
        // width: 110,
        tooltip: true,
        align: 'center'
      }, {
        title: '已询价',
        // type: 'selection',
        key: 'address',
        tooltip: true,
        // width: 120,
        align: 'center'
      }, {
        title: '公司',
        key: 'address',
        tooltip: true,
        // width: 200,
        align: 'center'
      }, {
        title: '公司到货地址',
        key: 'address',
        tooltip: true,
        // width: 200,
        align: 'center'
      }, {
        title: '备注',
        key: 'address',
        tooltip: true,
        align: 'center'
      }, {
        title: '项目',
        key: 'address',
        tooltip: true,
        align: 'center'
      }, {
        title: '是否预付',
        key: 'address',
        tooltip: true,
        align: 'center'
      }
      ],
      data1: [
        {
          name: false,
          age: 18,
          address: '成玉军(75172)',
          date: '2016-10-03'
        },
        {
          name: true,
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        }
      ]
    }
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
