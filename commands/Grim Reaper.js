const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('حاصد الارواح')
.setDescription('To Defete Grim Reaper You Can Use AGI Heros')
.setImage('https://d.top4top.io/p_1644az2k55.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xfff600)

    message.channel.send(embed);

}

module.exports.config = {
name: "GrimReaper",
description: "say Grim Reaper",
usage: "?Grim Reaper",
accessableby: "Members",
aliases: ["grimreaper","حاصد"]
}