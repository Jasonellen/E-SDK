# app需要自己实现的方法!
开发者自行在全局定义app对象,

**非必须，如果提供则执行**
```js 
//小e提供了初始化方法，即如果 全局配置了 `App.Init()` 方法，那么小e 初始化完成后会立即调用 `App.Init()` 方法
App.Init()

//接口调用设定返回的`response`数据为`error:"002"` 或者`errorCode:"005"`设定为用户信息过期，此时会触发`App.relogin()` 方法
App.relogin()

// 小e页面 切到后台或者前台会触发的方法
App.visibilitychange()
```

**必须提供的方法**
```javascript

//开始录音   传入波纹大小和录音结果		
App.continueSpeech({'changeVoice': (string)=>{
	//持续改变波纹的回调
},'continueSpeechend': ({result:'你好'})=>{
	//录音结束的回调
},'onContinueSpeech': ({result:'你好啊！'})=>{
	//持续录音的回调
}})
//停止录音
App.stopVoive()

```


