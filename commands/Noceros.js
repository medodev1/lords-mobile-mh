const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('Noceros')
.setDescription('To Defete Noceros You Can Use Magic Heros')
.setImage('https://l.top4top.io/p_1644trd051.jpg')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0x19e9b6)

    message.channel.send(embed);

}

module.exports.config = {
name: "Noceros",
description: "say Noceros",
usage: "?Noceros",
accessableby: "Members",
aliases: ["noceros" , "نوسيروس"]
}