"use strict";(()=>{var e={};e.id=9008,e.ids=[9008],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3511:e=>{e.exports=require("passport")},53686:e=>{e.exports=require("passport-steam")},48612:e=>{e.exports=require("zod-validation-error")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},76150:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>u,default:()=>l,routeModule:()=>d});var a=t(88667),i=t(25828),o=t(38051),p=t(64682),n=e([p]);p=(n.then?(await n)():n)[0];let l=(0,o.l)(p,"default"),u=(0,o.l)(p,"config"),d=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/servers/list",pathname:"/api/servers/list",bundlePath:"",filename:""},userland:p});s()}catch(e){s(e)}})},64682:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>p});var a=t(6995),i=t(74186),o=e([a,i]);[a,i]=o.then?(await o)():o;let p=async(e,r)=>{await i.Z.run(e,r);let{method:t}=e;if("GET"===t){let e=await a.Z.servers.getAll();return r.status(200).json(e)}};s()}catch(e){s(e)}})}};var r=require("../../../webpack-api-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[4514],()=>t(76150));module.exports=s})();