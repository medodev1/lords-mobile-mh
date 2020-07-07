const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle('كيفيه تشغيل بوت الصيدس')
.setDescription('** اول شئ العلامه الي تشغل البوت هي ? لازم تستخدمها قبل اسم اي وحش \n\n ثاني شي عشان تعرف الوحوش الي موجوده فالبوت اكتب ?a \n\n ثالث شي اعمل نفس الي بالصوره مع تغيير اسم الوحش**')
.setTimestamp()
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xe69e26)
.setImage('https://c.top4top.io/p_1649bfxby1.png')
message.author.send(embed);
const embed2 = new Discord.MessageEmbed()
.setDescription('**من فضلك شوف الخاص \n\n اذا لم تتلقي اي رساله قم بتفعيل هذا الخيار**')
.setImage('https://a.top4top.io/p_16497yea61.png')
message.channel.send(embed2);
}

module.exports.config = {
name: "howtouseArb",
description: "say howa",
usage: "?howa",
accessableby: "Members",
aliases: ["HTUA","htua"]
}