# WorkflowQuery

数据结构
```js
    item.__data = {
        dataType:'WorkflowQuery', //最流行的文档 播报新闻 查一下周鹏飞的项目 查一下报销标 
        anser:'为您找到${list.length}条数据,以下是前50条', 
        list:[
            {
                        id = '',
                        schema = 'NEWS',//NEWS DOC 最流行的文档 播报新闻
                        simpleTitle = '',
                        simpleDesc = '',
                    },
            ...
        ]
    }
```
使用方法
```js
    Eobj.showComponent(item)
```
::: tip 展示效果
<hr/>
<img :src="$withBase('/img/person.png')" />
<hr/>
:::
