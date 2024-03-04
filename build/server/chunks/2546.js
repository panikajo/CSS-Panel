"use strict";exports.id=2546,exports.ids=[2546],exports.modules={38051:(e,r)=>{Object.defineProperty(r,"l",{enumerable:!0,get:function(){return function e(r,t){return t in r?r[t]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,t)):"function"==typeof r&&"default"===t?r:void 0}}})},71777:(e,r,t)=>{t.d(r,{M:()=>a});let a=[{name:"Blue Purple",value:"bluePurple"},{name:"Orange",value:"orange"},{name:"Green",value:"green"}]},899:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>i});var n=t(99648),s=e([n]);n=(s.then?(await s)():s)[0];let i=async({url:e,content:r,embeds:t})=>{try{await n.default.post(e,{username:"CSS-Panel",content:r,embeds:t})}catch(e){error("Error while sending a webhook",e)}};a()}catch(e){a(e)}})},28609:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>i});var n=t(80846),s=e([n]);n=(s.then?(await s)():s)[0];let i={getAll:async()=>{try{let[e]=await n.Z.query("SELECT * FROM `sa_admins_groups`");return e.forEach(e=>{e.flags=e.flags.split(",")}),e}catch(e){return error(`[DB] Error while getting all admin groups: ${e}`),[]}},getById:async e=>{try{let[r]=await n.Z.query("SELECT * FROM `sa_admins_groups` WHERE id = ?",[e]);if(!r.length||r.length<1)return null;let t=r[0];return t.flags=t.flags.split(","),t}catch(e){return error(`[DB] Error while getting the admin group: ${e}`),null}},create:async e=>{try{let r=Object.keys(e),t=Object.values(e).map(e=>Array.isArray(e)?e.join(","):e),[a]=await n.Z.query(`INSERT INTO \`sa_admins_groups\` (${r.join(", ")}, created) VALUES (${r.map(()=>"?").join(", ")}, NOW())`,t);return a.insertId}catch(e){throw error(`[DB] Error while creating admin group: ${e}`),e}},update:async(e,r)=>{try{let t=Object.keys(r),a=Object.values(r).map(e=>Array.isArray(e)?e.join(","):e),[s]=await n.Z.query(`UPDATE \`sa_admins_groups\` SET ${t.map(e=>`${e} = ?`).join(", ")} WHERE id = ?`,[...a,e]);return s.affectedRows>0}catch(e){throw error(`[DB] Error while updating admin group: ${e}`),e}},delete:async e=>{try{let[r]=await n.Z.query("DELETE FROM `sa_admins_groups` WHERE id = ?",[e]);return r.affectedRows>0}catch(e){throw error(`[DB] Error while deleting admin group: ${e}`),e}},count:async()=>{try{let[e]=await n.Z.query("SELECT COUNT(*) FROM `sa_admins_groups`");return e?.[0]?.["COUNT(*)"]}catch(e){return error(`[DB] Error while counting admin groups: ${e}`),0}}};a()}catch(e){a(e)}})},4379:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>l});var n=t(80846),s=e([n]);n=(s.then?(await s)():s)[0];let i=["player_steamid","player_name","flags","immunity","server_id","ends"],l={getAll:async(e=1,r=1e5)=>{try{let[t]=await n.Z.query(`SELECT * FROM \`sa_admins\` LIMIT ${r} OFFSET ${(e-1)*r}`);return t.forEach(e=>{e.server_id&&(e.server_id=e.server_id.split(",")),e.flags&&!e.flags.startsWith("#")&&(e.flags=e.flags.split(","))}),t}catch(e){return error(`[DB] Error while getting all admins: ${e}`),[]}},getById:async e=>{try{let[r]=await n.Z.query("SELECT * FROM `sa_admins` WHERE id = ?",[e]);if(!r.length||r.length<1)return null;let t=r[0];return t.server_id&&(t.server_id=t.server_id.split(",")),t.flags&&!t.flags.startsWith("#")&&(t.flags=t.flags.split(",")),t}catch(e){return error(`[DB] Error while getting the admin: ${e}`),null}},getBySteam64:async e=>{try{let[r]=await n.Z.query("SELECT * FROM `sa_admins` WHERE player_steamid = ?",[e]);if(!r.length||r.length<1)return null;let t=r[0];return t.server_id&&(t.server_id=t.server_id.split(",")),t.flags&&!t.flags.startsWith("#")&&(t.flags=t.flags.split(",")),t}catch(e){return error(`[DB] Error while getting the admin: ${e}`),null}},getByServerId:async e=>{try{let[r]=await n.Z.query("SELECT * FROM `sa_admins` WHERE FIND_IN_SET(?, `server_id`)",[e]);if(!r.length||r.length<1)return[];return r.forEach(e=>{e.server_id&&(e.server_id=e.server_id.split(",")),e.flags&&!e.flags.startsWith("#")&&(e.flags=e.flags.split(","))}),r}catch(e){return error(`[DB] Error while getting all admins: ${e}`),[]}},getBySteam64AndServerId:async(e,r)=>{try{let[t]=await n.Z.query("SELECT * FROM `sa_admins` WHERE player_steamid = ? AND FIND_IN_SET(?, `server_id`) OR server_id IS NULL",[e,r]);if(!t.length||t.length<1)return null;return t.forEach(e=>{e.server_id&&(e.server_id=e.server_id.split(",")),e.flags&&!e.flags.startsWith("#")&&(e.flags=e.flags.split(","))}),t[0]||null}catch(e){return error(`[DB] Error while getting the admin: ${e}`),null}},create:async({player_steamid:e,player_name:r,flags:t,immunity:a,server_id:s})=>{try{let[l]=await n.Z.query(`INSERT INTO \`sa_admins\` (${i.join(", ")}, created) VALUES (${i.map(()=>"?").join(", ")}, NOW())`,[e,r,"string"==typeof t?t:t.join(","),a,s&&s.join(","),null]);return l.insertId}catch(e){throw error(`[DB] Error while creating sa_admins: ${e}`),e}},update:async({id:e,player_steamid:r,player_name:t,flags:a,immunity:s,server_id:l})=>{try{let[o]=await n.Z.query(`UPDATE \`sa_admins\` SET ${i.map(e=>`${e} = ?`).join(", ")} WHERE id = ?`,[r,t,"string"==typeof a?a:a.join(","),s,l&&l.join(","),null,e]);return o.affectedRows>0}catch(e){throw error(`[DB] Error while updating admin: ${e}`),e}},delete:async e=>{try{let[r]=await n.Z.query("DELETE FROM `sa_admins` WHERE id = ?",[e]);return r.affectedRows>0}catch(e){throw error(`[DB] Error while deleting admin: ${e}`),e}},count:async()=>{try{let[e]=await n.Z.query("SELECT COUNT(*) FROM `sa_admins`");return e?.[0]?.["COUNT(*)"]}catch(e){return error(`[DB] Error while counting admins: ${e}`),0}}};a()}catch(e){a(e)}})},10836:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>i});var n=t(80846),s=e([n]);n=(s.then?(await s)():s)[0];let i={getAll:async(e,r)=>{try{let[t]=await n.Z.query(`SELECT * FROM \`sa_bans\` ORDER BY \`id\` DESC LIMIT ${r} OFFSET ${(e-1)*r}`);return t}catch(e){return error(`[DB] Error while getting all bans: ${e}`),[]}},getById:async e=>{try{let[r]=await n.Z.query("SELECT * FROM `sa_bans` WHERE id = ?",[e]);if(!r.length||r.length<1)return null;return r[0]}catch(e){return error(`[DB] Error while getting all bans: ${e}`),null}},create:async e=>{let r=Object.keys(e),t=Object.values(e);try{let[e]=await n.Z.query(`INSERT INTO \`sa_bans\` (${r.join(", ")}) VALUES (${r.map(()=>"?").join(", ")})`,t);return e.insertId}catch(e){return error(`[DB] Error while creating bans: ${e}`),null}},update:async(e,r)=>{try{let t=Object.keys(r),[a]=await n.Z.query(`UPDATE \`sa_bans\` SET ${t.map(e=>`${e} = ?`).join(", ")} WHERE id = ?`,[...Object.values(r),e]);return a.affectedRows>0}catch(e){return error(`[DB] Error while updating bans: ${e}`),!1}},delete:async e=>{try{let[r]=await n.Z.query("DELETE FROM `sa_bans` WHERE id = ?",[e]);return r.affectedRows>0}catch(e){return error(`[DB] Error while deleting ban: ${e}`),!1}},count:async()=>{try{let[e]=await n.Z.query("SELECT COUNT(*) FROM `sa_bans`");return e?.[0]?.["COUNT(*)"]}catch(e){return error(`[DB] Error while counting bans: ${e}`),0}}};a()}catch(e){a(e)}})},12568:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>i});var n=t(80846),s=e([n]);n=(s.then?(await s)():s)[0];let i={getAllByServer:async(e,r=10)=>{try{let[t]=await n.Z.query(`SELECT * FROM \`sa_chatlogs\` WHERE serverId = ? ORDER BY \`id\` ASC LIMIT ${r}`,[e]);return t}catch(e){return error(`[DB] Error while getting all chat logs: ${e}`),[]}},getAllByServerAndMinutes:async(e,r)=>{try{let[t]=await n.Z.query("SELECT * FROM `sa_chatlogs` WHERE serverId = ? AND `created` > DATE_SUB(NOW(), INTERVAL ? MINUTE) ORDER BY `id` ASC",[e,r]);return t}catch(e){return error(`[DB] Error while getting all chat logs: ${e}`),[]}},create:async e=>{let r=Object.keys(e),t=Object.values(e);try{let[e]=await n.Z.query(`INSERT INTO \`sa_chatlogs\` (${r.join(", ")}) VALUES (${r.map(()=>"?").join(", ")})`,t);return e.insertId}catch(e){return error(`[DB] Error while creating chatLog: ${e}`),null}}};a()}catch(e){a(e)}})},17121:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>c});var n=t(2782),s=t(80846),i=t(4379),l=e([n,s,i]);[n,s,i]=l.then?(await l)():l;let o={getAll:async(e,r,t)=>{try{let[a]=await s.Z.query(`SELECT * FROM \`cssp_logs\`  ${t&&t.length>2?`WHERE title LIKE '%${t}%' OR message LIKE '%${t}%'`:""} ORDER BY \`id\` DESC LIMIT ${r} OFFSET ${(e-1)*r}`);return a}catch(e){return error(`[DB] Error while getting all logs: ${e}`),[]}},getAllMapped:async(e,r,t)=>{try{let a=await o.getAll(e,r,t),s=[],l=await Promise.all(a.map(async e=>{let r=await i.Z.getById(e.aid);return r&&!s.includes(r.player_steamid)&&s.push(r.player_steamid),{...e,constructor:void 0,admin:r}})),c=await (0,n.From64ToUser)(s);if(!c)return l;return l.forEach(e=>{if(e.admin){let r=c.find(r=>r.steamid===e.admin?.player_steamid);r&&(e.admin.user=r)}}),l}catch(e){return error(`[DB] Error while getting all logs: ${e}`),[]}},getByAdmin:async e=>{try{let[r]=await s.Z.query("SELECT * FROM `cssp_logs` WHERE `aid` = ?",[e]);return r}catch(e){return error(`[DB] Error while getting log: ${e}`),[]}},getByAdmin64:async e=>{try{let{id:r}=await i.Z.getBySteam64(e)||{};if(!r)return null;let[t]=await s.Z.query("SELECT * FROM `cssp_logs` WHERE `aid` = ?",[r]);return t}catch(e){return error(`[DB] Error while getting log: ${e}`),[]}},create:async(e,r,t)=>{try{if(!t)return await s.Z.query("INSERT INTO `cssp_logs` (`title`, `message`) VALUES (?, ?)",[e,r]),!0;let{id:a}=await i.Z.getBySteam64(t)||{};if(!a)return!1;return await s.Z.query("INSERT INTO `cssp_logs` (`title`, `message`, `aid`) VALUES (?, ?, ?)",[e,r,a]),!0}catch(e){return error(`[DB] Error while creating log: ${e}`),!1}},count:async e=>{try{let[r]=await s.Z.query("SELECT COUNT(*) FROM `cssp_logs` "+(e?`WHERE title LIKE '%${e}%' OR message LIKE '%${e}%'`:""));return r?.[0]?.["COUNT(*)"]}catch(e){return error(`[DB] Error while counting logs: ${e}`),0}}},c=o;a()}catch(e){a(e)}})},49710:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>c});var n=t(10143),s=t(80846),i=e([n,s]);[n,s]=i.then?(await i)():i;let l=["title","description","keywords","theme","logo","headerImage","headerCodeHTML","headerCodeCSS","serversGrid"],o=["debugMode","earlyAccessFeatures","serversGrid","showAdminName"],c={getAll:async(e=!0)=>{try{let[r]=await s.Z.query("SELECT * FROM `cssp_settings`"),t=r.reduce((r,t)=>(e&&!l.includes(t.key)||(o.includes(t.key)?r[t.key]="1"===t.value:r[t.key]=t.value),r),{});return{...(0,n.R)(),...t}}catch(e){return error(`[DB] Error while getting all settings: ${e}`),(0,n.R)()}},getByKey:async(e,r=!0)=>{try{if(r&&!l.includes(e))return null;let[t]=await s.Z.query(`SELECT * FROM \`cssp_settings\` WHERE \`key\` LIKE '${e}'`);if(!t.length||t.length<1)return(0,n.R)()[e];if(o.includes(e))return"1"===t[0].value;return t[0].value}catch(r){return error(`[DB] Error while getting setting: ${r}`),(0,n.R)()[e]}},update:async e=>{try{let r=n.Z.parse(e);for await(let[e,t]of Object.entries(r)){let r=new Date().toISOString().slice(0,19).replace("T"," ");await s.Z.query(`INSERT INTO \`cssp_settings\` (\`key\`, \`value\`, \`lastChange\`) 
						VALUES (?, ?, ?) 
						ON DUPLICATE KEY UPDATE \`value\` = ?, \`lastChange\` = ?`,[e,t,r,t,r])}}catch(e){error(`[DB] Error while creating server: ${e}`)}}};a()}catch(e){a(e)}})},87409:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>i});var n=t(80846),s=e([n]);n=(s.then?(await s)():s)[0];let i={getAll:async(e,r)=>{try{let[t]=await n.Z.query(`SELECT * FROM \`sa_mutes\` ORDER BY \`id\` DESC LIMIT ${r} OFFSET ${(e-1)*r}`);return t}catch(e){return error(`[DB] Error while getting all mutes: ${e}`),[]}},getById:async e=>{try{let[r]=await n.Z.query("SELECT * FROM `sa_mutes` WHERE id = ?",[e]);if(!r.length||r.length<1)return null;return r[0]}catch(e){return error(`[DB] Error while getting all mutes: ${e}`),null}},create:async e=>{try{let r=Object.keys(e),t=Object.values(e),[a]=await n.Z.query(`INSERT INTO \`sa_mutes\` (${r.join(", ")}) VALUES (${r.map(()=>"?").join(", ")})`,t);return a.insertId}catch(e){return error(`[DB] Error while creating mutes: ${e}`),null}},update:async(e,r)=>{try{let t=Object.keys(r),[a]=await n.Z.query(`UPDATE \`sa_mutes\` SET ${t.map(e=>`${e} = ?`).join(", ")} WHERE id = ?`,[...Object.values(r),e]);return a.affectedRows>0}catch(e){return error(`[DB] Error while updating mutes: ${e}`),!1}},delete:async e=>{try{let[r]=await n.Z.query("DELETE FROM `sa_mutes` WHERE id = ?",[e]);return r.affectedRows>0}catch(e){return error(`[DB] Error while deleting mute: ${e}`),!1}},count:async()=>{try{let[e]=await n.Z.query("SELECT COUNT(*) FROM `sa_mutes`");return e?.[0]?.["COUNT(*)"]}catch(e){return error(`[DB] Error while counting mutes: ${e}`),0}}};a()}catch(e){a(e)}})},97236:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>i});var n=t(80846),s=e([n]);n=(s.then?(await s)():s)[0];let i={getAll:async()=>{try{let[e]=await n.Z.query("SELECT * FROM `sa_servers`");return e}catch(e){return error(`[DB] Error while getting all servers: ${e}`),[]}},getAllSafe:async()=>{try{let[e]=await n.Z.query("SELECT id, hostname, address FROM `sa_servers`");return e}catch(e){return error(`[DB] Error while getting all servers: ${e}`),[]}},getById:async e=>{try{let[r]=await n.Z.query("SELECT * FROM `sa_servers` WHERE id = ?",[e]);if(!r.length||r.length<1)return null;return r[0]}catch(e){return error(`[DB] Error while getting all servers: ${e}`),null}},create:async({hostname:e,address:r})=>{try{let[t]=await n.Z.query("INSERT INTO `sa_servers` (hostname, address) VALUES(?, ?)",[e,r]);return t.insertId}catch(e){throw error(`[DB] Error while creating server: ${e}`),e}},update:async(e,r)=>{try{let t=Object.keys(r),a=Object.values(r),[s]=await n.Z.query(`UPDATE \`sa_servers\` SET ${t.map(e=>`${e} = ?`).join(", ")} WHERE id = ?`,[...a,e]);return s.affectedRows>0}catch(e){throw error(`[DB] Error while updating server: ${e}`),e}},delete:async e=>{try{let[r]=await n.Z.query("DELETE FROM `sa_servers` WHERE id = ?",[e]);return r.affectedRows>0}catch(e){throw error(`[DB] Error while deleting server: ${e}`),e}},count:async()=>{try{let[e]=await n.Z.query("SELECT COUNT(*) FROM `sa_servers`");return e?.[0]?.["COUNT(*)"]}catch(e){return error(`[DB] Error while counting admins: ${e}`),0}}};a()}catch(e){a(e)}})},6995:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>g});var n=t(97236),s=t(10836),i=t(87409),l=t(49710),o=t(4379),c=t(28609),E=t(12568),u=t(17121),d=e([n,s,i,l,o,c,E,u]);[n,s,i,l,o,c,E,u]=d.then?(await d)():d;let g={servers:n.Z,admins:o.Z,adminGroups:c.Z,bans:s.Z,mutes:i.Z,chatLogs:E.Z,settings:l.Z,logs:u.Z};a()}catch(e){a(e)}})},56275:(e,r,t)=>{t.a(e,async(e,r)=>{try{var a=t(97564),n=t(6995),s=t(899),i=e([a,n,s]);[a,n,s]=i.then?(await i)():i,global.log=async(e,...r)=>{console.log(a.default.cyanBright("[LOG] ")+e,...r);let t=r?r.map(e=>`\`\`\`${e}\`\`\``):"",i=await n.Z.settings.getByKey("discordWebhook",!1);i&&(0,s.Z)({url:i,embeds:[{title:"**▬▬▬▬▬ [LOG] ▬▬▬▬▬**",color:5352959,description:e+t,timestamp:new Date().toISOString()}]})},global.debug=async(e,...r)=>{if(!await n.Z.settings.getByKey("debugMode",!1))return;let t=(Error().stack||"").split("\n").slice(1).join("\n").split("\n")[1].split(" ").slice(5).join(" ").split(" ")[0];console.debug(a.default.yellowBright("[DEBUG]")+` (${t}) `,e,...r)},global.error=async(e,...r)=>{console.error(a.default.redBright("[ERROR] ")+e,...r);let t=r?r.map(e=>`\`\`\`${e}\`\`\``):"",i=await n.Z.settings.getByKey("discordWebhook",!1);i&&(0,s.Z)({url:i,embeds:[{title:"**▬▬▬▬▬ [ ERROR ] ▬▬▬▬▬**",color:16732497,description:e+t,timestamp:new Date().toISOString()}]})},global.warn=async(e,...r)=>{console.warn(a.default.yellowBright("[WARN] ")+e,...r);let t=await n.Z.settings.getByKey("discordWebhook",!1);t&&(0,s.Z)({url:t,embeds:[{title:"**▬▬▬▬▬ [ WARN ] ▬▬▬▬▬**",color:16751441,description:e+"\n"+`\`\`\`${r.join("\n")}\`\`\``,timestamp:new Date().toISOString()}]})},r()}catch(e){r(e)}})},61247:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>o});var n=t(9926),s=t(48612),i=e([n]);let l=(n=(i.then?(await i)():i)[0]).z.object({STEAM_API_KEY:n.z.string().min(1),SESSION_SECRET:n.z.string().min(1),DOMAIN:n.z.string().min(1),DB_HOST:n.z.string().min(1),DB_USER:n.z.string().min(1),DB_PASSWORD:n.z.string().min(1),DB_DATABASE:n.z.string().min(1),DB_PORT:n.z.string().min(1)}),o=()=>{try{l.parse(process.env)}catch(r){let e=(0,s.fromZodError)(r);error(`[ENV] .env file is missing or its missing one of the following values, please check .env.example file for more info:

${e.toString()}

`),process.exit(1)}};a()}catch(e){a(e)}})},80846:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>E});var n=t(62418),s=t(61247),i=t(56275),l=e([s,i]);[s,i]=l.then?(await l)():l,(0,s.Z)();let o=(0,n.createPool)({host:process.env.DB_HOST,user:process.env.DB_USER,password:process.env.DB_PASSWORD,database:process.env.DB_DATABASE,port:parseInt(process.env.DB_PORT||"3306")}),c=!1;o.on("connection",async e=>{if(!c){c=!0,debug("[DB] Connected to database");try{e.query(`CREATE TABLE IF NOT EXISTS \`${process.env.DB_DATABASE}\`.\`cssp_settings\` (\`key\` VARCHAR(500) NOT NULL , \`value\` TEXT NOT NULL , \`lastChange\` DATE NOT NULL , PRIMARY KEY (\`key\`)) ENGINE = InnoDB;`),e.query(`CREATE TABLE IF NOT EXISTS \`${process.env.DB_DATABASE}\`.\`cssp_logs\` (\`id\` INT NOT NULL AUTO_INCREMENT , \`title\` TEXT NOT NULL , \`message\` TEXT NOT NULL , \`aid\` int(11) NULL DEFAULT NULL, \`time\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (\`id\`)) ENGINE = InnoDB;`),e.query(`CREATE TABLE IF NOT EXISTS \`${process.env.DB_DATABASE}\`.\`sa_admins_groups\` (\`id\` VARCHAR(50) NOT NULL, \`name\` TEXT NOT NULL , \`flags\` TEXT NOT NULL , \`immunity\` varchar(64) NOT NULL DEFAULT '0' ,\`created\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE = InnoDB;`),e.query(`ALTER TABLE \`${process.env.DB_DATABASE}\`.\`sa_mutes\` ADD COLUMN IF NOT EXISTS \`unmute_reason\` TEXT NULL DEFAULT NULL AFTER \`reason\`, ADD COLUMN IF NOT EXISTS \`comment\` TEXT NULL DEFAULT NULL AFTER \`unmute_reason\`;`),e.query(`ALTER TABLE \`${process.env.DB_DATABASE}\`.\`sa_bans\` ADD COLUMN IF NOT EXISTS \`unban_reason\` TEXT NULL DEFAULT NULL AFTER \`reason\`, ADD COLUMN IF NOT EXISTS \`comment\` TEXT NULL DEFAULT NULL AFTER \`unban_reason\`;`),e.query("ALTER TABLE `sa_mutes` CHANGE `type` `type` ENUM('GAG','MUTE','SILENCE','') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'GAG';")}catch(e){error(`[DB] Error while creating tables: ${e}`)}}});let E=o;a()}catch(e){a(e)}})},74186:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>E});var n=t(60892),s=t(45616),i=t(429),l=t.n(i),o=e([s]);s=(o.then?(await o)():o)[0];let c=(0,s.default)();c.use(l()({secret:process.env.SESSION_SECRET,maxAge:10368e6})),c.use(n.Z.initialize()),c.use(n.Z.session());let E=c;a()}catch(e){a(e)}})},60892:(e,r,t)=>{t.d(r,{Z:()=>l});var a=t(3511),n=t.n(a),s=t(53686);if(n().serializeUser(async(e,r)=>{r(null,e)}),n().deserializeUser(async(e,r)=>{r(null,e)}),!process.env.STEAM_API_KEY)throw Error("No Steam API key provided");if(!process.env.DOMAIN)throw Error("No DOMAIN provided");let i=process.env.DOMAIN;i.startsWith("http")||(i=`https://${i}`),n().use(new s.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY,stateless:!0},(e,r,t)=>(r.identifier=e,t(null,r))));let l=n()},10143:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{R:()=>o,Z:()=>c});var n=t(71777),s=t(9926),i=e([s]);let l=(s=(i.then?(await i)():i)[0]).z.object({title:s.z.string().optional().default("CSS-Panel"),description:s.z.string().optional().default(""),keywords:s.z.string().optional().default("gaming, cs2"),theme:s.z.string().default(n.M[0].value),logo:s.z.string().optional().default(""),debugMode:s.z.boolean().optional().default(!1),headerImage:s.z.string().optional().default("https://prosettings.net/wp-content/uploads/inferno-in-cs2-2.jpg"),headerCodeHTML:s.z.string().optional().default(""),headerCodeCSS:s.z.string().optional().default(""),earlyAccessFeatures:s.z.boolean().optional().default(!1),serversGrid:s.z.boolean().optional().default(!0),showAdminName:s.z.boolean().optional().default(!1),language:s.z.string().optional().default("en"),discordWebhook:s.z.string().optional().default("")}),o=()=>l.parse({}),c=l;a()}catch(e){a(e)}})},25828:(e,r)=>{var t;Object.defineProperty(r,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},88667:(e,r,t)=>{e.exports=t(20145)}};