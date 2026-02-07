 const fs = require("fs");
module.exports.config = {
	name: "owner",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐒𝐇𝐈𝐕𝐀𝐌", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("boss") ||
     react.includes("SHIVAM") || 
react.includes("owner")) {
		var msg = {
				body: "┏━━━━━┓
     SHIVAM-SAINI                    ✧═══•❁🙊❁•═══✧
┗━━━━━┛


         ❁ ═════════ ❃•❃ ═════════ ❁
                            ♥️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ♥️
         ❁ ═════════ ❃•❃ ═════════ ❁



🌺  [ 1 ]  𒁍 BOT NAME   →   ♥️•𓆩𝐇𝐞̽͜͡𝐚̽𝐫𝐭𝐛𝐞̽͜͡͡𝐚̽𝐭 ᭄𓆪•♥️
🌺  [ 2 ]  𒁍 BOT ADMIN   →   SHIVAM-SAINI
🌺  [ 3 ]  𒁍 BOT  PREFIX   →   [ # ]
🌺  [ 4 ]  𒁍  DATE   → 11/01/2026
🌺  [ 5 ]  𒁍  BOT RUNNING TIME  →  [ 0:2:48 ]
🌺  [ 6 ]  𒁍  https://www.facebook.com/shivamssxd001
🌺  [ 7 ]  𒁍 WHATSAPP → [ +91 9149xxxx53 ]
🌺  [ 8 ]  𒁍 INSTAGRAM →  SAINI_UK07
🌺  [ 9 ]  𒁍 YOUTUBE  →  SHIVAM SAINI XD
🌺  [ 10 ]  𒁍 GITHUB  →  @SAINI - 001
🌺THANKYOU FOR USING ♥️•𓆩𝐇𝐞̽͜͡𝐚̽𝐫𝐭𝐛𝐞̽͜͡͡𝐚̽𝐭 ᭄𓆪•♥️ BOT♥️",
				attachment: fs.createReadStream(__dirname + `/noprefix/owner.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
