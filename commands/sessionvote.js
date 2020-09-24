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
            
            let votingMessage = votingChannel.fetchMessages("758489944330731563");

            votingMessage.reactions.forEach(r=>{ r.users.filter(u=>u.users).forEach(users=>{ r.remove(users) }) });
        
        }


    } catch(err) {
        console.log(err)
        
    }

}

module.exports.help = {
    name: "sessionvote"
}
