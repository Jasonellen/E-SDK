# Seat

数据结构
```js
    item.__data = {
        dataType:'Seat', //位置 业绩情况
        answer:'为您找到${list.length}条数据,以下是1-20条',
        list:[{
           title:'xx',
           items:[
               {name:'xxx',value:'xxx},
               {name:'xxx',value:'xxx},
           ]
        }]
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
