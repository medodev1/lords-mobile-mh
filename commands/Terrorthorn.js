const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('شوكة الرعب')
.setDescription('لهزيمه شوكه الرعب يجب استخدام ابطال البراعه')
.setImage('https://a.top4top.io/p_1644keq7k1.png')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0xc81313)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "Terrorthorn",
description: "يظهر لك افضل الابطال لصيد شوكه الرعب",
usage: "-Terrorthorn",
accessableby: "Members",
aliases: ["terrorthorn","شوكه","شوكة"]
}