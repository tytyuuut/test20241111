"use strict";(self["webpackChunkvue3_cart"]=self["webpackChunkvue3_cart"]||[]).push([[660],{660:function(a,s,t){t.r(s),t.d(s,{default:function(){return $}});var e=t(6768);const o={class:"container-fluid mt-3 position-relative"};function r(a,s,t,r,n,l){const c=(0,e.g2)("Navbar"),u=(0,e.g2)("ToadtMessages"),i=(0,e.g2)("router-view");return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.bF)(c),(0,e.Lk)("div",o,[(0,e.bF)(u),(0,e.bF)(i)])],64)}t(4114);var n=t(1600),l=t(9794),c=t(5130);const u={class:"navbar navbar-expand-lg navbar-dark bg-dark"},i={class:"container-fluid"},d={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},v={class:"navbar-nav"};function h(a,s,t,o,r,n){const l=(0,e.g2)("router-link");return(0,e.uX)(),(0,e.CE)("nav",u,[(0,e.Lk)("div",i,[s[4]||(s[4]=(0,e.Lk)("a",{class:"navbar-brand",href:"#"},"網站後台",-1)),s[5]||(s[5]=(0,e.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e.Lk)("span",{class:"navbar-toggler-icon"})],-1)),(0,e.Lk)("div",d,[(0,e.Lk)("div",v,[(0,e.bF)(l,{to:"/dashboard/products",class:"nav-link"},{default:(0,e.k6)((()=>s[1]||(s[1]=[(0,e.eW)("產品")]))),_:1}),(0,e.bF)(l,{to:"/dashboard/orders",class:"nav-link"},{default:(0,e.k6)((()=>s[2]||(s[2]=[(0,e.eW)("訂單")]))),_:1}),(0,e.bF)(l,{to:"/dashboard/coupons",class:"nav-link"},{default:(0,e.k6)((()=>s[3]||(s[3]=[(0,e.eW)("優惠券")]))),_:1}),(0,e.Lk)("a",{href:"#",onClick:s[0]||(s[0]=(0,c.D$)(((...a)=>n.logout&&n.logout(...a)),["prevent"])),class:"nav-link"},"登出")])])])])}var b={name:"userNavbar",methods:{logout(){const a="https://vue3-course-api.hexschool.io/logout";console.log(a),this.$http.post(a,this.user).then((a=>{a.data.success&&this.$router.push("/login")}))}}},p=t(1241);const k=(0,p.A)(b,[["render",h]]);var g=k,f={components:{Navbar:g,ToadtMessages:l.A},provide(){return{emitter:n.A}},name:"UserDashboard",created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log(a),this.$http.defaults.headers.common.Authorization=a;const s="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(s,this.user).then((a=>{console.log(a),a.data.success||this.$router.push("login")}))}};const m=(0,p.A)(f,[["render",r]]);var $=m}}]);
//# sourceMappingURL=660.7315db39.js.map