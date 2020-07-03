const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
        message.channel.send('**Pong!**').then(msg => msg.delete({timeout: 5000}));

         if (message.author.bot) return;
         setTimeout(() => {
           
           message.channel.send( new Date().getTime() - message.createdTimestamp - 1000 + "ms"
           );
         }, 1000);
        }

module.exports.config = {
    name: "ping",
    description: "say ping",
    usage: "?ping",
    accessableby: "Members",
    aliases: []
}