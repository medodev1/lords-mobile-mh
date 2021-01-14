const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle(' عنكبوت الجحيم')
.setDescription('لهزيمه عنكبوت الجحيم يجب استخدام ابطال البراعه')
.setImage('https://h.top4top.io/p_1840i6rex10.png')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0xf50b0b)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "HellDrider",
description: "يظهر لك افضل الابطال لصيد عنكبوت الجحيم",
usage: "?Hell Drider",
accessableby: "Members",
aliases: ["helldrider","عنكبوت-الجحيم"]
}