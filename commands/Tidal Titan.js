const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('العملاق تيدال')
.setDescription('لهزيمه العملاق تيدال يجب استخدام ابطال الذكاء')
.setImage('https://a.top4top.io/p_1840s9tcj8.png')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0x03e0e8)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "TidalTitan",
description: "يظهر لك افضل الابطال لصيد العملاق تيدال",
usage: "-TidalTitan",
accessableby: "Members",
aliases: ["tidaltitan" , "العملاق-تيدال" , "tidal"]
}