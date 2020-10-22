const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('الدوده العملاقه')
.setDescription('لهزيمه الدوده العملاقه يجب استخدام ابطال الذكاء')
.setImage('https://j.top4top.io/p_16449d63c1.jpg')
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
aliases: ["MegaMaggot" , "الدوده"]
}