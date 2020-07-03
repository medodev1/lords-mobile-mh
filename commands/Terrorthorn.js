const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('Terrorthorn')
.setDescription('To Defete Terrorthorn You Can Use AGI Heros')
.setImage('https://a.top4top.io/p_1644keq7k1.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xc81313)
    message.channel.send(embed);

}

module.exports.config = {
name: "Terrorthorn",
description: "say Terrorthorn",
usage: "?Snow Terrorthorn",
accessableby: "Members",
aliases: ["terrorthorn","شوكه"]
}