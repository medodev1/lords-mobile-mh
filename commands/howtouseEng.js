const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle('How to use the bot')
.setDescription('**First you must user the Prefix which is ? \n\n second thing you must write the name of the monster like ?Voodoo you can know the available monster by typing ?enghelp**')
.setTimestamp()
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xe69e26)
message.author.send(embed);
const embed2 = new Discord.MessageEmbed()
.setDescription('Please Check Your Dm \n\n If you didnt resive any message please allow this permission')
.setImage('https://a.top4top.io/p_16497yea61.png')
}

module.exports.config = {
name: "howtouseEnglish",
description: "say how",
usage: "?how",
accessableby: "Members",
aliases: ["HTUE","htue"]
}