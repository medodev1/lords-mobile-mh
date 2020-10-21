const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('جناح الثلج')
.setDescription('To Defete BlackWing You Can Use AGI Heros')
.setImage('https://l.top4top.io/p_1644fr2if1.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0x111111)
    message.channel.send(embed);

}

module.exports.config = {
name: "blackwing",
description: "say BlackWing",
usage: "?BlackWing",
accessableby: "Members",
aliases: ["BlackWing","تنين"]
}