<template>
    <div id='check'>
        <ul class='tit'>
          <li><a class="active">验收申请单</a></li>
        </ul>
        <ul class="mid">
            <li class="li"><small>成本中心 : </small>
                <span class="s s2"><input type="text" class="s-i" readonly="readonly" v-model="s1">
                <i class="icons search"></i></span>
            </li>
            <li class="li"><small>供应商 : </small>
                <span class="s s2"><input type="text" class="s-i" readonly="readonly" v-model="s1">
                <i class="icons search"></i></span>
            </li>
            <li class="li"><small>项目 : </small>
                <span class="s s2"><input type="text" class="s-i" readonly="readonly" v-model="s1">
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
        <Table border ref="selection" :columns="columns1" :data="data1" :disabled-hover='isHover'></Table>
        <p class="finally"><span>总共{{data1.length}}条记录，共{{pagenumber}}页</span>
          <Page :total="data1.length" show-elevator prev-text="上一页" next-text="下一页" />
        </p>
        <ul class="final">
          <li><Button type="error">提交验收申请</Button></li>
        </ul>
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
      }, {
        title: '单据日期',
        key: 'address',
        tooltip: true,
        align: 'center'
      }, {
        title: '供应商',
        key: 'address',
        tooltip: true,
        // width: 200,
        align: 'center'
      }, {
        title: '成本中心',
        key: 'address',
        tooltip: true,
        // width: 140,
        align: 'center'
      }, {
        title: '公司',
        align: 'center',
        // width: 180,
        tooltip: true,
        key: 'age'
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
p{
  padding-left: 20px;
  margin-bottom: 25px;
  span{
    margin-right: 20px;
    margin-left: 5px;
  }
}
.s2{
    width:210px;
}
#check{
    margin: 0 10px;
}
</style>
