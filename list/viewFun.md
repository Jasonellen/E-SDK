# 渲染模版方法
调用全局方法，将数据渲染到小e
```javascript
//不需要返回list的模版 例如签到成功 之类的
window.viewScheduleData(item)
// 日程列表
window.ViewScheduleList(item)
// 人员列表
window.ViewUserList(item)
// 微博列表
window.ViewBlog(item)
// 合同列表
window.ViewContract(item)

// 部门同事工作情况列表
window.ViewWorksituation(item)
// 我的工作情况列表
window.ViewMyWorksituation(item)
// 我的查待办审批
window.ViewApproval(item)
// 我的考勤报表
window.ViewAttendancereport(item)
// 打开应用数据
window.ViewopenApp(item)
// 打开内部留言url
window.openLeaveMessage(item)
// 客户信息列表
window.ViewCustomerList(item)
```