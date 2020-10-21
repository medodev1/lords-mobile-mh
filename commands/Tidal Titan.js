const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('العملاق تيدال')
.setDescription('To Defete Tidal Titan You Can Use Magic Heros')
.setImage('https://b.top4top.io/p_16440wasu2.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0x03e0e8)
    message.channel.send(embed);

}

module.exports.config = {
name: "TidalTitan",
description: "say Tidal Titan",
usage: "?Tidal Titan",
accessableby: "Members",
aliases: ["tidaltitan" , "تيدال" , "tidal"]
}