"use strict";(self["webpackChunkvue3_cart"]=self["webpackChunkvue3_cart"]||[]).push([[108],{3771:function(t,s,a){a.d(s,{A:function(){return g}});var e=a(6768),i=a(4232),n=a(5130);const o={"aria-label":"Page navigation example"},l={class:"pagination justify-content-center"},c=["onClick"];function r(t,s,a,r,d,u){return(0,e.uX)(),(0,e.CE)("nav",o,[(0,e.Lk)("ul",l,[s[0]||(s[0]=(0,e.Lk)("li",{class:"page-item"},[(0,e.Lk)("a",{class:"page-link",href:"#","aria-label":"Previous"},[(0,e.Lk)("span",{"aria-hidden":"true"},"«")])],-1)),((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(a.pages.total_pages,(t=>((0,e.uX)(),(0,e.CE)("li",{class:(0,i.C4)(["page-item",{active:t===a.pages.current_page}]),key:t},[(0,e.Lk)("button",{class:"page-link",onClick:(0,n.D$)((s=>u.updatePage(t)),["prevent"])},(0,i.v_)(t),9,c)],2)))),128)),s[1]||(s[1]=(0,e.Lk)("li",{class:"page-item"},[(0,e.Lk)("a",{class:"page-link",href:"#","aria-label":"Next"},[(0,e.Lk)("span",{"aria-hidden":"true"},"»")])],-1))])])}var d={name:"UserPagination",props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},u=a(1241);const p=(0,u.A)(d,[["render",r]]);var g=p},7108:function(t,s,a){a.r(s),a.d(s,{default:function(){return w}});var e=a(6768),i=a(4232);const n={class:"container mt-md-5 mt-3 mb-7"},o={class:"row"},l={class:"col-md-8"},c={class:"row"},r={class:"card border-0 mb-4 position-relative position-relative"},d=["src"],u={class:"card-body p-0"},p={class:"mb-0 mt-3"},g={href:"#"},m={class:"card-text mb-0"},h={class:"d-flex justify-content-between align-items-center"},k=["onClick"],v=["disabled","onClick"],b={key:0,class:"spinner-grow text-light spinner-grow-sm",role:"status"},L={class:"d-flex justify-content-center"};function f(t,s,a,f,y,x){const C=(0,e.g2)("Pagination");return(0,e.uX)(),(0,e.CE)(e.FK,null,[s[5]||(s[5]=(0,e.Lk)("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"400px"}},[(0,e.Lk)("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)","background-position":"center center",opacity:"0.1"}}),(0,e.Lk)("h2",{class:"fw-bold"},"Lorem ipsum.")],-1)),(0,e.Lk)("div",n,[(0,e.Lk)("div",o,[(0,e.Lk)("div",l,[(0,e.Lk)("div",c,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(y.products,(t=>((0,e.uX)(),(0,e.CE)("div",{class:"col-md-6",key:t.id},[(0,e.Lk)("div",r,[(0,e.Lk)("img",{src:t.imageUrl,class:"card-img-top rounded-0",alt:"..."},null,8,d),s[4]||(s[4]=(0,e.Lk)("a",{href:"#",class:"text-dark"},[(0,e.Lk)("i",{class:"far fa-heart position-absolute",style:{right:"16px",top:"16px"}})],-1)),(0,e.Lk)("div",u,[(0,e.Lk)("h4",p,[(0,e.Lk)("a",g,(0,i.v_)(t.title),1)]),(0,e.Lk)("p",m,[(0,e.eW)("NT "+(0,i.v_)(t.price),1),s[0]||(s[0]=(0,e.Lk)("span",{class:"text-muted"},[(0,e.Lk)("del",null,"NT$1,200")],-1))]),s[3]||(s[3]=(0,e.Lk)("p",{class:"text-muted mt-3"},null,-1)),(0,e.Lk)("div",h,[(0,e.Lk)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:s=>x.getProduct(t.id)},"查看更多",8,k),(0,e.Lk)("button",{type:"button",class:"btn btn-primary btn-sm",disabled:this.status.loadingItem===t.id,onClick:s=>x.addToCart(t.id)},[this.status.loadingItem===t.id?((0,e.uX)(),(0,e.CE)("div",b,s[1]||(s[1]=[(0,e.Lk)("span",{class:"visually-hidden"},"123",-1)]))):(0,e.Q3)("",!0),s[2]||(s[2]=(0,e.eW)(" 加入購物車"))],8,v)])])])])))),128))]),(0,e.Lk)("nav",L,[(0,e.bF)(C,{pages:y.pagination,onEmitPages:x.getProducts},null,8,["pages","onEmitPages"])])])])]),s[6]||(s[6]=(0,e.Fv)('<div class="bg-light py-4"><div class="container"><div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start"><p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p><div class="input-group w-md-50 mt-md-0 mt-3"><input type="text" class="form-control rounded-0" placeholder=""><div class="input-group-append"><button class="btn btn-dark rounded-0" type="button" id="search"> Lorem ipsum </button></div></div></div></div></div>',1))],64)}a(4114);var y=a(3771),x={name:"UserProduct",data(){return{products:[],product:{},pagination:[],status:{loadingItem:""}}},components:{Pagination:y.A},methods:{getProducts(t=1){const s=`https://vue3-course-api.hexschool.io/api/andy1234-api/products/?page=${t}`;this.$http.get(s).then((t=>{this.products=t.data.products,this.pagination=t.data.pagination,console.log(this.pagination),console.log("products:",t)}))},getProduct(t){this.$router.push(`/product/${t}`)},addToCart(t){console.log(t);const s="https://vue3-course-api.hexschool.io/api/andy1234-api/cart";this.isLoading=!0,this.status.loadingItem=t;const a={product_id:t,qty:1};this.$http.post(s,{data:a}).then((t=>{this.status.loadingItem="",this.isLoading=!1,console.log(t)}))}},created(){this.getProducts()}},C=a(1241);const P=(0,C.A)(x,[["render",f]]);var w=P}}]);
//# sourceMappingURL=108.e32fb04c.js.map