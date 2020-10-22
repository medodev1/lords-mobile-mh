const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle(' تنين اليشم')
.setDescription('لهزيمه تنين اليشم يجب استخدام ابطال الذكاء')
.setImage('https://g.top4top.io/p_16444xykm1.jpg')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0x56be32)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')

}

module.exports.config = {
name: "JadeWyrm",
description: "يظهر لك افضل الابطال لصيد تنين اليشم",
usage: "-JadeWyrm",
accessableby: "Members",
aliases: ["jadewyrm","اليشم"]
}