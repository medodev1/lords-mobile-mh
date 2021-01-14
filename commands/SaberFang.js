const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('سبارفنغ')
.setDescription('لهزيمه سبارفنغ يجب استخدام ابطال الذكاء')
.setImage('https://d.top4top.io/p_1840eyuyb3.png')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0xecde6a)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')

}

module.exports.config = {
name: "SaberFang",
description: "يظهر لك افضل الابطال لصيد سبارفنغ",
usage: "-SaberFang",
accessableby: "Members",
aliases: ["saberfang" , "سابرفنغ"]
}