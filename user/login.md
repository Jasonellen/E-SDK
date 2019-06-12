# 设置用户信息
  
  用户信息需要再小e后台词典配置，然后调用`SDK`暴露的全局方法存入.
  ::: tip 用户信息
  如果是项目加载就需要调用的方法，需要指定在小e项目初始化完成后，即 `Eobj.ready(function(){})` 方法内调用，例如初始化后立即调用获取用户信息的方法：
  :::
  ```js
    Eobj.ready(function(){
       Eobj.setUser({
            appId:data.appId, //应用id
            uid:data.uid, //用户 userId
            sign:data.sign, //签名
            timestamp:data.timestamp //时间戳
       })
    })
  ```
### 初始化项目
  小e提供了初始化方法，即如果 全局配置了 `App.Init()` 方法，那么小e 初始化完成后会立即调用 `App.Init()` 方法，此时不需要 在 `Eobj.ready` 中执行

### 小提示
  **接口调用设定返回的`response`数据为`error:"002"` 或者`errorCode:"005"`设定为用户信息过期，此时会触发`App.relogin()` 方法**