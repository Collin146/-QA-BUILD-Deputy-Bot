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

const drp1 = bot.emojis.get("759125897953017857");
const drp2 = bot.emojis.get("759125936586883072");
const drp3 = bot.emojis.get("759125984967393330");
const drp4 = bot.emojis.get("759126011265941506");
const drp5 = bot.emojis.get("759126035215810592");
const drp6 = bot.emojis.get("759126060355813376");
const drp7 = bot.emojis.get("759126083781394444");

    let welcomedmEmbed = new Discord.RichEmbed()
.setTitle(`😕 **Sorry to see you leave!**`)
.setTimestamp()
.setColor("#00f4ef")
.setFooter("Its mine now", "Add DiscordBot to your server! [Click here](https://google.com)")
.setDescription([
    `Hey there, we find very it unfortunate to see you leave the Deputy Roleplay Interview server. We at Deputy Roleplay always aim to improve and are open to any feedback!`,
    ` `,
    "**We would appreciate it a lot if you told us why you decided to leave. All you have to do is click the appropriate reaction signifying the reason why you left.**",
    ` `,
    `${drp1} - The application process seemed too extensive/complicated.`,
    `${drp2} - I did not know how to apply/join the community.`,
    `${drp3} - The community was not for the platform(s) I own.`,
    `${drp4} - The application form was too hard for me.`,
    `${drp5} - The department I was interested in was unavailable/closed.`,
    `${drp6} - Other, (please click the reaction and message your reason here).`,
    ` `,
    `Please note that this message is automated and I am unable to reply to any questions you have.`
  ].join('\n'))
  .addField("Its mine now", "Add DiscordBot to your server! [Click here](https://google.com)");

  const sentMessage =  await message.channel.send(welcomedmEmbed);
  await sentMessage.react(drp1.id);
  await sentMessage.react(drp2.id);
  await sentMessage.react(drp3.id);
  await sentMessage.react(drp4.id);
  await sentMessage.react(drp5.id);
  await sentMessage.react(drp6.id);


    } catch(err) {
        console.log(err)
        
    }

}

module.exports.help = {
    name: "dmembed"
}
