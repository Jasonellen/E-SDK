# setMapData

::: tip 说明
设置 文档/流程等跳转接口数据录入
:::

```js
    Eobj.setMapData({
        pageMap:{
            "RSC":{  //人员
                url:"/mobile/xx/{ID}"  //变量以{ID}形式替换
            },
            "DOC":{ //文档
                url:"/mobile/xx/{ID}"
            }
        }
    })
```
