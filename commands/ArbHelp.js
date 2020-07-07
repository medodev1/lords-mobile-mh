const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
module.exports.run = async (bot, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle('من خلال هذا البوت تقدر تعرف الابطال المناسبه لصيد الوحوش')
.setDescription('**اول شي البريفكس او العلامه الي تشغل اوامر البوت هي (?) تكتبها قبل اسم اي وحش** \n\n اوامر الوحوش\n \n لتنين الظلام => ?تنين \n لساحره الشر => ?الساحره \n لجناح الثلج => ?جناح \n للعملاق الاعور => ?العملاق \n لحاصد الارواح => ?حاصد \n للعنقاء => ?العنقاء \n لهاردروكس => ?هاردروكس \n لعنكبوت الجحيم => ?العنكبوت \n لتنين اليشم => ?اليشم \n لحصان طرواده => ?حصان او ?طرواده \n لالدوده العملاقه => ?الدوده \n لنوسيروس => ?نوسيروس \n لملكه النحل => ?النحله \n لسابرفنغ => ?سابرفنغ \n لوحش الثلج => ?وحش \n لشوكه الرعب => ?شوكه \n لالعملاق تيدال => ? تيدال \n للكاهن فودو => ?الكاهن')
.setColor(0xe69e26)
.setThumbnail(message.author.displayAvatarURL())
.setTimestamp()
.setFooter(`Requsted by ${message.author.username}`)
message.channel.send(embed);
}

module.exports.config = {
name: "ArbHelp",
description: "say ArbHelp",
usage: "?ArbHelp",
accessableby: "members",
aliases: ['arbhelp' , 'a' , 'A' ,'Arabhelp']
}