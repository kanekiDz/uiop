const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("663762134274146311")
setInterval(function() {
channel.send(`احترم خصوصية الآخرين وعدم احراجهم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);