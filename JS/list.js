//获取操作对象
var row=document.querySelector(".row")
var pagination=document.querySelector(".pagination");

//通过自执行函数来获取数据
(async function(){
    var arr = await promiseAjax({
        url:'../php/list.php',
    })
    //把字符串转为对象
    arr=eval('('+arr+')');
    //配置传入的对象信息
    var o1={
        pageInfo:{
            pagenum:1,
            pagesize:10,
            totalsize:arr.length,
            totalpage:Math.ceil(arr.length/10)
        },
        textInfo:{
            first:"首页",
            prev:"上一页",
            next:"下一页",
            last:"尾页",
        }
    }
    //实例化分页器对象
    new Pagination(pagination,o1,(m)=>{
        //通过页码，来进行分页数据显示 
        var arr2=arr.slice((m-1)*8,m*8)
        //创建字符串，拼接所有内容
        var str=''
        //遍历数组中所有数据
        arr2.forEach(item=>{
            str+=`
            <div class="col-lg-3 col-md-4">
                <div class="thumbnail">
                <ol class="breadcrumb title1">
                <li><a href="#">良仓</a></li>
                <li><a href="#">商品</a></li>
                <li class="active">${item.zishang}</li>
                </ol>
                <img src="${item.tupian}" >
                <div class="caption">
                    <h4 class="title1">${item.zishang}</h4>
                    <p style="color:red;">￥${item.jiage}</p>
                    <p><a href="#" class="btn btn-primary" role="button" style="margin-bottom:20px;width:200px;">进入购物车</a> <a href="./xqy.html?id=${item.id}" class="btn btn-default" role="button" style="width:200px;">查看商品详情</a></p>
                </div>
                </div>
            </div>
            `
        })
        //把拼接好的内容渲染到页面中
        row.innerHTML=str
    })
})()
