"use strict";(self["webpackChunkvue3_cart"]=self["webpackChunkvue3_cart"]||[]).push([[853],{3771:function(t,e,l){l.d(e,{A:function(){return k}});var a=l(6768),s=l(4232),r=l(5130);const d={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},i=["onClick"];function o(t,e,l,o,u,c){return(0,a.uX)(),(0,a.CE)("nav",d,[(0,a.Lk)("ul",n,[e[0]||(e[0]=(0,a.Lk)("li",{class:"page-item"},[(0,a.Lk)("a",{class:"page-link",href:"#","aria-label":"Previous"},[(0,a.Lk)("span",{"aria-hidden":"true"},"«")])],-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.pages.total_pages,(t=>((0,a.uX)(),(0,a.CE)("li",{class:(0,s.C4)(["page-item",{active:t===l.pages.current_page}]),key:t},[(0,a.Lk)("button",{class:"page-link",onClick:(0,r.D$)((e=>c.updatePage(t)),["prevent"])},(0,s.v_)(t),9,i)],2)))),128)),e[1]||(e[1]=(0,a.Lk)("li",{class:"page-item"},[(0,a.Lk)("a",{class:"page-link",href:"#","aria-label":"Next"},[(0,a.Lk)("span",{"aria-hidden":"true"},"»")])],-1))])])}var u={name:"UserPagination",props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},c=l(1241);const p=(0,c.A)(u,[["render",o]]);var k=p},853:function(t,e,l){l.r(e),l.d(e,{default:function(){return R}});var a=l(6768),s=l(4232),r=l(5130);const d={class:"table mt-4"},n=["textContent"],i={class:"list-unstyled"},o={class:"text-right"},u={class:"form-check form-switch"},c=["id","onUpdate:modelValue","onChange"],p=["for"],k={key:0},h={key:1},L={class:"btn-group"},m=["onClick"],g=["onClick"];function b(t,e,l,b,v,y){const C=(0,a.g2)("Loading"),f=(0,a.g2)("OrderModal"),O=(0,a.g2)("DelModal"),_=(0,a.g2)("Pagination");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(C,{active:v.isLoading},null,8,["active"]),(0,a.Lk)("table",d,[e[0]||(e[0]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"購買時間"),(0,a.Lk)("th",null,"Email"),(0,a.Lk)("th",null,"購買款項"),(0,a.Lk)("th",null,"應付金額"),(0,a.Lk)("th",null,"是否付款"),(0,a.Lk)("th",null,"編輯")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(v.orders,((e,l)=>((0,a.uX)(),(0,a.CE)(a.FK,{key:l},[v.orders.length?((0,a.uX)(),(0,a.CE)("tr",{key:0,class:(0,s.C4)({"text-secondary":!e.is_paid})},[(0,a.Lk)("td",null,(0,s.v_)(t.$filters.date(e.create_at)),1),(0,a.Lk)("td",null,[e.user?((0,a.uX)(),(0,a.CE)("span",{key:0,textContent:(0,s.v_)(e.user.email)},null,8,n)):(0,a.Q3)("",!0)]),(0,a.Lk)("td",null,[(0,a.Lk)("ul",i,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.products,((t,e)=>((0,a.uX)(),(0,a.CE)("li",{key:e},(0,s.v_)(t.product.title)+" 數量："+(0,s.v_)(t.qty),1)))),128))])]),(0,a.Lk)("td",o,(0,s.v_)(e.total),1),(0,a.Lk)("td",null,[(0,a.Lk)("div",u,[(0,a.bo)((0,a.Lk)("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${e.id}`,"onUpdate:modelValue":t=>e.is_paid=t,onChange:t=>y.updatePaid(e)},null,40,c),[[r.lH,e.is_paid]]),(0,a.Lk)("label",{class:"form-check-label",for:`paidSwitch${e.id}`},[e.is_paid?((0,a.uX)(),(0,a.CE)("span",k,"已付款")):((0,a.uX)(),(0,a.CE)("span",h,"未付款"))],8,p)])]),(0,a.Lk)("td",null,[(0,a.Lk)("div",L,[(0,a.Lk)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>y.openModal(!1,e)},"檢視",8,m),(0,a.Lk)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>y.openDelOrderModal(e)},"刪除",8,g)])])],2)):(0,a.Q3)("",!0)],64)))),128))])]),(0,a.bF)(f,{order:v.tempOrder,ref:"orderModal",onUpdatePaid:y.updatePaid},null,8,["order","onUpdatePaid"]),(0,a.bF)(O,{item:v.tempOrder,ref:"delModal",onDelItem:y.delOrder},null,8,["item","onDelItem"]),(0,a.bF)(_,{pages:v.pagination,onEmitPages:y.getOrders},null,8,["pages","onEmitPages"])])}var v=l(1924);const y={class:"modal fade",id:"productModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},C={class:"modal-dialog modal-xl",role:"document"},f={class:"modal-content border-0"},O={class:"modal-body"},_={class:"row"},x={class:"col-md-4"},E={class:"table"},X={key:0},P={class:"col-md-8"},M={class:"table"},$={key:0},w={key:1},F={key:0,class:"text-success"},A={key:1,class:"text-muted"},D={key:0,class:"text-success"},U={key:1,class:"text-muted"},I={class:"table"},K=["src"],j={class:"text-end"},N={class:"modal-footer"};function Q(t,e,l,r,d,n){return(0,a.uX)(),(0,a.CE)("div",y,[(0,a.Lk)("div",C,[(0,a.Lk)("div",f,[e[16]||(e[16]=(0,a.Lk)("div",{class:"modal-header bg-dark text-white"},[(0,a.Lk)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a.Lk)("span",null,"訂單細節")]),(0,a.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),(0,a.Lk)("div",O,[(0,a.Lk)("div",_,[(0,a.Lk)("div",x,[e[5]||(e[5]=(0,a.Lk)("h3",null,"用戶資訊",-1)),(0,a.Lk)("table",E,[d.tempOrder.user?((0,a.uX)(),(0,a.CE)("tbody",X,[(0,a.Lk)("tr",null,[e[1]||(e[1]=(0,a.Lk)("th",{style:{width:"100px"}},"姓名",-1)),(0,a.Lk)("td",null,(0,s.v_)(d.tempOrder.user.name),1)]),(0,a.Lk)("tr",null,[e[2]||(e[2]=(0,a.Lk)("th",null,"Email",-1)),(0,a.Lk)("td",null,(0,s.v_)(d.tempOrder.user.email),1)]),(0,a.Lk)("tr",null,[e[3]||(e[3]=(0,a.Lk)("th",null,"電話",-1)),(0,a.Lk)("td",null,(0,s.v_)(d.tempOrder.user.tel),1)]),(0,a.Lk)("tr",null,[e[4]||(e[4]=(0,a.Lk)("th",null,"地址",-1)),(0,a.Lk)("td",null,(0,s.v_)(d.tempOrder.user.address),1)])])):(0,a.Q3)("",!0)])]),(0,a.Lk)("div",P,[e[13]||(e[13]=(0,a.Lk)("h3",null,"訂單細節",-1)),(0,a.Lk)("table",M,[(0,a.Lk)("tbody",null,[(0,a.Lk)("tr",null,[e[6]||(e[6]=(0,a.Lk)("th",{style:{width:"100px"}},"訂單編號",-1)),(0,a.Lk)("td",null,(0,s.v_)(d.tempOrder.id),1)]),(0,a.Lk)("tr",null,[e[7]||(e[7]=(0,a.Lk)("th",null,"下單時間",-1)),(0,a.Lk)("td",null,(0,s.v_)(t.$filters.date(d.tempOrder.create_at)),1)]),(0,a.Lk)("tr",null,[e[8]||(e[8]=(0,a.Lk)("th",null,"付款時間",-1)),(0,a.Lk)("td",null,[d.tempOrder.paid_date?((0,a.uX)(),(0,a.CE)("span",$,(0,s.v_)(t.$filters.date(d.tempOrder.paid_date)),1)):((0,a.uX)(),(0,a.CE)("span",w,"時間不正確"))])]),(0,a.Lk)("tr",null,[e[9]||(e[9]=(0,a.Lk)("th",null,"付款狀態",-1)),(0,a.Lk)("td",null,[d.tempOrder.is_paid?((0,a.uX)(),(0,a.CE)("strong",F,"已付款")):((0,a.uX)(),(0,a.CE)("span",A,"尚未付款"))])]),(0,a.Lk)("tr",null,[e[10]||(e[10]=(0,a.Lk)("th",null,"付款狀態",-1)),(0,a.Lk)("td",null,[d.tempOrder.is_paid?((0,a.uX)(),(0,a.CE)("strong",D,"已付款")):((0,a.uX)(),(0,a.CE)("span",U,"尚未付款"))])]),(0,a.Lk)("tr",null,[e[11]||(e[11]=(0,a.Lk)("th",null,"總金額",-1)),(0,a.Lk)("td",null,(0,s.v_)(t.$filters.currency(d.tempOrder.total)),1)])])]),e[14]||(e[14]=(0,a.Lk)("h3",null,"選購商品",-1)),(0,a.Lk)("table",I,[e[12]||(e[12]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr")],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(d.tempOrder.products,(e=>((0,a.uX)(),(0,a.CE)("tr",{key:e.id},[(0,a.Lk)("th",null,[(0,a.Lk)("img",{src:e.product.imageUrl,class:"img-fluid",style:{width:"100px",height:"100px","object-fit":"cover"},alt:""},null,8,K)]),(0,a.Lk)("th",null,(0,s.v_)(e.product.title),1),(0,a.Lk)("td",null,(0,s.v_)(e.qty),1),(0,a.Lk)("td",j,(0,s.v_)(t.$filters.currency(e.final_total)),1)])))),128))])])])])]),(0,a.Lk)("div",N,[e[15]||(e[15]=(0,a.Lk)("button",{class:"btn btn-outline-secondat","data-bs-dismiss":"modal"},"取消",-1)),(0,a.Lk)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=e=>t.$emit("update-order",d.tempOrder))},"確認")])])])],512)}var q=l(3286),S={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-product"],mixins:[q.A],inject:["emitter"],watch:{order(){this.tempOrder={...this.order},this.isPaid=this.tempOrder.is_paid}}},V=l(1241);const H=(0,V.A)(S,[["render",Q]]);var z=H,B=l(3771),G={name:"UserOrders",data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:B.A,DelModal:v.A,OrderModal:z},methods:{getOrders(t=1){this.currentPage=t;const e=`https://vue3-course-api.hexschool.io/api/andy1234-api/admin/orders?page=${t}`;this.isLoading=!0,this.$http.get(e,this.tempProduct).then((t=>{this.orders=t.data.orders,this.pagination=t.data.pagination,this.isLoading=!1,console.log(t)}))},openModal(t,e){this.tempOrder={...e},this.isNew=!1;const l=this.$refs.orderModal;l.showModal()},openDelOrderModal(t){this.tempOrder={...t};const e=this.$refs.delModal;e.showModal()},updatePaid(t){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/andy1234-api/admin/order/${t.id}`,l={is_paid:t.is_paid};this.$http.put(e,{data:l}).then((t=>{this.isLoading=!1,this.getOrders(this.currentPage)}))},delOrder(){const t=`https://vue3-course-api.hexschool.io/api/andy1234-api/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(t).then((t=>{console.log(t);const e=this.$refs.delModal;e.hideModal(),this.getOrders(this.currentPage)}))}},created(){this.getOrders(),console.log("https://vue3-course-api.hexschool.io/")}};const J=(0,V.A)(G,[["render",b]]);var R=J}}]);
//# sourceMappingURL=853.916a338a.js.map