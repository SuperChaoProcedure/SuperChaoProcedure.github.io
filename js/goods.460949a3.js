(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goods"],{2374:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{separator:">"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("商品管理")]),r("el-breadcrumb-item",[t._v("商品列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"请输入内容"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getGoodsList()}},model:{value:t.queryInfo.query,callback:function(e){t.$set(t.queryInfo,"query",e)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append"},on:{click:function(e){return t.getGoodsList()}},slot:"append"},[r("i",{staticClass:"el-icon-search"})])],1)],1),r("el-col",{attrs:{span:16}},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.$router.push("/add")}}},[t._v("添加商品")])],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.goodsList,stripe:"",border:""}},[r("el-table-column",{attrs:{type:"index",label:"#",width:"180"}}),r("el-table-column",{attrs:{prop:"goods_name",label:"商品名称",width:"180"}}),r("el-table-column",{attrs:{prop:"goods_price",label:"商品价格",width:"180"}}),r("el-table-column",{attrs:{prop:"goods_weight",label:"商品重量"}}),r("el-table-column",{attrs:{prop:"upd_time",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("dateFormat")(e.row.upd_time))+" ")]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return t.delGoods(e.row)}}})]}}])})],1)],1)],1)},n=[],o=(r("99af"),r("d3b7"),r("25f0"),r("4d90"),r("96cf"),r("1da1")),s={created:function(){this.getGoodsList()},data:function(){return{goodsList:[],queryInfo:{query:"",pagenum:1,pagesize:40},total:""}},methods:{getGoodsList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("goods",{params:t.queryInfo});case 2:if(r=e.sent,200===r.meta.status){e.next=5;break}return e.abrupt("return",t.$message.error(r.meta.msg));case 5:t.goodsList=r.data.goods,t.total=r.data.total;case 7:case"end":return e.stop()}}),e)})))()},delGoods:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.delete("goods/".concat(t.goods_id));case 2:if(a=r.sent,200===a.meta.status){r.next=5;break}return r.abrupt("return",e.$message.error(a.meta.msg));case 5:e.$message.success(a.meta.msg),e.getGoodsList();case 7:case"end":return r.stop()}}),r)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}},filters:{dateFormat:function(t){var e=new Date(1e3*t),r=e.getFullYear(),a=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0"),o=e.getHours().toString().padStart(2,"0"),s=e.getMinutes().toString().padStart(2,"0"),c=e.getSeconds().toString().padStart(2,"0");return"".concat(r,"-").concat(a,"-").concat(n,"\t").concat(o,":").concat(s,":").concat(c)}}},c=s,i=r("2877"),u=Object(i["a"])(c,a,n,!1,null,"31bbeaf8",null);e["default"]=u.exports}}]);