const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, channel) => {

function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`aop.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }
        
try {
    
const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 
const warningsign = bot.emojis.get("729725849343098900");

if(args[0] === "bc"){
        
const mainguild = bot.guilds.get('700639523272523776')

let AOPchannel = mainguild.channels.find(x => x.id === '806224054079324220');

AOPchannel.edit({ name: 'Current AOP: BC' })

let dmembed = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${warningsign} **Notice!**`)
.setDescription(`Per ${message.author}, AOP has been changed to Blaine County! Please finish your scenarios and head to the new AOP.`);

message.guild.members.forEach(member => {
    if (message.member.roles.find(r => r.name === "On Patrol")) member.send(dmembed);
  });

  return; 
}

if(args[0] === "ss&s"){
        
    const mainguild = bot.guilds.get('700639523272523776')

    let AOPchannel = mainguild.channels.find(x => x.id === '806224054079324220');

    AOPchannel.edit({ name: 'Current AOP: SS&S' })
    
    let dmembed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(`${warningsign} **Notice!**`)
    .setDescription(`Per ${message.author}, AOP has been changed to Sandy Shores & Surrounding! Please finish your scenarios and head to the new AOP.`);
    
    message.guild.members.forEach(member => {
        if (message.member.roles.find(r => r.name === "On Patrol")) member.send(dmembed);
      });
    
      return; 
    }

return;

} catch(err) {
    catchErr(err) 
    
    }
    
    }

 module.exports.help = {
     name: "aop"
 }
