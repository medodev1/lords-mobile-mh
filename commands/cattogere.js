const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('الكوخ المتوحش')
.setDescription('لهزيمه الكوخ المتوحش يجب استخدام ابطال البراعه')
.setImage('https://b.top4top.io/p_1827zwg8x1.jpg')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0x111111)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "cottageroar",
description: "يظهر لك افضل الابطال لصيد الكوخ المتوحش",
usage: "-Cottageroar",
accessableby: "Members",
aliases: ["Cottageroar","الكوخ"]
}