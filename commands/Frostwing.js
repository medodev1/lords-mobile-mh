const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('جناح الثلج')
.setDescription('لهزيمه جناح الثلج يجب استخدام ابطال البراعه')
.setImage('https://f.top4top.io/p_1840q40oh1.png')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0x90a08e)

let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "Frostwing",
description: "يظهر لك افضل الابطال لصيد جناح الثلج",
usage: "-Frostwing",
accessableby: "Members",
aliases: ["frostwing","جناح-الثلج"]
}