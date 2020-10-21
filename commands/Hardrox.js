const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('هاردروكس')
.setDescription('To Defete Hardrox You Can Use Magic Heros')
.setImage('https://f.top4top.io/p_1644l08k11.jpg')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xf2efec)
    message.channel.send(embed);

}

module.exports.config = {
name: "Hardrox",
description: "say Hardrox",
usage: "?Hardrox",
accessableby: "Members",
aliases: ["hardrox","هاردروكس"]
}