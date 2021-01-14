const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('حصان طرواده')
.setDescription('لهزيمه حصان طرواده يجب عليك استخدام ابطال الذكاء')
.setImage('https://h.top4top.io/p_1840tq6g83.png')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0xf4e10c)

let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')

}

module.exports.config = {
name: "MechaTrojan",
description: "يظهر لك افضل الابطال لصيد حصان طرواده",
usage: "-MechaTrojan",
accessableby: "Members",
aliases: ["mechatrojan","حصان-طرواده" , "طرواده"]
}