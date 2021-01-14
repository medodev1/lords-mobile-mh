const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('ملكة النحل')
.setDescription('لهزيمه ملكه النحل يجب استخدام ابطال البراعه')
.setImage('https://i.top4top.io/p_1840zxqtj4.png')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0xfbe000)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')

}

module.exports.config = {
name: "QueenBee",
description: "يظهر لك افضل الابطال لصيد ملكه النحل",
usage: "-QueenBee",
accessableby: "Members",
aliases: ["queenbee","ملكه-النحل","ملكه"]
}