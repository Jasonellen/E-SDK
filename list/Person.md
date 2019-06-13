# Person

数据结构
```js
    item.__data = {
        dataType:'Person', //选择人员模板进行渲染
        list:[{
            id:1, //人员id
            schema:'RSC', //点击跳转的类型  参见 getMapData
            URL:'xx.png', //头像
            simpleTitle:'姓名',
            SUBCOMP:'所属直接部门',
            JOBTITLENAME:'职位',
            DEPT:'所属大部门',
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
