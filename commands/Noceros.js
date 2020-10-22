const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('نوسيروس')
.setDescription('لهزيمه نوسيروس يجب استخدام ابطال الذكاء')
.setImage('https://l.top4top.io/p_1644trd051.jpg')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0x19e9b6)

let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')

}

module.exports.config = {
name: "Noceros",
description: "يظهر لك افضل الابطال لصيد نوسيروس",
usage: "-Noceros",
accessableby: "Members",
aliases: ["noceros" , "نوسيروس"]
}