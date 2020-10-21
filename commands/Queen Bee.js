const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('ملكة النحل')
.setDescription('To Defete Queen Bee You Can Use AGI Heros')
.setImage('https://h.top4top.io/p_16441kpbl9.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xfbe000)
    message.channel.send(embed);

}

module.exports.config = {
name: "QueenBee",
description: "say Queen Bee",
usage: "?Queen Bee",
accessableby: "Members",
aliases: ["queenbee","النحله"]
}