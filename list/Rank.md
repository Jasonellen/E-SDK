# Rank

数据结构
```js
    item.__data = {
        dataType:'Rank', //业绩排名
        anser:'',
        list:[
            {
                hrmid:'555',
                headimg:'',
                messageurl:'',
                num:'1',
                url:'',
                deptname:'上海EBU七部销售部',
                lastname:'朱xx'
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
