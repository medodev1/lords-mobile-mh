const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
module.exports.run = async (bot, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle('please chose your language \n\n من فضلك اختار لغتك')
.setDescription('`For English type ?EngHelp \n ?ArbHelp للعربيه اكتب`\n\n **There is ping command try it by ?ping** \n\n **يوجد امر لحساب البنق الخاص بك جربه من خلال ping? \n\n لمعرفه كيفيه تشغيل البوت باللغه العربيه اكتب ?HTUA \n\n to know how to use the bot type ?HTUE**')
.setColor(0xe69e26)
.setThumbnail(message.author.displayAvatarURL())
.setTimestamp()
.setFooter(`Requsted by ${message.author.username}`)
message.channel.send(embed);
}

module.exports.config = {
name: "help",
description: "say help",
usage: "?help",
accessableby: "members",
aliases: ['h']
}