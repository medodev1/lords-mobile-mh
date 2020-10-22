const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('العنقاء')
.setDescription('لهزيمه العنقاء يجب استخدام ابطال البراعه')
.setImage('https://k.top4top.io/p_16442jogq1.png')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0x8c6239)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "gryphon",
description: "يظهر لك افضل الابطال لصيد العنقاء",
usage: "-gryphon",
accessableby: "Members",
aliases: ["Gryphon","العنقاء"]
}