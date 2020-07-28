const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`prefix.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

    const yes = bot.emojis.get("700713527576625205");
    const no = bot.emojis.get("700713478578634783"); 
    const warningsign = bot.emojis.get("729725849343098900");

    message.channel.bulkDelete(1);

    let priorityEmbed = new Discord.RichEmbed()
    .setTitle(`${warningsign} **Priority Active!**`)
    .setTimestamp()
    .setColor("YELLOW")
    .setDescription(`A priority has been started by ${message.author}. To all civilians, please refrain from creating any other priorities until this priority & the cooldown have ended! To end the priority, press the ❌ below. This can not be undone!`);

    message.delete().catch(O_o=>{});

    const sentMessage =  await message.channel.send(priorityEmbed);
    await sentMessage.react('❌');

    message.delete().catch(O_o=>{});

const filter = (reaction, user) => {
    return ['❌'].includes(reaction.emoji.name) && user.id === message.author.id;
};


sentMessage.awaitReactions(filter, { max: 1, time: 10800000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '❌') {
    
        message.channel.bulkDelete(1);

        let priorityendEmbed = new Discord.RichEmbed()
        .setTitle(`${warningsign} **Priorty Ended!**`)
        .setTimestamp()
        .setColor("GREEN")
        .setDescription(`The previous priority that was created by ${message.author} has ended! Please wait for the 20 minute cooldown to end before creating another priority!`);

        message.channel.send(priorityendEmbed);

        var timeout = setTimeout(function(){

                setInterval(function() {
                    message.channel.send('Time left: '+getTimeLeft(timeout)+'s');
                }, 5000);
                
                function getTimeLeft(timeout) {
                   Math.ceil((timeout._idleStart + timeout._idleTimeout - Date.now()) / 1000);
                }

                let cooldownendEmbed = new Discord.RichEmbed()
                .setTitle(`${warningsign} **Cooldown Ended!**`)
                .setTimestamp()
                .setColor("GREEN")
                .setDescription(`The priority cooldown has ended! You are now authorized to create another priority. When doing so, please use the \`!priority\` command!`);
        
                message.channel.send(cooldownendEmbed);
            }, ms("30m"));

        }
        else {
        }
    })
    .catch(collected => {
    });

    } catch(err) {
         console.log(err)

    }    

}

module.exports.help = {
    name: "priority"
}
