import Mock from 'mockjs'
const swipes = [{ 'array|20-40': [{
  'boolean|1-2': true,
  'sqnumber|+1': 2344,
  'type|1': ['固定资产', '低值易耗'], // 中文名称
  'sqdate': '@date("yyyy-MM-dd")', // 日期
  'sqman': '@cname',
  'cbzx|1': ['南通', '软通智慧'],
  'gs|1': ['南通软通', '西安软通'],
  'xm|1': ['考勤', '评分']
}
] }]
Mock.mock('/swipes', swipes)
