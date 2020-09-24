const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`session.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

        if(args[0] === "reset"){

            let votingChannel = bot.channels.find(x => x.name === 'session-voting');
            votingChannel.fetchMessages({
                limit: 80,
               });
            
            let votingMessage = votingChannel.fetchMessages("758491732987215923");

        //     votingMessage.reactions.cache.filter.forEach(user => {
        //         if (!user.bot){
        //             reaction.remove
        //         }
        //    })

            // votingMessage.reactions.forEach(r=>{ r.users.filter(u=>u.user).forEach(user=>{ r.remove(user) }) });

            // votingMessage.reactions.forEach(user => {
            //     if (!user.bot) MessageReaction.remove(user);
            //   });
    

            votingMessage.reactions.forEach(r=>{ r.users.filter(u=>u.bot).forEach(user=>{ r.remove(bot) }) })
        
        }


    } catch(err) {
        console.log(err)
        
    }

}

module.exports.help = {
    name: "sessionvote"
}
