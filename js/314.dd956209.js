"use strict";(self["webpackChunkvue3_cart"]=self["webpackChunkvue3_cart"]||[]).push([[314],{6314:function(a,s,t){t.r(s),t.d(s,{default:function(){return g}});var o=t(6768);function e(a,s,t,e,n,r){const l=(0,o.g2)("Navbar"),c=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(l),s[0]||(s[0]=(0,o.Lk)("div",{class:"container-fluid"},null,-1)),(0,o.bF)(c)],64)}t(4114);var n=t(5130);const r={class:"navbar navbar-expand-lg navbar-dark bg-dark"},l={class:"container-fluid"},c={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},u={class:"navbar-nav"};function i(a,s,t,e,i,v){const d=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",r,[(0,o.Lk)("div",l,[s[4]||(s[4]=(0,o.Lk)("a",{class:"navbar-brand",href:"#"},"範例作品",-1)),s[5]||(s[5]=(0,o.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o.Lk)("span",{class:"navbar-toggler-icon"})],-1)),(0,o.Lk)("div",c,[(0,o.Lk)("div",u,[(0,o.bF)(d,{to:"/dashboard/products",class:"nav-link"},{default:(0,o.k6)((()=>s[1]||(s[1]=[(0,o.eW)("產品")]))),_:1}),(0,o.bF)(d,{to:"/dashboard/orders",class:"nav-link"},{default:(0,o.k6)((()=>s[2]||(s[2]=[(0,o.eW)("訂單")]))),_:1}),(0,o.bF)(d,{to:"/dashboard/coupons",class:"nav-link"},{default:(0,o.k6)((()=>s[3]||(s[3]=[(0,o.eW)("優惠券")]))),_:1}),(0,o.Lk)("a",{href:"#",onClick:s[0]||(s[0]=(0,n.D$)(((...a)=>v.logout&&v.logout(...a)),["prevent"])),class:"nav-link"},"登出")])])])])}var v={name:"userNavbar",methods:{logout(){const a="https://vue3-course-api.hexschool.io/logout";console.log(a),this.$http.post(a,this.user).then((a=>{a.data.success&&this.$router.push("/login")}))}}},d=t(1241);const h=(0,d.A)(v,[["render",i]]);var b=h,p={components:{Navbar:b},name:"UserDashboard",created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log(a),this.$http.defaults.headers.common.Authorization=a;const s="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(s,this.user).then((a=>{console.log(a),a.data.success||this.$router.push("login")}))}};const k=(0,d.A)(p,[["render",e]]);var g=k}}]);
//# sourceMappingURL=314.dd956209.js.map