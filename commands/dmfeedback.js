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

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !session <day> <time>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !session <day> <time>");
        return;
    }

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783");
const gno = bot.emojis.get("759495234928902154");
let mentionrole = message.guild.roles.find(x => x.name === 'Member');

const cnt1 = 0;
const cnt2 = 0;
const cnt3 = 0;
const cnt4 = 0;
const cnt5 = 0;
const cnt6 = 0;
const cnt7 = 0;

await message.channel.send([
    "⠀⠀",
    "**Feedback Results:**"
   ].join('\n'))

await message.channel.send(`${cnt1} - The application process seemed too extensive/complicated.`)
await message.channel.send(`${cnt2} - I did not know how to apply/join the community.`)
await message.channel.send(`${cnt3} - The community was not for the platform(s) I own.`)
await message.channel.send(`${cnt4} - The application form was too hard for me.`)
await message.channel.send(`${cnt5} - The department I was interested in was unavailable/closed.`)
await message.channel.send(`${cnt6} - Other, (see #channelname)`)
await message.channel.send(`${cnt7} - No Response`)


    } catch(err) {
        catchErr(err)
        
    }

}

module.exports.help = {
    name: "dmfeedback"
}
