const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle(' تنين اليشم')
.setDescription('To Defete Jade Wyrm You Can Use Magic Heros')
.setImage('https://g.top4top.io/p_16444xykm1.jpg')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0x56be32)
    message.channel.send(embed);

}

module.exports.config = {
name: "JadeWyrm",
description: "say Jade Wyrm",
usage: "?Jade Wyrm",
accessableby: "Members",
aliases: ["jadewyrm","اليشم"]
}