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
            
            let votingMessage = votingChannel.fetchMessage("758491732987215923");

            votingMessage.reactions.removeAll()

            await votingMessage.react("1️⃣");
            await votingMessage.react("2️⃣");
            await votingMessage.react("3️⃣");
            await votingMessage.react("4️⃣");
            await votingMessage.react("5️⃣");
            await votingMessage.react("6️⃣");
            await votingMessage.react("7️⃣");



            // const filter = (reaction, user) => reaction.emoji.name === '👌' && user.id === 'someID';
            // const collector = votingMessage.createReactionCollector(filter, { time: 15000 });
            // collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
            // collector.on('end', collected => console.log(`Collected ${collected.size} items`));

            // const filter = (reaction, user) => {
            //     return reaction.emoji.name === '👍' && user.id === message.author.id;
            // };
            
            // const collector = votingMessage.createReactionCollector(filter, { time: 15000 });
            
            // collector.on('collect', (reaction, user) => {
            //     console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
            // });
            
            // collector.on('end', collected => {
            //     console.log(`Collected ${collected.size} items`);
            // });

            // const filter = (reaction, user) => !user.bot;

            // const reactionCollected = votingMessage.createReactionCollector(filter, { time: 10800000 })

            // reactionCollected.on('collect', (reaction, user) => {

            //     if(!user.bot) reaction.forEach(reaction => reaction.remove())

            // });

            // reactionCollected.on('end', collected => {

            // });
            
        
                // let reactedUsers = !reactionCollected.users.cache.has('732901249720254485')
                
                //  votingMessage.reactions.forEach(reaction => reaction.remove(reactedUsers))
  

                // let reactedUsers = !reactionCollected.users.cache.has('732901249720254485')
                
                // votingMessage.reactions.forEach(reaction => reaction.remove(reactedUsers))

            
            // votingChannel.fetchMessage('758491732987215923').map(r => r).then(message => {
            //     message.reactions.forEach(reaction => reaction.remove(!'732901249720254485'))
            //   })

            // votingChannel.fetchMessage('758491732987215923').map(r => r).then(message => {
            //     message.reactions.forEach(reaction => reaction.remove(!'732901249720254485'))
            //   })

            // const userReactions = votingMessage.reactions.cache.filter(reaction => reaction.users.cache.has('732901249720254485'));

            // try {
            //         await !reaction.users.remove('732901249720254485');
                
            // } catch (error) {
            //     console.log(error)
            // }

        //     votingMessage.reactions.cache.filter.forEach(user => {
        //         if (!user.bot){
        //             reaction.remove
        //         }
        //    })

            // votingMessage.reactions.forEach(r=>{ r.users.filter(u=>u.user).forEach(user=>{ r.remove(user) }) });

            // votingMessage.reactions.forEach(user => {
            //     if (!user.bot) MessageReaction.remove(user);
            //   });
        
        }


    } catch(err) {
        console.log(err)
        
    }

}

module.exports.help = {
    name: "sessionvote"
}
