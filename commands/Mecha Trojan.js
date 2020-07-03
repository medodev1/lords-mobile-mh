const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('Mecha Trojan')
.setDescription('To Defete Mecha Trojan You Can Use Magic Heros')
.setImage('https://g.top4top.io/p_1644rs1tq8.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xf4e10c)

    message.channel.send(embed);

}

module.exports.config = {
name: "MechaTrojan",
description: "say Mecha Trojan",
usage: "?Mecha Trojan",
accessableby: "Members",
aliases: ["mechatrojan","حصان" , "طرواده"]
}