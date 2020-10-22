const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('تنين الظلام')
.setDescription('لهزيمه تنين الظلام يجب استخدام ابطال البراعه')
.setImage('https://l.top4top.io/p_1644fr2if1.png')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0x111111)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "blackwing",
description: "يظهر لك افضل الابطال لصيد تنين الظلام",
usage: "-BlackWing",
accessableby: "Members",
aliases: ["BlackWing","تنين"]
}