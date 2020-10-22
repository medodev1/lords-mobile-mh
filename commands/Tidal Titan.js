const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('العملاق تيدال')
.setDescription('لهزيمه العملاق تيدال يجب استخدام ابطال الذكاء')
.setImage('https://b.top4top.io/p_16440wasu2.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0x03e0e8)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "TidalTitan",
description: "يظهر لك افضل الابطال لصيد العملاق تيدال",
usage: "-TidalTitan",
accessableby: "Members",
aliases: ["tidaltitan" , "تيدال" , "tidal"]
}