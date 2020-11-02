const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('اضغط هنا للتوجه لمركز التبديل')
.setURL('http://lordsmobile.igg.com/gifts/?lang=arb')
.setFooter(`بطلب من ${message.author.username}`)


let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "redeem",
description: "",
usage: "-تبديل",
accessableby: "Members",
aliases: ["تبديل"]
}