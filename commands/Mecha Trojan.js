const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('حصان طرواده')
.setDescription('لهزيمه حصان طرواده يجب عليك استخدام ابطال الذكاء')
.setImage('https://g.top4top.io/p_1644rs1tq8.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xf4e10c)

let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')

}

module.exports.config = {
name: "MechaTrojan",
description: "يظهر لك افضل الابطال لصيد حصان طرواده",
usage: "-MechaTrojan",
accessableby: "Members",
aliases: ["mechatrojan","حصان" , "طرواده"]
}