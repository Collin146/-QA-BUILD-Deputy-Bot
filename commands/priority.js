const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");
const ms = require("ms");
const { time } = require("console");
const moment = require("moment-timezone");
// const tz = require("moment-timezone");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`priority.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

        if (message.channel.id === "742834445131710605") {

    const yes = bot.emojis.get("700713527576625205");
    const no = bot.emojis.get("700713478578634783"); 
    const warningsign = bot.emojis.get("729725849343098900");
    let mentionrole = message.guild.roles.find(x => x.name === 'On Patrol');
    let civrole = message.guild.roles.find(x => x.name === 'Civilian');

    var now = moment();
    
    var utcCutoff = moment.utc(now, 'HH:mm:ss');

    var displayCutoff = 
    moment.tz(utcCutoff.format('HH:mm:ss'), 'HH:mm:ss', 'Europe/London');

    let priorityEmbed = new Discord.RichEmbed()
    .setTitle(`${warningsign} **Priority Active!**`)
    .setTimestamp()
    .setColor("RED")
    .setDescription([
        `**Activated By:** ${message.author}`,
        `**Activated At:** ${displayCutoff.format('HH:mm:ss')} BST`,
        `To all civilians, please refrain from creating any other priorities until this priority & the cooldown have ended! To end the priority, press the ${no} below. This cannot be undone!`,
      ].join('\n'));

    message.channel.bulkDelete(50);
    message.channel.send(`<@&${mentionrole.id}>`);
    const sentMessage =  await message.channel.send(priorityEmbed);
    await sentMessage.react(no.id);

    message.delete().catch(O_o=>{});

    message.channel.overwritePermissions(civrole.id, {
        SEND_MESSAGES: false
      });

const filter = (reaction, user) => {
    return [no.id].includes(reaction.emoji.id) && user.id === message.author.id;
};


sentMessage.awaitReactions(filter, { max: 1, time: 10800000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.id === no.id) {
    
        message.channel.bulkDelete(4);

        let priorityendEmbed = new Discord.RichEmbed()
        .setTitle(`${warningsign} **Priority Ended!**`)
        .setTimestamp()
        .setColor("ORANGE")
        .setDescription([
            `**Deactivated By:** ${message.author}`,
            `**Deactivated At:** ${displayCutoff.format('HH:mm:ss')}`,
            `The previous priority that was created by ${message.author} has ended! Please wait for the 20 minute cooldown to end before creating another priority!`,
          ].join('\n'));

        message.channel.send(priorityendEmbed);

        var timeout = setTimeout(function(){

            message.channel.bulkDelete(5);

                let cooldownendEmbed = new Discord.RichEmbed()
                .setTitle(`${warningsign} **Cooldown Ended!**`)
                .setTimestamp()
                .setColor("GREEN")
                .setDescription(`The priority cooldown has ended! You are now authorized to create another priority. When doing so, please use the \`!priority\` command!`);
        
                message.channel.send(cooldownendEmbed);

                message.channel.overwritePermissions(civrole.id, {
                    SEND_MESSAGES: true
                  });
            }, ms("20m"));
            
        }
        else {
        }
    })
    .catch(collected => {
    });

    return;
        }

        const no = bot.emojis.get("700713478578634783"); 

        let errEmbed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle(`${no} **Error!**`)
        .setDescription("You can only use this command within the <#742834445131710605> channel.");

        message.channel.send(errEmbed);

    } catch(err) {
         console.log(err)

    }    

}

module.exports.help = {
    name: "priority"
}
