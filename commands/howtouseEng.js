const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle('How to use the bot')
.setDescription('**First you must use the Prefix which is ? \n\n second thing you must write the name of the monster like ?Voodoo like the photo :point_down: \n\n to know all monsters type ?e **')
.setTimestamp()
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xe69e26)
.setImage('https://g.top4top.io/p_1649jq84y1.png')
message.author.send(embed);
const embed2 = new Discord.MessageEmbed()
.setDescription('Please Check Your Dm \n\n If you didnt resive any message please allow this permission')
.setImage('https://a.top4top.io/p_16497yea61.png')
message.channel.send(embed2);
}

module.exports.config = {
name: "howtouseEnglish",
description: "say how",
usage: "?how",
accessableby: "Members",
aliases: ["HTUE","htue"]
}