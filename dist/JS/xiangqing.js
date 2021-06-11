var box=document.querySelector(".container"),search1=location.search,dt,ar1,id;search1?(ar1=search1.split("="),"?id"==ar1[0]?(id=ar1[1],async function(){dt=await promiseAjax({url:"../php/xiangqing.php",data:"id="+id}),dt=eval("("+dt+")");var str=`
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
            `;box.innerHTML=str}()):(alert("参数有误"),location.href="./shangdian.html")):(alert("非法进入，请选择商品"),location.href="./shangdian.html"),box.onclick=function(e){var e=e||window.event,target=e.target||e.srcElement,cartList4,cartList4,bool;"加入购物车"==target.innerHTML&&(cartList4=localStorage.getItem("cartList4")||[],0<cartList4.length?(cartList4=eval("("+cartList4+")"),bool=!0,cartList4.forEach(t=>{dt.id==t.id&&(bool=!1,t.cart_number++,localStorage.setItem("cartList4",JSON.stringify(cartList4)))}),bool&&(dt.cart_number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4)))):(dt.cart_number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4))))};