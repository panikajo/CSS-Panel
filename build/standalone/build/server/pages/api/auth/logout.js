"use strict";(()=>{var e={};e.id=1845,e.ids=[1845],e.modules={429:e=>{e.exports=require("cookie-session")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},45616:e=>{e.exports=import("next-connect")},38051:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},64936:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>c,default:()=>l,routeModule:()=>p});var a=r(88667),i=r(25828),s=r(38051),u=r(10826),o=e([u]);u=(o.then?(await o)():o)[0];let l=(0,s.l)(u,"default"),c=(0,s.l)(u,"config"),p=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/auth/logout",pathname:"/api/auth/logout",bundlePath:"",filename:""},userland:u});n()}catch(e){n(e)}})},10826:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>s});var a=r(74186),i=e([a]);let s=(a=(i.then?(await i)():i)[0]).Z.get("/api/auth/logout",(e,t)=>{e.logout(),t.end()});n()}catch(e){n(e)}})},74186:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>c});var a=r(15313),i=r(45616),s=r(429),u=r.n(s),o=e([i]);i=(o.then?(await o)():o)[0];let l=(0,i.default)();l.use(u()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(a.Z.initialize()),l.use(a.Z.session());let c=l;n()}catch(e){n(e)}})},15313:(e,t,r)=>{r.d(t,{Z:()=>u});let n=require("passport");var a=r.n(n);let i=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let s=process.env.DOMAIN||"";s.startsWith("http")||(s=`https://${s}`),a().use(new i.Strategy({returnURL:`${s}/api/auth/return`,realm:`${s}/`,apiKey:process.env.STEAM_API_KEY||"",stateless:!0},(e,t,r)=>(t.identifier=e,r(null,t))));let u=a()},25828:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},88667:(e,t,r)=>{e.exports=r(20145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=t(t.s=64936);module.exports=r})();