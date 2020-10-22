const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
module.exports.run = async (bot, message, args) => {



  
        const msg = await message.channel.send('🏓 Pinging...').then(msg => msg.delete({timeout: 2000}));

        const embed = new Discord.MessageEmbed()
        .setColor(0xf6ff00)
        .setTitle('🏓 Pong!')
        .setDescription(`Your ping is **${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms** \n\nBot ping is **${Math.round(bot.ws.ping)} ms**`);

        message.channel.send(embed);
    





}


module.exports.config = {
    name: "ping",
    description: "يظهر لك تاخر الشبكه فالانترنت الخاص بك",
    usage: "-ping",
    accessableby: "Members",
    aliases: []
}