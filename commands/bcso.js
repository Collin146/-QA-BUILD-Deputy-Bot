const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 
    
    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`bcso.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

try { 

    let ftoRole = message.guild.roles.find(x => x.name === 'FTO Trainer');

    if (!message.member.roles.cache.has(ftoRole.id)) return;

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 
let tobcso = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

let errEmbed = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("Was not able to find that user!");

if(!tobcso) return message.channel.send(errEmbed);
let memberrole = message.guild.roles.find(x => x.name === 'Member');
let bcsorole = message.guild.roles.find(x => x.name === 'BCSO');
let probrole = message.guild.roles.find(x => x.name === 'Probationary Deputy');
let nmrole = message.guild.roles.find(x => x.name === 'New Member');

let errEmbed2 = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("You cannot use this command on an administrator.");

if(tobcso.hasPermission("ADMINISTRATOR")) return message.channel.send(errEmbed2);
//let memrrole = message.guild.roles.find(`name`, "ember");
//let approle = message.guild.roles.find(`name`, "Applicant");
//guildmember.setRoles(...)

let errEmbed3 = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("The role \"Member\" doesn't exist.");

   if(!memberrole) return message.channel.send(errEmbed3);

let errEmbed4 = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("The role \"BCSO\" doesn't exist.");

   if(!bcsorole) return message.channel.send(errEmbed4);

let errEmbed5 = new Discord.RichEmbed()
   .setColor("RED")
   .setTitle(`${no} **Error!**`)
   .setDescription("The role \"Probationary Deputy\" doesn't exist.");

   if(!probrole) return message.channel.send(errEmbed5);
    
tobcso.removeRole(nmrole.id);
tobcso.addRole(memberrole.id);
tobcso.addRole(bcsorole.id);
tobcso.addRole(probrole.id);

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Command Used!**")
.setTimestamp()
.setColor("BLACK")
.setDescription([
    `**Command:** !bcso`,
    `**Used On:** <@${tobcso.id}>`,
    `**Used In:** ${message.channel}`,
    `**Used By:** ${message.author.username}`
  ].join('\n'))
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});

geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`The roles of <@${tobcso.id}> have been updated!`)
      .setFooter(`Mentioned User ID: ${tobcso.id}`);

      message.channel.send(geluktEmbed);

} catch (err) {
    catchErr(err)

}


}

module.exports.help = {
    name: "bcso"
}
