"use strict";(()=>{var e={};e.id=2508,e.ids=[2508],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3511:e=>{e.exports=require("passport")},53686:e=>{e.exports=require("passport-steam")},48612:e=>{e.exports=require("zod-validation-error")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},71011:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.r(r),t.d(r,{config:()=>d,default:()=>p,routeModule:()=>l});var s=t(88667),i=t(25828),o=t(38051),u=t(77658),n=e([u]);u=(n.then?(await n)():n)[0];let p=(0,o.l)(u,"default"),d=(0,o.l)(u,"config"),l=new s.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/auth",pathname:"/api/auth",bundlePath:"",filename:""},userland:u});a()}catch(e){a(e)}})},77658:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.r(r),t.d(r,{default:()=>u});var s=t(74186),i=t(6995),o=e([s,i]);[s,i]=o.then?(await o)():o;let u=async(e,r)=>{await s.Z.run(e,r);let{method:t}=e;if("GET"===t)try{if(!e.user)return r.status(401).json({error:"Unauthorized"});let t=e.user.id,a=await i.Z.admins.getBySteam64(t);if(a&&"string"==typeof a.flags&&a.flags.startsWith("#")){let e=await i.Z.adminGroups.getById(a.flags);e&&(a.group=e)}return r.status(200).json({user:e.user,admin:a})}catch(e){return error("GET /api/auth",e),r.status(400).json({error:"Internal Server Error"})}};a()}catch(e){a(e)}})}};var r=require("../../webpack-api-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[4514],()=>t(71011));module.exports=a})();