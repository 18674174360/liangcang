//获取操作对象
var box=document.querySelector(".container")
//获取地址栏中的参数信息
var search1=location.search
var dt
//判断当前地址栏中是否有参数
if(search1){
    //分割字符串
    var ar1=search1.split("=")
    //判断当前参数是否为id
    if(ar1[0]=="?id"){
        //获取当前参数的值
        var id=ar1[1];
        (async function(){
            //发送请求，并获取响应结果
            dt=await promiseAjax({
                url:'../php/xiangqing.php',
                data:'id='+id
            })
            //把字符串转为对象
            dt=eval('('+dt+')')
            //把数据渲染到页面中
            var str=`
            <h2>这个是一个详情页 <a href="./shangdian.html" class="btn btn-success">返回列表页</a></h2>
            <div class="panel panel-default">
                <div class="panel-heading">商品详细</div>

                <ol class="breadcrumb title1">
                <li><a href="#">良仓</a></li>
                <li><a href="#">商品</a></li>
                <li class="active">...</li>
                
                </ol>
                <div class="panel-body">
                    <div class="media">
                        <div class="media-left">
                          <a href="#">
                            <img class="media-object" src="${dt.tupian}" alt="..." width="200" height="200">
                          </a>
                        </div>
                        <div class="media-body">
                          <h2 class="media-heading">${dt.zishang}</h2>
                          <h2>￥${dt.zixia}</h2>
                          <div class="btn-group" role="group" aria-label="...">
                            <button type="button" class="btn btn-default">一</button>
                            <button type="button" class="btn btn-default">二</button>
                            <button type="button" class="btn btn-default">三</button>
                            <button type="button" class="btn btn-default">四</button>
                            <button type="button" class="btn btn-default">五</button>
                          </div>
                          <br/> <br/>
                          <p><a href="./cart.html" class="btn btn-primary" role="button">立即购买</a> <a href="javascript:;" class="btn btn-default" role="button">加入购物车</a></p>
                        </div>
                        
                    </div>
                </div>
            </div>
            `
            box.innerHTML=str
        })()
    }else{
        alert("参数有误")
        location.href="./shangdian.html"
    }
}else{
    alert("非法进入，请选择商品")
    location.href="./shangdian.html"
}

//给大盒子对象绑定点击事件
box.onclick=function(e){
    //事件对象兼容
    var e = e || window.event
    //事件目标的兼容
    var target=e.target || e.srcElement
    //判断当前点击的是否为加入购物车
    if(target.innerHTML=="加入购物车"){
        //获取localStorage中cartList4
        var cartList4=localStorage.getItem("cartList4")||[]
        //判断当前cartList4是否存在
        if(cartList4.length>0){
            //把cartList4转为数组对象
            cartList4=eval('('+cartList4+')')
            var bool=true //是否有相同的商品
            //遍历数组
            cartList4.forEach(item=>{
                //判断当前遍历的商品是否跟添加的商品相同
                if(dt.id==item.id){
                    bool=false
                    //让当前的商品数量加1
                    item.cart_number++
                    //重新给localStorage设置键值对
                    localStorage.setItem("cartList4",JSON.stringify(cartList4))
                }
            })
            //判断bool是否为true
            if(bool){
                 //修改dt对象中的数量
                dt.cart_number=1
                //把当前商品追加到cartList4中
                cartList4.push(dt)
                //重新给localStorage设置键值对
                localStorage.setItem("cartList4",JSON.stringify(cartList4))
            }
        }else{
            //修改dt对象中的数量
            dt.cart_number=1
            //把当前商品追加到cartList4中
            cartList4.push(dt)
            //重新给localStorage设置键值对
            localStorage.setItem("cartList4",JSON.stringify(cartList4))
        }
    }
}