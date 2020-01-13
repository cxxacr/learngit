<template>
  <div id="submit">
      <ul class="mid">
            <li class="li"><small>采购申请编号 : </small>
                <Input v-model="input_value" style="width: 150px" />
            </li>
            <li class="li"><small>协议供应商 : </small>
                <span class="s s1"><input type="text" class="s-i" readonly="readonly" v-model="s1">
                <i class="icons search"></i></span>
            </li>
            <li class="li"><small>成本中心 : </small>
                <span class="s s1"><input type="text" class="s-i" readonly="readonly" v-model="s1">
                <i class="icons search"></i></span>
            </li>
            <li class="li"><small>申请日期 : </small>
                <DatePicker type="date" placeholder="请选择" style="width: 150px"></DatePicker>
                TO
                <DatePicker type="date" placeholder="请选择" style="width: 150px"></DatePicker>
            </li>
            <li class="li"><small>项目 : </small>
                <span class="s s1"><input type="text" class="s-i" readonly="readonly" v-model="s1">
                <i class="icons search"></i></span>
            </li>
            <li class="li"><Button type="error">查询</Button></li>
            <li class="li"><Button type="error">新增</Button></li>
      </ul>
      <Table border ref="selection" :loading="loading" :columns="columns1" :data="data1" :disabled-hover='isHover'></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
        title: '操作',
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
      }, {
        title: '采购类型',
        key: 'address',
        tooltip: true,
        align: 'center'
      }, {
        title: '单据日期',
        key: 'address',
        tooltip: true,
        // width: 200,
        align: 'center'
      }, {
        title: '协议供应商',
        key: 'address',
        tooltip: true,
        // width: 140,
        align: 'center'
      }, {
        title: '成本中心',
        align: 'center',
        // width: 180,
        tooltip: true,
        key: 'age'
      }, {
        title: '公司',
        key: 'address',
        // width: 110,
        tooltip: true,
        align: 'center'
      }, {
        title: '项目',
        key: 'address',
        // width: 110,
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
        }
      ]

    }
  }

}
</script>

<style lang="scss" scoped>
.s1{
    width: 130px;
}
</style>
