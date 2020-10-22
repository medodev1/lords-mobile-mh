const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle(' عنكبوت الجحيم')
.setDescription('لهزيمه عنكبوت الجحيم يجب استخدام ابطال البراعه')
.setImage('https://f.top4top.io/p_16440lxrj7.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xf50b0b)
let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "HellDrider",
description: "يظهر لك افضل الابطال لصيد عنكبوت الجحيم",
usage: "?Hell Drider",
accessableby: "Members",
aliases: ["helldrider","العنكبوت" ,"عنكبوت"]
}