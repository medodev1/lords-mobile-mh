const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('Hell Drider')
.setDescription('To Defete Hell Drider You Can Use AGI Heros')
.setImage('https://f.top4top.io/p_16440lxrj7.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xf50b0b)
    message.channel.send(embed);

}

module.exports.config = {
name: "HellDrider",
description: "say Hell Drider",
usage: "?Hell Drider",
accessableby: "Members",
aliases: ["helldrider","العنكبوت"]
}