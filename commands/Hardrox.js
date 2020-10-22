const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('هاردروكس')
.setDescription('لهزيمه هاردروكس يجب استخدام ابطال الذكاء')
.setImage('https://f.top4top.io/p_1644l08k11.jpg')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0xf2efec)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "Hardrox",
description: "يظهر لك افضل الابطال لصيد هاردروكس",
usage: "-Hardrox",
accessableby: "Members",
aliases: ["hardrox","هاردروكس"]
}