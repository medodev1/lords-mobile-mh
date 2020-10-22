const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('حاصد الارواح')
.setDescription(' لهزيمه حاصد الارواح يجب استخدام ابطال البراعه')
.setImage('https://d.top4top.io/p_1644az2k55.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xfff600)

let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')

}

module.exports.config = {
name: "GrimReaper",
description: "يظهر لك افضل الابطال لصد حاصد الارواح",
usage: "-GrimReaper",
accessableby: "Members",
aliases: ["grimreaper","حاصد"]
}