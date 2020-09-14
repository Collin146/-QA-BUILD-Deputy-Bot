const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");
const ms = require("ms");
const { time } = require("console");
const { userInfo } = require("os");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`priority.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

    } catch(err) {
        console.log(err)

   }    

}

module.exports.help = {
   name: "checkarchive"
}
