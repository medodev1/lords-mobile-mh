const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('سبارفنغ')
.setDescription('To Defete SaberFang You Can Use Magic Heros')
.setImage('https://i.top4top.io/p_1644ok1u910.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xecde6a)
    message.channel.send(embed);

}

module.exports.config = {
name: "SaberFang",
description: "say SaberFang",
usage: "?SaberFang",
accessableby: "Members",
aliases: ["saberfang" , "سابرفنغ"]
}