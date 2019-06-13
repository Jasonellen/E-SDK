# TechnologySatisfaction

数据结构
```js
    item.__data = {
        dataType:'TechnologySatisfaction', //技术满意度
        anser:'为您找到${list.length}条数据,以下是前50条',
        list:[
            {
                submitter:'客户 xx',
                hrmids: '8999',
                praiseCount:'17',
                messageurl:'',
                lastnames:'xxx',
                content:'xxxx',
                deptname:'EBU技术中心 表单建模组'
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
