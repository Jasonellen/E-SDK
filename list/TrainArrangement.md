# TrainArrangement

数据结构
```js
    item.__data = {
        dataType:'TrainArrangement', //最近的培训安排
        anser:'为您找到${list.length}条数据,以下是前50条',
        list:[
            {
             img:'x',
             linkURL:'xxx'
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
