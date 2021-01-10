const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('العملاق الاعور')
.setDescription('لهزيمه العملاق اللاعور يجب استخدام ابطال الذكاء')
.setImage('https://l.top4top.io/p_1836zbo4e1.png')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0xff8400)

let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "Gargantua",
description: "يظهر لك افضل الابطال لصيد العملاق الاعور",
usage: "-Gargantua",
accessableby: "Members",
aliases: ["gargantua","العملاق"]
}