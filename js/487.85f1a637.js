"use strict";(self["webpackChunkvue3_cart"]=self["webpackChunkvue3_cart"]||[]).push([[487],{5155:function(t,e,s){s.d(e,{A:function(){return g}});var n=s(6768),a=s(4232),o=s(5130);const i={"aria-label":"Page navigation example"},c={class:"pagination justify-content-center"},r=["onClick"];function l(t,e,s,l,d,u){return(0,n.uX)(),(0,n.CE)("nav",i,[(0,n.Lk)("ul",c,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.pages.total_pages,(t=>((0,n.uX)(),(0,n.CE)("li",{class:(0,a.C4)(["page-item",{active:t===s.pages.current_page}]),key:t},[(0,n.Lk)("button",{class:"page-link",onClick:(0,o.D$)((e=>u.updatePage(t)),["prevent"])},(0,a.v_)(t),9,r)],2)))),128))])])}var d={name:"UserPagination",props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},u=s(1241);const p=(0,u.A)(d,[["render",l]]);var g=p},6487:function(t,e,s){s.r(e),s.d(e,{default:function(){return x}});var n=s(6768),a=s(4232);const o={class:"container mt-md-5 mt-3 mb-7"},i={class:"row"},c={class:"col-md-12"},r={class:"row"},l={class:"card border-0 mb-4 position-relative position-relative"},d=["src"],u={class:"card-body p-0"},p={class:"mb-0 mt-3"},g={class:"card-text mb-0"},m={class:"d-flex justify-content-between align-items-center"},v=["onClick"],h={class:"d-flex justify-content-center"};function b(t,e,s,b,k,f){const L=(0,n.g2)("Pagination");return(0,n.uX)(),(0,n.CE)(n.FK,null,[e[1]||(e[1]=(0,n.Lk)("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"400px"}},[(0,n.Lk)("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://beardpapas.com.tw/wp-content/uploads/elementor/thumbs/Banner-pc-02-qy73u94f8x1am2ppj5o9un0zm8zub4buolrit75tfk.webp)","background-position":"center center"}}),(0,n.Lk)("h2",{class:"fw-bold"},"Lorem ipsum.")],-1)),(0,n.Lk)("div",o,[(0,n.Lk)("div",i,[(0,n.Lk)("div",c,[(0,n.Lk)("div",r,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(k.products,(t=>((0,n.uX)(),(0,n.CE)("div",{class:"col-md-4",key:t.id},[(0,n.Lk)("div",l,[(0,n.Lk)("img",{src:t.imageUrl,class:"card-img-top rounded-0",alt:"..."},null,8,d),(0,n.Lk)("div",u,[(0,n.Lk)("h4",p,[(0,n.Lk)("strong",null,(0,a.v_)(t.title),1)]),(0,n.Lk)("p",g,"NT "+(0,a.v_)(t.price),1),e[0]||(e[0]=(0,n.Lk)("p",{class:"text-muted mt-3"},null,-1)),(0,n.Lk)("div",m,[(0,n.Lk)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:e=>f.getProduct(t.id)},"查看更多",8,v)])])])])))),128))]),(0,n.Lk)("nav",h,[(0,n.bF)(L,{pages:k.pagination,onEmitPages:f.getProducts},null,8,["pages","onEmitPages"])])])])]),e[2]||(e[2]=(0,n.Fv)('<div class="bg-light py-4"><div class="container"><div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start"><p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p><div class="input-group w-md-50 mt-md-0 mt-3"><input type="text" class="form-control rounded-0" placeholder=""><div class="input-group-append"><button class="btn btn-dark rounded-0" type="button" id="search"> Lorem ipsum </button></div></div></div></div></div>',1))],64)}s(4114);var k=s(5155),f={name:"UserProduct",data(){return{products:[],product:{},pagination:[],status:{loadingItem:""}}},components:{Pagination:k.A},methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/andy1234-api/products/?page=${t}`;this.$http.get(e).then((t=>{this.products=t.data.products,this.pagination=t.data.pagination,console.log(this.pagination),console.log("products:",t)}))},getProduct(t){this.$router.push(`/product/${t}`)},addToCart(t){console.log(t);const e="https://vue3-course-api.hexschool.io/api/andy1234-api/cart";this.isLoading=!0,this.status.loadingItem=t;const s={product_id:t,qty:1};this.$http.post(e,{data:s}).then((t=>{this.status.loadingItem="",this.isLoading=!1,console.log(t)}))}},created(){this.getProducts()}},L=s(1241);const y=(0,L.A)(f,[["render",b]]);var x=y}}]);
//# sourceMappingURL=487.85f1a637.js.map