const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('ساحرة الشر ')
.setDescription('لهزيمه ساحره الشر يجب استخدام ابطال البراعه')
.setImage('https://l.top4top.io/p_1840x40f72.png')
.setFooter(`بطلب من ${message.author.username}`)
.setColor(0x12ff00)

let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')

}

module.exports.config = {
name: "bonappeti",
description: "يظهر لك افضل الابطال لصيد ساحره الشر",
usage: "-BonAppeti",
accessableby: "Members",
aliases: ["BonAppeti","ساحرة-الشر" , "الساحرة" ,"ساحره","ساحرة"]
}