const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`briefing.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

try {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !briefingcheck <day>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !briefingcheck <day>");
        return;
    }

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 

if(args[0] === "monday" || "Monday"){

    let votingChannel = message.message.guild.channels.find(x => x.name === 'session-voting');
    let briefingChannel = message.message.guild.channels.get(x => x.id === '764855057853579286');

      votingChannel.fetchMessage("764846601583722516")
      .then(message => {
         const bReaction = message.reactions.get('759125897953017857')

         const briefingMembers = briefingChannel.members()

         bReaction.users.forEach(user => {
            if (!user.id === briefingMembers.id) message.channel.send(`**The following members are not in briefing room but did vote:** ${user.map(user => `${user}`).join(' | ')}
            `)
          });
      });

}

} catch(err){
    console.log(err)

}

}

module.exports.help = {
    name: "briefingcheck"
}
