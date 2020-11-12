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
    
const drplogo = bot.emojis.get("689681849559023635");

    let welcomedmEmbed = new Discord.RichEmbed()
.setTitle(`${drplogo} **Welcome to Deputy Roleplay!**`)
.setTimestamp()
.setFooter("I am a bot and cannot reply to DM's.")
.setColor("#00f4ef")
.setDescription([
    `We all welcome you and thank you for taking a look into Deputy Roleplay. Here, we strive to achieve both the most realism and professionalism within roleplaying! If you ever have any questions, feel free to reach out to any of our staff members!`,
    ` `,
    "**Further below, we will cover step by step how to join our community**",
    ` `,
    "● First, you will have to read the Community Requirements to ensure you are eligible to apply for Deputy Roleplay: https://bit.ly/3ahPEUZ",
    "● Secondly, you will also have to read our Rules & Regulations: https://bit.ly/3e9dbcl",
    "● Finally, you can apply using the Application Form. When doing so, please make sure to include as many details as possible and also reach the minimum number of sentences required. This is outlined above every open question. If you fail to do so, there is a high possibility you will be declined: https://bit.ly/3koxkOc",
    ` `,
    `If you ever need any more help/assistance, feel free to ask in <#697522485100281946>. We wish you good luck and hope to see you soon!`,  
  ].join('\n'))

message.channel.send(welcomedmEmbed);


    } catch(err) {
        catchErr(err)
        
    }

}

module.exports.help = {
    name: "sessionvotingembed"
}
