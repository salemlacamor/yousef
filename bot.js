const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("507246129235361821")
setInterval(function() {
channel.send(`salemsalemsalemsalemsalemsalemsalemsalemsalem`);
}, 30)
})

client.login(process.env.BOT_TOKEN);