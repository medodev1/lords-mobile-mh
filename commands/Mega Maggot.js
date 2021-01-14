const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('الدوده العملاقه')
.setDescription('لهزيمه الدوده العملاقه يجب استخدام ابطال الذكاء')
.setImage('https://l.top4top.io/p_1840p35wp7.jpg')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0xa75f18)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "megamaggot",
description: "يظهر لك افضل الابطال لصيد الدودة العملاقة",
usage: "-MegaMaggot",
accessableby: "Members",
aliases: ["MegaMaggot" , "الدوده-العملاقه"]
}