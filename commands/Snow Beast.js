const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('وحش الثلج')
.setDescription('لهزيمه وحش الثلج يجب استخدام ابطال البراعه')
.setImage('https://e.top4top.io/p_1840ft3gh7.jpg')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0xeeebe4)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "SnowBeast",
description: "يظهر لك افضل الابطال لصيد وحش الثلج",
usage: "-SnowBeast",
accessableby: "Members",
aliases: ["snowbeast","وحش-القلج"]
}