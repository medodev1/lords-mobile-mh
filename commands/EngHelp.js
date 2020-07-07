const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
module.exports.run = async (bot, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle('By this bot you can know the best way to hunt monsters')
.setDescription('**The Prefix For this Bot is (?) Type It Before Any Monter Name**\n\n **`Monsters Commands`** \n\n for Black Wing type => ?BlackWing or ?blackwing \n for Bon Appeti type => ?BonAppeti or ?bonappeti \n for Frostwing type => ?Frostwing or ?frostwing \n for Gargantua type => ?Gargantua or ?gargantua \n for Grim Reaper type => ?GrimReaper or ?grimreaper \n for Gryphon type => ?Gryphon or ?gryphon \n for Hardrox type => ?Hardrox or ?hardrox \n for Hell Drider type => ?HellDrider or ?helldrider \n for Jade Wyrm type => ?JadeWyrm or ?jadewyrm \n for Mecha Trojan type => ?MechaTrojan or ?mechatrojan \n for Mega Maggot type => ?MegaMaggot or ?megamaggot \n for Noceros type => ?Noceros or ?noceros \n for Queen Bee type => ?QueenBee or ?queenbee \n for SaberFang type => ?SaberFang or ?saberfang \n for Snow Beast type => ?SnowBeast or ?snowbeast \n for Terrorthorn type => ?Terrorthorn or ?terrorthorn \n for Tidal Titan type => ?TidalTitan or ?tidaltitan or ?tidal \n for Voodoo Shaman type => ?VoodooShaman or ?voodooshaman or ?voodoo')
.setColor(0xe69e26)
.setThumbnail(message.author.displayAvatarURL())
.setTimestamp()
.setFooter(`Requsted by ${message.author.username}`)
message.channel.send(embed);
}

module.exports.config = {
name: "EngHelp",
description: "say EngHelp",
usage: "?EngHelp",
accessableby: "members",
aliases: ['enghelp' , 'E' , 'e']
}