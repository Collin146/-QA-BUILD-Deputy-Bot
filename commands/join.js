const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

      let RTOchannel = message.guild.channels.find(x => x.id === '700641419257184297');
      
RTOchannel.voiceChannel.join();

    }

}

module.exports.help = {
    name: "join"
}
