import Mock from 'mockjs'
const swipes = [{ 'array|20-40': [{
  'state|1-2': true,
  'sqnumber|+1': 2344,
  'type|1': ['固定资产', '低值易耗'], // 中文名称
  'sqdate': '@date("yyyy-MM-dd")', // 日期
  'asked|1-2': true,
  'sqman': '@cname',
  'cbzx|1': ['南通', '软通智慧'],
  'gc|1': ['南通软通', '西安软通'],
  'gcdhdz|1': ['南通软通', '西安软通'],
  'xm|1': ['考勤', '评分'],
  'pay|1': ['是', '否'],
  'passdate': '@date("yyyy-MM-dd")'
}
] }]
const receive = [{ 'array|20-40': [{
  'statue|1-2': true,
  purchaseDocumentNumber: /[a-zA-Z]{3}[0-9]{7}/,
  documentType: '采购订单',
  purchaseType: '固定资产',
  notifyTheSupplier: '@boolean',
  supplier: '北京旭日中升电子科技有限公司',
  deliveryAddress: '武汉',
  documentDate: '@date',
  documentAmount: /[1-9]{1}[0-9]{3,4}/,
  company: '南通软通动力网络技术有限公司'
}
] }]
Mock.mock('/swipes', swipes)
Mock.mock('/receive', receive)
