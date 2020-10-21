const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('ساحرة الشر ')
.setDescription('To Defete Bon Appeti You Can Use AGI Heros')
.setImage('https://a.top4top.io/p_16447gxk62.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0x12ff00)

    message.channel.send(embed);

}

module.exports.config = {
name: "bonappeti",
description: "say Bon Appeti",
usage: "?Bon Appeti",
accessableby: "Members",
aliases: ["BonAppeti","الساحره" , "الساحرة"]
}