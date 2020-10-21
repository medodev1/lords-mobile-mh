const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('وحش الثلج')
.setDescription('To Defete Snow Beast You Can Use AGI Heros')
.setImage('https://i.top4top.io/p_1644zyzmh1.jpg')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xeeebe4)
    message.channel.send(embed);

}

module.exports.config = {
name: "SnowBeast",
description: "say Snow Beast",
usage: "?Snow Beast",
accessableby: "Members",
aliases: ["snowbeast","وحش"]
}