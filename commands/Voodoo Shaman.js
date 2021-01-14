const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('الكاهن فودو')
.setDescription('لهزيمه الكاهن فودو يجب استخدام ابطال البراعه')
.setImage('https://c.top4top.io/p_1644qknw43.png')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0x36cf44)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "VoodooShaman",
description: "يظهر لك افضل الابطال لصيد الكاهن فودو",
usage: "-VoodooShaman",
accessableby: "Members",
aliases: ["voodooshaman","الكاهن-فودو" , "voodoo"]
}