const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('Voodoo Shaman')
.setDescription('To Defete Voodoo Shaman You Can Use AGI Heros')
.setImage('https://c.top4top.io/p_1644qknw43.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0x36cf44)
    message.channel.send(embed);

}

module.exports.config = {
name: "VoodooShaman",
description: "say Voodoo Shaman",
usage: "?Snow Voodoo Shaman",
accessableby: "Members",
aliases: ["voodooshaman","الكاهن" , "voodoo"]
}