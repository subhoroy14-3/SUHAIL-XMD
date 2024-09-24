const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://romi:romi@cluster0.pwuoewh.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "8945999655";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918945999655";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "true" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_07_09_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxLFxuICAgICAgICA2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI2LFxuICAgICAgICA2MixcbiAgICAgICAgODYsXG4gICAgICAgIDU0LFxuICAgICAgICA3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM2LFxuICAgICAgICA2NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDc0LFxuICAgICAgICA2NixcbiAgICAgICAgNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NixcbiAgICAgICAgMTIyLFxuICAgICAgICAzMSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg5LFxuICAgICAgICA0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcyLFxuICAgICAgICA4MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY4LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDcxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgODcsXG4gICAgICAgIDgwLFxuICAgICAgICA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYxLFxuICAgICAgICA2OSxcbiAgICAgICAgNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInEvNW9ENVNNVE0ya2FYOGtoaVgzcDF0V0c1Y0VsRm1hd1NwQTBDSHJ4ZVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdocndVR3FIVER5dkZFRjBJanNuV1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWUxNDZhZGUtMzU5OC00OTUwLWIwMzYtNDhlYmE3NzZiMGU4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNCxcbiAgICAgIDEzOCxcbiAgICAgIDcxLFxuICAgICAgMjQ0LFxuICAgICAgMjYsXG4gICAgICAyNTMsXG4gICAgICAyNDYsXG4gICAgICAyNCxcbiAgICAgIDEyMSxcbiAgICAgIDI1LFxuICAgICAgMzQsXG4gICAgICAyNyxcbiAgICAgIDIyMixcbiAgICAgIDE5NyxcbiAgICAgIDY4LFxuICAgICAgOTEsXG4gICAgICAxMTQsXG4gICAgICAxMDgsXG4gICAgICAxMzAsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICAxNDYsXG4gICAgICAxOTAsXG4gICAgICAxMDYsXG4gICAgICAyMixcbiAgICAgIDEwOSxcbiAgICAgIDg4LFxuICAgICAgMTMzLFxuICAgICAgMTY5LFxuICAgICAgMTY3LFxuICAgICAgNjYsXG4gICAgICAyMjQsXG4gICAgICA3NixcbiAgICAgIDEwMixcbiAgICAgIDE4NCxcbiAgICAgIDM5LFxuICAgICAgMTU1LFxuICAgICAgMjU0LFxuICAgICAgOCxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3MzVWR0JaMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4OTQ1OTk5NjU1Ojk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU3ViaG9cIixcbiAgICBcImxpZFwiOiBcIjMyMDU4MTcyODEzMzEzOjk1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05tai90WUJFSUwyeUxjR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieFZ4cW1jajRjOEhHMHhJZ2tvWjVGcWEzbXFEbW1HaVZOSCs0d2xpeVd6az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTTC9IU2FuSE5DR1RPL3NFMnNtdHlseXhQL29YYnAyMFByUnQwNVNvTjdvbDR1ZTVNWDZab09zcHdwcitmMlA2WVFmdXBqZTduS1RzK24zRWxtb0ZCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrTTZGQ0d3a0NiUEVmVktReGdyMU56TWxnMWx1ZWtDQ1VQWGcza0RHQTB1a1FUTjFJMlJvaU5XNmtVWjM1K3JKcEJPdkdCTE90akR0MmxSNmVvTFVpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTg5NDU5OTk2NTU6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3MTUwODU0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTm1WXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFObVYuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "SUBHO ROY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
