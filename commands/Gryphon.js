const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('Gryphon')
.setDescription('To Defete Gryphon You Can Use AGI Heros')
.setImage('https://k.top4top.io/p_16442jogq1.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0x8c6239)

    message.channel.send(embed);

}

module.exports.config = {
name: "gryphon",
description: "say gryphon",
usage: "?gryphon",
accessableby: "Members",
aliases: ["Gryphon","العنقاء"]
}