const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('الدوده العملاقه')
.setDescription('To Defete Mega Maggot You Can Use Magic Heros')
.setImage('https://j.top4top.io/p_16449d63c1.jpg')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xa75f18)
    message.channel.send(embed);

}

module.exports.config = {
name: "megamaggot",
description: "say Mega Maggot",
usage: "?Mega Maggot",
accessableby: "Members",
aliases: ["MegaMaggot" , "الدوده"]
}