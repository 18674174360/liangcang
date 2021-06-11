var row=document.querySelector(".row"),pagination=document.querySelector(".pagination");!async function(){var arr=await promiseAjax({url:"../php/list.php"}),arr=eval("("+arr+")"),o1={pageInfo:{pagenum:1,pagesize:10,totalsize:arr.length,totalpage:Math.ceil(arr.length/10)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,a=>{var a=arr.slice(8*(a-1),8*a),t="";a.forEach(a=>{t+=`
            <div class="col-lg-3 col-md-4">
                <div class="thumbnail">
                <ol class="breadcrumb title1">
                <li><a href="#">良仓</a></li>
                <li><a href="#">商品</a></li>
                <li class="active">${a.zishang}</li>
                </ol>
                <img src="${a.tupian}" >
                <div class="caption">
                    <h4 class="title1">${a.zishang}</h4>
                    <p style="color:red;">￥${a.jiage}</p>
                    <p><a href="#" class="btn btn-primary" role="button" style="margin-bottom:20px;width:200px;">进入购物车</a> <a href="./xqy.html?id=${a.id}" class="btn btn-default" role="button" style="width:200px;">查看商品详情</a></p>
                </div>
                </div>
            </div>
            `}),row.innerHTML=t})}();