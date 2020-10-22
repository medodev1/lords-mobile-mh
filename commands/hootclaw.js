const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('البومة')
.setDescription('لهزيمه البومه يجب استخدام ابطال الذكاء')
.setImage('https://c.top4top.io/p_175559avc1.jpg')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0x8d3d3e)

let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "Hootclaw",
description: "يظهر لك افضل الابطال لصيد البومه",
usage: "-Hootclaw",
accessableby: "Members",
aliases: ["البومة" , "البومه"]
}