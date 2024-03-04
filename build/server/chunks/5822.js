exports.id=5822,exports.ids=[5822],exports.modules={68847:e=>{function r(e){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id=68847,e.exports=r},16530:(e,r,t)=>{Promise.resolve().then(t.bind(t,44433)),Promise.resolve().then(t.bind(t,25720)),Promise.resolve().then(t.bind(t,13289)),Promise.resolve().then(t.bind(t,4486)),Promise.resolve().then(t.t.bind(t,56176,23))},71264:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,13888,23)),Promise.resolve().then(t.t.bind(t,33721,23)),Promise.resolve().then(t.t.bind(t,3975,23)),Promise.resolve().then(t.t.bind(t,83979,23)),Promise.resolve().then(t.t.bind(t,96226,23)),Promise.resolve().then(t.t.bind(t,15684,23))},13289:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>m});var a=t(98284),s=t(72150),n=t(34002),l=t(76425),i=t(1902),o=t(16490),c=t(61524),d=t(22173),u=t(46705),g=t(80823),E=t(11168),h=t(41278),y=t(36065);let m=()=>{let{admin:e}=(0,u.ZP)(),[r,t]=(0,d.useState)(!1),[m,p]=(0,d.useState)(!1),f=(0,y.useRouter)(),T=async()=>{p(!0);try{await E.Z.post("/api/update"),h.ZP.success("Panel updated successfully!\nRefresh the page to see the changes."),f.refresh()}catch(e){console.error(e),h.ZP.error("An error occurred while updating the panel.")}p(!1)};return e&&(0,a.jsxs)(a.Fragment,{children:[a.jsx(s.A,{size:"sm",variant:"faded",color:"primary",className:"ml-6",onClick:()=>t(!0),children:"Update Available!"}),a.jsx(n.R,{isOpen:r,onOpenChange:m?()=>{}:t,placement:"top",children:a.jsx(l.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[a.jsx(i.k,{children:"Update CSS-Panel"}),a.jsx(o.I,{children:"There is a new update available for CSS-Panel!"}),(0,a.jsxs)(c.R,{children:[a.jsx(g.default,{href:"https://csspanel.dev/docs/updating",target:"_blank",passHref:!0,children:a.jsx(s.A,{variant:"solid",color:"default",onClick:e,isDisabled:m,children:"Documentation"})}),a.jsx(s.A,{variant:"solid",color:"primary",onClick:T,isLoading:m,children:"Update"})]})]})})})]})}},25720:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>R});var a=t(98284),s=t(51804),n=t(97909),l=t(23728),i=t(52161),o=t(27083),c=t(80910),d=t(72150),u=t(29853),g=t(46705),E=t(70627);let h=()=>{let{user:e,admin:r}=(0,g.ZP)();return e?(0,a.jsxs)(s.F,{children:[a.jsx(n.S,{children:a.jsx(o.z,{as:"button",avatarProps:{isBordered:!0,src:e.photos[0].value,radius:"sm",className:"mr-1"},className:"transition-transform mr-4",description:r?r?.group?a.jsx(E.e,{content:"string"!=typeof r?.group.flags?r?.group.flags.join("\n"):r?.group.flags,color:"primary",className:"whitespace-pre-wrap",children:a.jsx("div",{children:r?.group.name})}):"string"!=typeof r.flags&&r.flags.length>1?a.jsx(E.e,{content:"string"!=typeof r.flags?r.flags.join("\n"):r.flags,color:"primary",className:"whitespace-pre-wrap",children:(0,a.jsxs)("div",{children:[r.flags.length," Flags"]})}):r.flags[0]:"Player",name:e.displayName,classNames:{name:"text-default-900 font-medium",description:"text-default-500"}})}),a.jsx(l.a,{variant:"faded",children:a.jsx(i.W,{className:"text-danger",color:"danger",description:"Logout from your steam account",startContent:a.jsx(c.Z,{className:(0,u.cn)("text-xl text-default-500 pointer-events-none flex-shrink-0","text-danger")}),onClick:g.hY,children:"Logout"},"logout")})]}):a.jsx(d.A,{color:"primary",onClick:g.jc,children:"Login"})};var y=t(22173),m=t(62485),p=t(62465),f=t(84299),T=t(53856);let w=()=>{let{theme:e}=(0,T.Z)(e=>e.settings),[r,t]=(0,y.useState)(!1),{theme:s,setTheme:n}=(0,f.F)();return((0,y.useEffect)(()=>{t(!0)},[]),(0,y.useEffect)(()=>{if(e){if(s){let r=s?.split("-")[0];n(`${r||"light"}-${e}-theme`)}else n(`light-${e}-theme`)}},[e,n,s]),r)?a.jsx(d.A,{onClick:()=>n(s===`dark-${e}-theme`?`light-${e}-theme`:`dark-${e}-theme`),size:"sm",variant:"faded",color:"primary",isIconOnly:!0,children:s===`dark-${e}-theme`?a.jsx(m.Z,{size:20}):a.jsx(p.Z,{size:20})}):null};var S=t(72479),D=t(72936),x=t(39902),A=t(32556),L=t(34626),N=t(20877),v=t(77683),O=t(478);let R=({children:e})=>{let[r,t]=(0,y.useState)(!1),s=["Dashboard"];return(0,a.jsxs)(D.R,{onMenuOpenChange:t,classNames:{wrapper:"max-w-[100%]"},children:[(0,a.jsxs)(x.U,{children:[a.jsx(A.L,{"aria-label":r?"Close menu":"Open menu",className:"sm:hidden"}),a.jsx(L.H,{children:e})]}),a.jsx(x.U,{className:"hidden sm:flex gap-4",justify:"center",children:a.jsx(N.k,{children:a.jsx(S.O,{color:"foreground",href:"#",children:"Dashboard"})})}),(0,a.jsxs)(x.U,{justify:"end",children:[a.jsx(N.k,{className:"flex flex-row items-center",children:a.jsx(h,{})}),a.jsx(N.k,{children:a.jsx(w,{})})]}),a.jsx(v.$,{children:s.map((e,r)=>a.jsx(O.h,{children:a.jsx(S.O,{color:2===r?"primary":r===s.length-1?"danger":"foreground",className:"w-full",href:"#",size:"lg",children:e})},`${e}-${r}`))})]})}},4486:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>m});var a=t(98284),s=t(22173),n=t(7391),l=t(73423),i=t(48768),o=t(79138);let c=[{name:"Dashboard",path:"/",icon:n.Z},{name:"Servers",path:"/servers",icon:l.Z},{name:"Bans",path:"/bans",icon:i.Z},{name:"Mutes / Gags",path:"/mutes",icon:o.Z},{name:"Admin Panel",path:"/admin",icon:l.Z,admin:!0}];var d=t(80823),u=t(45246),g=t(36065),E=t(29853);let h=({name:e,icon:r,path:t})=>{let s=(0,g.usePathname)(),n="/"===t?s===t:s?.startsWith(t);return a.jsx(d.default,{href:t,children:(0,a.jsxs)("div",{className:(0,E.cn)("px-6 py-4 text-sm flex items-center content-center duration-200","hover:bg-slate-500/5 text-foreground","cursor-pointer relative gap-2 hover:pl-8"),children:[n&&a.jsx(u.E.span,{layoutId:"underline",className:"absolute left-0 h-full w-1 [box-shadow:_0_0_10px_hsl(var(--css-primary))]",style:{backgroundColor:"hsl(var(--css-primary))"}}),r&&a.jsx(r,{size:18}),a.jsx("span",{children:e})]})})};var y=t(46705);let m=()=>{let{admin:e}=(0,y.ZP)();return a.jsx("div",{className:"flex flex-col min-w-[200px] pt-10",children:c.map(r=>{if(r.admin){if(!e)return;if(r.flag){let t=r.flag;if(!e.flags.includes(t))return}}return(0,s.createElement)(h,{...r,key:r.name})})})}},44433:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>E});var a=t(98284),s=t(79598),n=t(36065),l=t(41278),i=t(84299),o=t(22173),c=t(50257),d=t(53856),u=t(85615),g=t(31755);let E=({children:e})=>{let r=(0,n.useRouter)(),{data:t}=(0,u.ZP)("/api/settings",g.Z),E=(0,d.Z)(e=>e.setSettings);return(0,o.useEffect)(()=>{t&&E(t)},[t,E]),a.jsx(s.w,{navigate:r.push,children:(0,a.jsxs)(i.f,{themes:Object.keys(c.Z),children:[a.jsx(l.x7,{}),e]})})}},50257:(e,r,t)=>{"use strict";t.d(r,{M:()=>l,Z:()=>i});let a={primary:{50:"#e6f1fe",100:"#cce3fd",200:"#99c7fb",300:"#66aaf9",400:"#338ef7",500:"#006FEE",600:"#005bc4",700:"#004493",800:"#002e62",900:"#001731",DEFAULT:"#338ef7"},secondary:{50:"#F2EAFA",100:"#E4D4F4",200:"#C9A9E9",300:"#AE7EDE",400:"#9353D3",500:"#7828C8",600:"#6020A0",700:"#481878",800:"#301050",900:"#180828",DEFAULT:"#7828C8"}},s={primary:{50:"#FEF3D3",100:"#FEE3A7",200:"#FED07B",300:"#FED07B",400:"#FDBC5A",500:"#FC9D24",600:"#D87C1A",700:"#B55F12",800:"#92440B",900:"#783206",DEFAULT:"#FC9D24"},secondary:{50:"#FDF3D7",100:"#FDF3D7",200:"#FCE3B0",300:"#F6CD87",400:"#EEB667",500:"#E49438",600:"#C47428",700:"#A4581C",800:"#843E11",900:"#6D2D0A",DEFAULT:"#E49438"},focus:"#FC9D24"},n={primary:{50:"#127121",100:"#1F8927",200:"#31AA31",300:"#51CB47",400:"#77ED62",500:"#77ED62",600:"#A1F488",700:"#BCF9A1",800:"#D8FDC1",900:"#EEFEE0",DEFAULT:"#77ED62"},secondary:{50:"#05331B",100:"#05331B",200:"#14663C",300:"#14663C",400:"#2E9962",500:"#2E9962",600:"#52CC8D",700:"#52CC8D",800:"#80FFBD",900:"#80FFBD",DEFAULT:"#2E9962"},focus:"#40992E"},l=[{name:"Blue Purple",value:"bluePurple"},{name:"Orange",value:"orange"},{name:"Green",value:"green"}],i={"light-bluePurple-theme":{extend:"light",colors:a,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}},"dark-bluePurple-theme":{extend:"dark",colors:a,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}},"light-orange-theme":{extend:"light",colors:s},"dark-orange-theme":{extend:"dark",colors:s},"light-green-theme":{extend:"light",colors:n,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}},"dark-green-theme":{extend:"dark",colors:n,layout:{disabledOpacity:"0.3",radius:{small:"4px",medium:"6px",large:"8px"},borderWidth:{small:"1px",medium:"2px",large:"3px"}}}}},31755:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var a=t(11168);let s=e=>a.Z.get(e).then(e=>e.data)},46705:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>c,hY:()=>i,jc:()=>o});var a=t(41278),s=t(85615),n=t(31755),l=t(11168);let i=async()=>{await (0,l.Z)("/api/auth/logout"),await (0,s.JG)("/api/auth"),a.Am.success("Logged out successfully")},o=()=>{let e=window.innerWidth/2-300,r=window.innerHeight/2-400,t=window.open("/api/auth/login/","",`toolbar=no, location=no, directories=no, status=no, menubar=no, 
		  scrollbars=no, resizable=yes, copyhistory=no, width=600, 
		  height=800, top=${r}, left=${e}`),n=setInterval(async()=>{t&&t.closed&&(await (0,s.JG)("/api/auth"),a.Am.success("Logged in successfully!"),clearInterval(n))},1e3)},c=()=>{let{data:e,isLoading:r,error:t}=(0,s.ZP)("/api/auth",n.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:t||!e?null:e.user,admin:t||!e?null:e.admin,isLoading:r}}},86940:(e,r,t)=>{"use strict";t.d(r,{R:()=>l});var a=t(50257),s=t(4570);let n=s.z.object({title:s.z.string().optional().default("CSS-Panel"),description:s.z.string().optional().default(""),keywords:s.z.string().optional().default("gaming, cs2"),theme:s.z.string().default(a.M[0].value),logo:s.z.string().optional().default(""),debugMode:s.z.boolean().optional().default(!1),headerImage:s.z.string().optional().default("https://prosettings.net/wp-content/uploads/inferno-in-cs2-2.jpg"),headerCodeHTML:s.z.string().optional().default(""),headerCodeCSS:s.z.string().optional().default(""),earlyAccessFeatures:s.z.boolean().optional().default(!1),serversGrid:s.z.boolean().optional().default(!0),showAdminName:s.z.boolean().optional().default(!1),language:s.z.string().optional().default("en"),discordWebhook:s.z.string().optional().default("")}),l=()=>n.parse({})},53856:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var a=t(86940);let s=(0,t(2193).Ue)(e=>({settings:(0,a.R)(),setSettings:r=>e({settings:r})}))},91090:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>C,dynamic:()=>j,generateMetadata:()=>b});var a=t(88640),s=t(57350),n=t.n(s),l=t(40440),i=t(31613);let o=()=>a.jsx("footer",{className:"w-full flex items-center justify-center py-3 bg-slate-500/5",children:(0,a.jsxs)(i.default,{className:"flex items-center gap-1 text-current",href:"https://github.com/ShiNxz/CSS-Panel",target:"_blank",children:[a.jsx("span",{className:"text-default-600",children:"Powered by"}),a.jsx("p",{className:"text-primary",children:"CSS-Panel"})]})});var c=t(11728);let d=(0,c.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Navbar\index.tsx`),{__esModule:u,$$typeof:g}=d,E=d.default,h=(0,c.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Sidebar\index.tsx`),{__esModule:y,$$typeof:m}=h,p=h.default,f=e=>{try{return new URL(e),!0}catch(e){return!1}},T=async()=>{let e=await l.Z.settings.getByKey("logo");if(f(e||""))return a.jsx("img",{src:e||"",alt:"Logo",className:"h-10"});let r=await l.Z.settings.getByKey("title");return a.jsx("div",{className:"text-xl font-bold",children:r})};var w=t(96033);let S=(0,c.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Navbar\UpdateButton\Client.tsx`),{__esModule:D,$$typeof:x}=S,A=S.default,L=async()=>{let e=await w.Z.get("https://api.github.com/repos/ShiNxz/CSS-Panel/tags").catch(()=>null);return(debug("Github: Checking for updates"),e&&e.data)?"0.9.76"!==e.data[0].name&&a.jsx(A,{}):a.jsx(A,{})},N=({children:e})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(E,{children:[a.jsx(T,{}),a.jsx(L,{})]}),(0,a.jsxs)("div",{className:"flex flex-row mb-36",children:[a.jsx(p,{}),a.jsx("div",{className:"flex flex-col gap-6 w-full",children:a.jsx("div",{className:"flex flex-col gap-6 p-6 w-full min-h-[40vw]",children:e})})]}),a.jsx(o,{})]}),v=(0,c.createProxy)(String.raw`C:\Projects\CSS-Panel\app\providers.tsx`),{__esModule:O,$$typeof:R}=v,B=v.default;var _=t(54266);t(71253);let j="force-dynamic",b=async()=>{let e=await l.Z.settings.getByKey("title");return{title:{default:e||"",template:`%s - ${e}`},description:await l.Z.settings.getByKey("description"),keywords:await l.Z.settings.getByKey("keywords")}},C=async({children:e})=>(0,a.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[a.jsx("head",{}),a.jsx("body",{className:(0,_.Z)("min-h-screen antialiased text-foreground bg-background",n().className),children:a.jsx(B,{children:a.jsx(N,{children:e})})})]})},40440:(e,r,t)=>{"use strict";t.d(r,{Z:()=>w});var a=t(18771),s=t(19457),n=t(43036);let l=s.z.object({STEAM_API_KEY:s.z.string().min(1),SESSION_SECRET:s.z.string().min(1),DOMAIN:s.z.string().min(1),DB_HOST:s.z.string().min(1),DB_USER:s.z.string().min(1),DB_PASSWORD:s.z.string().min(1),DB_DATABASE:s.z.string().min(1),DB_PORT:s.z.string().min(1)});var i=t(5816),o=t(96033);let c=async({url:e,content:r,embeds:t})=>{try{await o.Z.post(e,{username:"CSS-Panel",content:r,embeds:t})}catch(e){error("Error while sending a webhook",e)}};global.log=async(e,...r)=>{console.log(i.ZP.cyanBright("[LOG] ")+e,...r);let t=r?r.map(e=>`\`\`\`${e}\`\`\``):"",a=await w.settings.getByKey("discordWebhook",!1);a&&c({url:a,embeds:[{title:"**▬▬▬▬▬ [LOG] ▬▬▬▬▬**",color:5352959,description:e+t,timestamp:new Date().toISOString()}]})},global.debug=async(e,...r)=>{if(!await w.settings.getByKey("debugMode",!1))return;let t=(Error().stack||"").split("\n").slice(1).join("\n").split("\n")[1].split(" ").slice(5).join(" ").split(" ")[0];console.debug(i.ZP.yellowBright("[DEBUG]")+` (${t}) `,e,...r)},global.error=async(e,...r)=>{console.error(i.ZP.redBright("[ERROR] ")+e,...r);let t=r?r.map(e=>`\`\`\`${e}\`\`\``):"",a=await w.settings.getByKey("discordWebhook",!1);a&&c({url:a,embeds:[{title:"**▬▬▬▬▬ [ ERROR ] ▬▬▬▬▬**",color:16732497,description:e+t,timestamp:new Date().toISOString()}]})},global.warn=async(e,...r)=>{console.warn(i.ZP.yellowBright("[WARN] ")+e,...r);let t=await w.settings.getByKey("discordWebhook",!1);t&&c({url:t,embeds:[{title:"**▬▬▬▬▬ [ WARN ] ▬▬▬▬▬**",color:16751441,description:e+"\n"+`\`\`\`${r.join("\n")}\`\`\``,timestamp:new Date().toISOString()}]})},(()=>{try{l.parse(process.env)}catch(r){let e=(0,n.C)(r);error(`[ENV] .env file is missing or its missing one of the following values, please check .env.example file for more info:

${e.toString()}

`),process.exit(1)}})();let d=(0,a.createPool)({host:process.env.DB_HOST,user:process.env.DB_USER,password:process.env.DB_PASSWORD,database:process.env.DB_DATABASE,port:parseInt(process.env.DB_PORT||"3306")}),u=!1;d.on("connection",async e=>{if(!u){u=!0,debug("[DB] Connected to database");try{e.query(`CREATE TABLE IF NOT EXISTS \`${process.env.DB_DATABASE}\`.\`cssp_settings\` (\`key\` VARCHAR(500) NOT NULL , \`value\` TEXT NOT NULL , \`lastChange\` DATE NOT NULL , PRIMARY KEY (\`key\`)) ENGINE = InnoDB;`),e.query(`CREATE TABLE IF NOT EXISTS \`${process.env.DB_DATABASE}\`.\`cssp_logs\` (\`id\` INT NOT NULL AUTO_INCREMENT , \`title\` TEXT NOT NULL , \`message\` TEXT NOT NULL , \`aid\` int(11) NULL DEFAULT NULL, \`time\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (\`id\`)) ENGINE = InnoDB;`),e.query(`CREATE TABLE IF NOT EXISTS \`${process.env.DB_DATABASE}\`.\`sa_admins_groups\` (\`id\` VARCHAR(50) NOT NULL, \`name\` TEXT NOT NULL , \`flags\` TEXT NOT NULL , \`immunity\` varchar(64) NOT NULL DEFAULT '0' ,\`created\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE = InnoDB;`),e.query(`ALTER TABLE \`${process.env.DB_DATABASE}\`.\`sa_mutes\` ADD COLUMN IF NOT EXISTS \`unmute_reason\` TEXT NULL DEFAULT NULL AFTER \`reason\`, ADD COLUMN IF NOT EXISTS \`comment\` TEXT NULL DEFAULT NULL AFTER \`unmute_reason\`;`),e.query(`ALTER TABLE \`${process.env.DB_DATABASE}\`.\`sa_bans\` ADD COLUMN IF NOT EXISTS \`unban_reason\` TEXT NULL DEFAULT NULL AFTER \`reason\`, ADD COLUMN IF NOT EXISTS \`comment\` TEXT NULL DEFAULT NULL AFTER \`unban_reason\`;`),e.query("ALTER TABLE `sa_mutes` CHANGE `type` `type` ENUM('GAG','MUTE','SILENCE','') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'GAG';")}catch(e){error(`[DB] Error while creating tables: ${e}`)}}});let g=s.z.object({title:s.z.string().optional().default("CSS-Panel"),description:s.z.string().optional().default(""),keywords:s.z.string().optional().default("gaming, cs2"),theme:s.z.string().default("bluePurple"),logo:s.z.string().optional().default(""),debugMode:s.z.boolean().optional().default(!1),headerImage:s.z.string().optional().default("https://prosettings.net/wp-content/uploads/inferno-in-cs2-2.jpg"),headerCodeHTML:s.z.string().optional().default(""),headerCodeCSS:s.z.string().optional().default(""),earlyAccessFeatures:s.z.boolean().optional().default(!1),serversGrid:s.z.boolean().optional().default(!0),showAdminName:s.z.boolean().optional().default(!1),language:s.z.string().optional().default("en"),discordWebhook:s.z.string().optional().default("")}),E=()=>g.parse({}),h=["title","description","keywords","theme","logo","headerImage","headerCodeHTML","headerCodeCSS","serversGrid"],y=["debugMode","earlyAccessFeatures","serversGrid","showAdminName"],m=["player_steamid","player_name","flags","immunity","server_id","ends"],p={getAll:async(e=1,r=1e5)=>{try{let[t]=await d.query(`SELECT * FROM \`sa_admins\` LIMIT ${r} OFFSET ${(e-1)*r}`);return t.forEach(e=>{e.server_id&&(e.server_id=e.server_id.split(",")),e.flags&&!e.flags.startsWith("#")&&(e.flags=e.flags.split(","))}),t}catch(e){return error(`[DB] Error while getting all admins: ${e}`),[]}},getById:async e=>{try{let[r]=await d.query("SELECT * FROM `sa_admins` WHERE id = ?",[e]);if(!r.length||r.length<1)return null;let t=r[0];return t.server_id&&(t.server_id=t.server_id.split(",")),t.flags&&!t.flags.startsWith("#")&&(t.flags=t.flags.split(",")),t}catch(e){return error(`[DB] Error while getting the admin: ${e}`),null}},getBySteam64:async e=>{try{let[r]=await d.query("SELECT * FROM `sa_admins` WHERE player_steamid = ?",[e]);if(!r.length||r.length<1)return null;let t=r[0];return t.server_id&&(t.server_id=t.server_id.split(",")),t.flags&&!t.flags.startsWith("#")&&(t.flags=t.flags.split(",")),t}catch(e){return error(`[DB] Error while getting the admin: ${e}`),null}},getByServerId:async e=>{try{let[r]=await d.query("SELECT * FROM `sa_admins` WHERE FIND_IN_SET(?, `server_id`)",[e]);if(!r.length||r.length<1)return[];return r.forEach(e=>{e.server_id&&(e.server_id=e.server_id.split(",")),e.flags&&!e.flags.startsWith("#")&&(e.flags=e.flags.split(","))}),r}catch(e){return error(`[DB] Error while getting all admins: ${e}`),[]}},getBySteam64AndServerId:async(e,r)=>{try{let[t]=await d.query("SELECT * FROM `sa_admins` WHERE player_steamid = ? AND FIND_IN_SET(?, `server_id`) OR server_id IS NULL",[e,r]);if(!t.length||t.length<1)return null;return t.forEach(e=>{e.server_id&&(e.server_id=e.server_id.split(",")),e.flags&&!e.flags.startsWith("#")&&(e.flags=e.flags.split(","))}),t[0]||null}catch(e){return error(`[DB] Error while getting the admin: ${e}`),null}},create:async({player_steamid:e,player_name:r,flags:t,immunity:a,server_id:s})=>{try{let[n]=await d.query(`INSERT INTO \`sa_admins\` (${m.join(", ")}, created) VALUES (${m.map(()=>"?").join(", ")}, NOW())`,[e,r,"string"==typeof t?t:t.join(","),a,s&&s.join(","),null]);return n.insertId}catch(e){throw error(`[DB] Error while creating sa_admins: ${e}`),e}},update:async({id:e,player_steamid:r,player_name:t,flags:a,immunity:s,server_id:n})=>{try{let[l]=await d.query(`UPDATE \`sa_admins\` SET ${m.map(e=>`${e} = ?`).join(", ")} WHERE id = ?`,[r,t,"string"==typeof a?a:a.join(","),s,n&&n.join(","),null,e]);return l.affectedRows>0}catch(e){throw error(`[DB] Error while updating admin: ${e}`),e}},delete:async e=>{try{let[r]=await d.query("DELETE FROM `sa_admins` WHERE id = ?",[e]);return r.affectedRows>0}catch(e){throw error(`[DB] Error while deleting admin: ${e}`),e}},count:async()=>{try{let[e]=await d.query("SELECT COUNT(*) FROM `sa_admins`");return e?.[0]?.["COUNT(*)"]}catch(e){return error(`[DB] Error while counting admins: ${e}`),0}}};var f=t(62467);let T={getAll:async(e,r,t)=>{try{let[a]=await d.query(`SELECT * FROM \`cssp_logs\`  ${t&&t.length>2?`WHERE title LIKE '%${t}%' OR message LIKE '%${t}%'`:""} ORDER BY \`id\` DESC LIMIT ${r} OFFSET ${(e-1)*r}`);return a}catch(e){return error(`[DB] Error while getting all logs: ${e}`),[]}},getAllMapped:async(e,r,t)=>{try{let a=await T.getAll(e,r,t),s=[],n=await Promise.all(a.map(async e=>{let r=await p.getById(e.aid);return r&&!s.includes(r.player_steamid)&&s.push(r.player_steamid),{...e,constructor:void 0,admin:r}})),l=await (0,f.Dw)(s);if(!l)return n;return n.forEach(e=>{if(e.admin){let r=l.find(r=>r.steamid===e.admin?.player_steamid);r&&(e.admin.user=r)}}),n}catch(e){return error(`[DB] Error while getting all logs: ${e}`),[]}},getByAdmin:async e=>{try{let[r]=await d.query("SELECT * FROM `cssp_logs` WHERE `aid` = ?",[e]);return r}catch(e){return error(`[DB] Error while getting log: ${e}`),[]}},getByAdmin64:async e=>{try{let{id:r}=await p.getBySteam64(e)||{};if(!r)return null;let[t]=await d.query("SELECT * FROM `cssp_logs` WHERE `aid` = ?",[r]);return t}catch(e){return error(`[DB] Error while getting log: ${e}`),[]}},create:async(e,r,t)=>{try{if(!t)return await d.query("INSERT INTO `cssp_logs` (`title`, `message`) VALUES (?, ?)",[e,r]),!0;let{id:a}=await p.getBySteam64(t)||{};if(!a)return!1;return await d.query("INSERT INTO `cssp_logs` (`title`, `message`, `aid`) VALUES (?, ?, ?)",[e,r,a]),!0}catch(e){return error(`[DB] Error while creating log: ${e}`),!1}},count:async e=>{try{let[r]=await d.query("SELECT COUNT(*) FROM `cssp_logs` "+(e?`WHERE title LIKE '%${e}%' OR message LIKE '%${e}%'`:""));return r?.[0]?.["COUNT(*)"]}catch(e){return error(`[DB] Error while counting logs: ${e}`),0}}},w={servers:{getAll:async()=>{try{let[e]=await d.query("SELECT * FROM `sa_servers`");return e}catch(e){return error(`[DB] Error while getting all servers: ${e}`),[]}},getAllSafe:async()=>{try{let[e]=await d.query("SELECT id, hostname, address FROM `sa_servers`");return e}catch(e){return error(`[DB] Error while getting all servers: ${e}`),[]}},getById:async e=>{try{let[r]=await d.query("SELECT * FROM `sa_servers` WHERE id = ?",[e]);if(!r.length||r.length<1)return null;return r[0]}catch(e){return error(`[DB] Error while getting all servers: ${e}`),null}},create:async({hostname:e,address:r})=>{try{let[t]=await d.query("INSERT INTO `sa_servers` (hostname, address) VALUES(?, ?)",[e,r]);return t.insertId}catch(e){throw error(`[DB] Error while creating server: ${e}`),e}},update:async(e,r)=>{try{let t=Object.keys(r),a=Object.values(r),[s]=await d.query(`UPDATE \`sa_servers\` SET ${t.map(e=>`${e} = ?`).join(", ")} WHERE id = ?`,[...a,e]);return s.affectedRows>0}catch(e){throw error(`[DB] Error while updating server: ${e}`),e}},delete:async e=>{try{let[r]=await d.query("DELETE FROM `sa_servers` WHERE id = ?",[e]);return r.affectedRows>0}catch(e){throw error(`[DB] Error while deleting server: ${e}`),e}},count:async()=>{try{let[e]=await d.query("SELECT COUNT(*) FROM `sa_servers`");return e?.[0]?.["COUNT(*)"]}catch(e){return error(`[DB] Error while counting admins: ${e}`),0}}},admins:p,adminGroups:{getAll:async()=>{try{let[e]=await d.query("SELECT * FROM `sa_admins_groups`");return e.forEach(e=>{e.flags=e.flags.split(",")}),e}catch(e){return error(`[DB] Error while getting all admin groups: ${e}`),[]}},getById:async e=>{try{let[r]=await d.query("SELECT * FROM `sa_admins_groups` WHERE id = ?",[e]);if(!r.length||r.length<1)return null;let t=r[0];return t.flags=t.flags.split(","),t}catch(e){return error(`[DB] Error while getting the admin group: ${e}`),null}},create:async e=>{try{let r=Object.keys(e),t=Object.values(e).map(e=>Array.isArray(e)?e.join(","):e),[a]=await d.query(`INSERT INTO \`sa_admins_groups\` (${r.join(", ")}, created) VALUES (${r.map(()=>"?").join(", ")}, NOW())`,t);return a.insertId}catch(e){throw error(`[DB] Error while creating admin group: ${e}`),e}},update:async(e,r)=>{try{let t=Object.keys(r),a=Object.values(r).map(e=>Array.isArray(e)?e.join(","):e),[s]=await d.query(`UPDATE \`sa_admins_groups\` SET ${t.map(e=>`${e} = ?`).join(", ")} WHERE id = ?`,[...a,e]);return s.affectedRows>0}catch(e){throw error(`[DB] Error while updating admin group: ${e}`),e}},delete:async e=>{try{let[r]=await d.query("DELETE FROM `sa_admins_groups` WHERE id = ?",[e]);return r.affectedRows>0}catch(e){throw error(`[DB] Error while deleting admin group: ${e}`),e}},count:async()=>{try{let[e]=await d.query("SELECT COUNT(*) FROM `sa_admins_groups`");return e?.[0]?.["COUNT(*)"]}catch(e){return error(`[DB] Error while counting admin groups: ${e}`),0}}},bans:{getAll:async(e,r)=>{try{let[t]=await d.query(`SELECT * FROM \`sa_bans\` ORDER BY \`id\` DESC LIMIT ${r} OFFSET ${(e-1)*r}`);return t}catch(e){return error(`[DB] Error while getting all bans: ${e}`),[]}},getById:async e=>{try{let[r]=await d.query("SELECT * FROM `sa_bans` WHERE id = ?",[e]);if(!r.length||r.length<1)return null;return r[0]}catch(e){return error(`[DB] Error while getting all bans: ${e}`),null}},create:async e=>{let r=Object.keys(e),t=Object.values(e);try{let[e]=await d.query(`INSERT INTO \`sa_bans\` (${r.join(", ")}) VALUES (${r.map(()=>"?").join(", ")})`,t);return e.insertId}catch(e){return error(`[DB] Error while creating bans: ${e}`),null}},update:async(e,r)=>{try{let t=Object.keys(r),[a]=await d.query(`UPDATE \`sa_bans\` SET ${t.map(e=>`${e} = ?`).join(", ")} WHERE id = ?`,[...Object.values(r),e]);return a.affectedRows>0}catch(e){return error(`[DB] Error while updating bans: ${e}`),!1}},delete:async e=>{try{let[r]=await d.query("DELETE FROM `sa_bans` WHERE id = ?",[e]);return r.affectedRows>0}catch(e){return error(`[DB] Error while deleting ban: ${e}`),!1}},count:async()=>{try{let[e]=await d.query("SELECT COUNT(*) FROM `sa_bans`");return e?.[0]?.["COUNT(*)"]}catch(e){return error(`[DB] Error while counting bans: ${e}`),0}}},mutes:{getAll:async(e,r)=>{try{let[t]=await d.query(`SELECT * FROM \`sa_mutes\` ORDER BY \`id\` DESC LIMIT ${r} OFFSET ${(e-1)*r}`);return t}catch(e){return error(`[DB] Error while getting all mutes: ${e}`),[]}},getById:async e=>{try{let[r]=await d.query("SELECT * FROM `sa_mutes` WHERE id = ?",[e]);if(!r.length||r.length<1)return null;return r[0]}catch(e){return error(`[DB] Error while getting all mutes: ${e}`),null}},create:async e=>{try{let r=Object.keys(e),t=Object.values(e),[a]=await d.query(`INSERT INTO \`sa_mutes\` (${r.join(", ")}) VALUES (${r.map(()=>"?").join(", ")})`,t);return a.insertId}catch(e){return error(`[DB] Error while creating mutes: ${e}`),null}},update:async(e,r)=>{try{let t=Object.keys(r),[a]=await d.query(`UPDATE \`sa_mutes\` SET ${t.map(e=>`${e} = ?`).join(", ")} WHERE id = ?`,[...Object.values(r),e]);return a.affectedRows>0}catch(e){return error(`[DB] Error while updating mutes: ${e}`),!1}},delete:async e=>{try{let[r]=await d.query("DELETE FROM `sa_mutes` WHERE id = ?",[e]);return r.affectedRows>0}catch(e){return error(`[DB] Error while deleting mute: ${e}`),!1}},count:async()=>{try{let[e]=await d.query("SELECT COUNT(*) FROM `sa_mutes`");return e?.[0]?.["COUNT(*)"]}catch(e){return error(`[DB] Error while counting mutes: ${e}`),0}}},chatLogs:{getAllByServer:async(e,r=10)=>{try{let[t]=await d.query(`SELECT * FROM \`sa_chatlogs\` WHERE serverId = ? ORDER BY \`id\` ASC LIMIT ${r}`,[e]);return t}catch(e){return error(`[DB] Error while getting all chat logs: ${e}`),[]}},getAllByServerAndMinutes:async(e,r)=>{try{let[t]=await d.query("SELECT * FROM `sa_chatlogs` WHERE serverId = ? AND `created` > DATE_SUB(NOW(), INTERVAL ? MINUTE) ORDER BY `id` ASC",[e,r]);return t}catch(e){return error(`[DB] Error while getting all chat logs: ${e}`),[]}},create:async e=>{let r=Object.keys(e),t=Object.values(e);try{let[e]=await d.query(`INSERT INTO \`sa_chatlogs\` (${r.join(", ")}) VALUES (${r.map(()=>"?").join(", ")})`,t);return e.insertId}catch(e){return error(`[DB] Error while creating chatLog: ${e}`),null}}},settings:{getAll:async(e=!0)=>{try{let[r]=await d.query("SELECT * FROM `cssp_settings`"),t=r.reduce((r,t)=>(e&&!h.includes(t.key)||(y.includes(t.key)?r[t.key]="1"===t.value:r[t.key]=t.value),r),{});return{...E(),...t}}catch(e){return error(`[DB] Error while getting all settings: ${e}`),E()}},getByKey:async(e,r=!0)=>{try{if(r&&!h.includes(e))return null;let[t]=await d.query(`SELECT * FROM \`cssp_settings\` WHERE \`key\` LIKE '${e}'`);if(!t.length||t.length<1)return E()[e];if(y.includes(e))return"1"===t[0].value;return t[0].value}catch(r){return error(`[DB] Error while getting setting: ${r}`),E()[e]}},update:async e=>{try{let r=g.parse(e);for await(let[e,t]of Object.entries(r)){let r=new Date().toISOString().slice(0,19).replace("T"," ");await d.query(`INSERT INTO \`cssp_settings\` (\`key\`, \`value\`, \`lastChange\`) 
						VALUES (?, ?, ?) 
						ON DUPLICATE KEY UPDATE \`value\` = ?, \`lastChange\` = ?`,[e,t,r,t,r])}}catch(e){error(`[DB] Error while creating server: ${e}`)}}},logs:T}},71253:()=>{}};