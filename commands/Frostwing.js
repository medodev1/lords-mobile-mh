const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('Frostwing')
.setDescription('To Defete Frostwing You Can Use AGI Heros')
.setImage('https://b.top4top.io/p_1644qyv1b3.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0x90a08e)

    message.channel.send(embed);

}

module.exports.config = {
name: "Frostwing",
description: "say Frostwing",
usage: "?Frostwing",
accessableby: "Members",
aliases: ["frostwing","جناح"]
}