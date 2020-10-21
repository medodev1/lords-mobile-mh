const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('البومة')
.setDescription('To Defete HootClaw You Can Use Magic Heros')
.setImage('https://c.top4top.io/p_175559avc1.jpg')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0x19e9b6)

    message.channel.send(embed);

}

module.exports.config = {
name: "Hootclaw",
description: "say 1",
usage: "?1",
accessableby: "Members",
aliases: ["البومة" , "البومه"]
}