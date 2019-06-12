# 渲染模版数据

``` javascript
//合同的数据结构
__data:{
	list:[
		{
		name:"上海燃气公司",（	"开户名称"）
		user:"方刚",（	"销售经理"）
		date:"2019-03-04",（	"签订日期"）
		received:"",（	"已收款"）
		totalMoney: "3000000",（	"合同总金额"）
		invoiced:"" ,（	"已开票"）
		contractnumber:"2019310162-2"（	"合同号"）

		 },
		{
		name:"上海燃气公司",（	"开户名称"）
		user:"方刚",（	"销售经理"）
		date:"2019-03-04",（	"签订日期"）
		received:"",（	"已收款"）
		totalMoney: "3000000",（	"合同总金额"）
		invoiced:"" ,（	"已开票"）
		contractnumber:"2019310162-2"（	"合同号"）

		 },
	]
} 
// 部门同事工作情况
__data:{
	list:[
		{
		name:"王宇静",（	"同事"）
        detail: [
	    { name: "", value: "" },
	    { name: "", value: "" }
        ]
        },
        {
		name:"王宇静",（	"同事"）
        detail: [
	    { name: "", value: "" },
	    { name: "", value: "" }
        ]
		},
	]
} 
// 我的工作情况
__data:{
	list:[
	{
	detail: [
		{ name: "", value: "" },
		{ name: "", value: "" }
	]
}
	]
} 
// 		know:"0",（	"知识分享"）
// 		train:"0",（"培训参与"）
// 		cooperation:"",（"协作"）
// 		meeting:"",（	"会议"）
//      newcustomers:"",("新增客户"）
//      rollcustomers:"",("滚动客户"）
//       task:"",("任务"）
//      project:""(项目)
//我的流程情况
__data:{
	list:[
		{
			simpleTitle:"泛微请假流程-张宇(sh)-2019-03-11(5980093)",
			simpleDesc:"张宇"
         date:"2019-03-11"
         url:''
		}
	]
}
//我的待办流程情况
__data:{
	list:[
		{
			simpleTitle:"泛微请假流程-张宇(sh)-2019-03-11(5980093)",
			simpleDesc:"张宇&nbsp;&nbsp;&nbsp;&nbsp;2019-03-11"
         url:'',
         isnew:1
		}
	]
}
//我的考勤报表
__data:[
title:"我的考勤报表"
	detail:[
  {name:"应出勤天数",value:"10"},
  {name:"已出勤天数",value:"10"}
	]
}
]
//查看考勤报表
 __data:{
 list:[
	 {
		 name:"考勤基本情况",
		 detail:[
			 {name:'应出勤',value:'0.00'},
			 {name:'工作时长(小时)',value:'0.00'}
            //  迟到 早退 旷工 漏签
		 ]
	 },
	{
		name:"加班情况",
		detail:[
			{name:'加班',value:'0.00'},
		]
	}
	 {
		name:"请假情况",
		detail:[
			{name:'事假',value:'0.00'},
            {name:'病假',value:'0.00'} 
            ...
		]

	},
	{
		name:"其他",
		detail:[
			{name:'出差(天)',value:'0.00'},
            {name:'公出(天)',value:'0.00'}
            ...
		]
	}
 ]
}
//查看假期情况
 __data:{
 list:[
	 {
		 name:"带薪病假信息",
		 detail:[
			 {name:'上一年剩余天数',value:'0.00'},
			 {name:'上一年剩余天数',value:'0.00'}

		 ]
	 },
	 {
		name:"调休",
		detail:[
			{name:'上一年剩余天数',value:'0.00'},
			{name:'上一年剩余天数',value:'0.00'}

		]

	},
	{
		name:"年假信息",
		detail:[
			{name:'上一年剩余天数',value:'0.00'},
			{name:'上一年剩余天数',value:'0.00'}
		]
	}
 ]
}
//客户信息
__data:{
	list:[
		{
			simpleTitle:'中国移动国际有限公司',
			description:'客户经理:杨国韵 状态成功 xxxx',
			url:''
		}
	]
}
//客户地址
__data:{
	list:[
			simpleTitle:'中国移动国际有限公司',
			description:'客户经理:杨国韵 状态成功 xxxx',
			address:'复兴东路2号复兴商务大厦',
		},
	]
key:''
}

//应用
__data:{
	list:[
{
			title:'个人流程',
			url:'',
		},
	]
}

// 导航地图数据结构
// 导航到联航路地铁站//导航到复星集团
//{
// 	"qqq":qqq,
// 	"address":"联航路地铁站",
// 	"city":"",
// 	"count":"19",
// 	list:[
// 	{
// 		"address":"8号线",
// 		"lng":"121.510594",
// 		"name":"联航路(地铁站)",
// 		"lat":"31.073567",
// 	},
// 	{
// 		"address":"8号线",
// 		"lng":"121.510594",
// 		"name":"联航路地铁站2号口",
// 		"lat":"31.073567",
// 	},
//    ]
// }

```