
const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    const yes = bot.emojis.get("700713527576625205");
    const no = bot.emojis.get("700713478578634783");  

    let testEmbed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle(`${yes} **Test!**`)
  .setDescription(`This is a description!`);

    const sentMessage =  await message.channel.send(testEmbed);
    await sentMessage.react('👍');
    await sentMessage.react('👎');

    const filter = (reaction, user) => {
        return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
    
            if (reaction.emoji.name === '👍') {
                message.reply('you reacted with a thumbs up.');
            } else {
                message.reply('you reacted with a thumbs down.');
            }
        })
        .catch(collected => {
            message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
        });

}

module.exports.help = {
    name: "reacttest"
}
