const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
module.exports.run = async (bot, message, args) => {
let embed2 = new Discord.MessageEmbed()
.setDescription("``You Do Not Have Access To Use This Command!!!``")
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(embed2).then(msg => msg.delete({timeout: 5000}));
    }
  message.delete()
  let desc = args.join(" ")
  const rEmbed = new Discord.MessageEmbed()
  .setFooter(`Send by ${message.author.username}`)
  .setColor(0x84ff00)
  .setDescription(desc)
  message.channel.send(rEmbed)
        

}

module.exports.config = {
name: "say",
description: "say say",
usage: "?say",
accessableby: "Admins",
aliases: []
}