const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
module.exports.run = async (bot, message, args) => {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed() 
            .setAuthor(`الوحوش المتاحه في هذا البوت`)
            .setDescription('``` الكوخ المتوحش | ساحرة الشر | جناح الثلج | العملاق الاعور | حاصد الارواح | العنقاء | هاردروكس | عنكبوت الجحيم | البومة | تنين اليشم | حصان طرواده | الدوده العملاقه | نوسيروس | ملكه النحل | سابرفنغ | وحش الثلج | شوكة الرعب | العملاق تيدال | الكاهن فودو ```')
            .addFields({ name: 'اوامر اضافيه', value: '```ping```', inline: true})
            .addFields({name:'للتوجه لمركز تبدير الاكواد ', value: '```تبديل```'})
            .setColor('#00FFF3')
            
            let MessageEmbed = await message.channel.send(embed)
        MessageEmbed.react('✅')
    }

    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description** ${command.config.description || "There is no Description for this command."}
            - **Command's Usage:** ${command.config.usage || "No Usage"}
            - **Command's Permissions:** ${command.config.accessableby || "Members"}
            - **Command's Aliases:** ${command.config.aliases || "No Aliases"}
            `)
            .setColor('#2EFF00')

        message.channel.send(embed);
    }}
  



}
    module.exports.config = {
        name: "مساعدة",
        description: "يساعدك في كيفيه استخدام الاوامر",
        usage: "-مساعده [اسم الوحش]",
        accessableby: "Members",
        aliases: ['مساعده',"help"]
    }