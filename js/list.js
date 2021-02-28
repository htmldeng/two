"use strict";var getData=function(){var n=_asyncToGenerator(regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,pAjax({url:"../php/getData.php",data:{start:defaultInfo.num,len:defaultInfo.len}});case 2:t=n.sent,renderHtml(JSON.parse(t).list);case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}();function _asyncToGenerator(n){return function(){var l=n.apply(this,arguments);return new Promise(function(i,o){return function t(n,e){try{var a=l[n](e),r=a.value}catch(n){return void o(n)}if(!a.done)return Promise.resolve(r).then(function(n){t("next",n)},function(n){t("throw",n)});i(r)}("next")})}}var list=document.querySelector(".list"),page=document.querySelector(".page"),defaultInfo={len:20,num:1};function renderHtml(n){var e="";n.forEach(function(n,t){e+=' <li class="list-item">\n        <div class="title">\n            <ol class="breadcrumb">\n                <li><a href="#">'+n.cat_one_id+'</a></li>\n                <li><a href="#">'+n.cat_two_id+'</a></li>\n                <li class="active">'+n.cat_three_id+'</li>\n            </ol>\n        </div>\n        <div class="row">\n            <div>\n                <div class="thumbnail">\n                    <img src="'+n.goods_big_logo+'"\n                        alt="...">\n                    <div class="caption">\n                        <h3>'+n.goods_name+'</h3>\n                        <div class="price">\n                            <i class="glyphicon glyphicon-yen"></i>\n                            <span>'+n.goods_price+'</span>\n                        </div>\n                        <p>\n                            <a href="./car.html" class="btn btn-primary" role="button">查看购物车</a>\n                            <a href="./detail.html?id='+n.goods_id+'" class="btn btn-info" role="button">查看商品详情</a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </li>'}),list.innerHTML=e}pAjax({url:"../php/getData.php",data:{start:defaultInfo.num,len:defaultInfo.len}}).then(function(n){n=JSON.parse(n),new Pagination(page,{pageInfo:{pagenum:1,pagesize:defaultInfo.len,total:n.total,totalpage:Math.ceil(n.total/defaultInfo.len)},textInfo:{first:"首页",prev:"上一页",list:"",next:"下一页",last:"最后一页"},change:function(n){defaultInfo.num=n,getData(),scrollTo(0,0)}})});