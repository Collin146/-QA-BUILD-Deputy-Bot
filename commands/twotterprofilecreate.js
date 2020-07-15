 const Discord = require("discord.js");
 const fs = require("fs");
 const errors = require("../utils/errors.js");
 const Enmap = require("enmap");

 module.exports.run = async (bot, message, args) => {
  
 bot.points = new Enmap({name: "profiles"});
 const yes = bot.emojis.get("700713527576625205");
 const no = bot.emojis.get("700713478578634783l"); 
 const twotter = bot.emojis.get("727159498686595072");
 const key = `${message.guild.id}-${message.author.id}`;

//  function jsonReader(filePath, cb) {
//   fs.readFile(filePath, (err, fileData) => {
//     if (err) {
//       return cb && cb(err);
//     }
//     try {
//       const object = JSON.parse(fileData);
//       return cb && cb(null, object);
//     } catch (err) {
//       return cb && cb(err);
//     }
//   });
// }

const profilesToAdd = parseInt(args[1], 10);

// const key = `${message.guild.id}-${user.id}`;

bot.profiles.ensure(key, {
  user: message.author.id,
  civfn: args[0],
  civln: args[1],
  age: args[2],
  bio: args.join(" ").slice(2)
});

// bot.profiles.ensure(key, {
//   user: message.author.id,
//   civfn: args[0],
//   civln: args[1],
//   age: args[2],
//   bio: args.join(" ").slice(2)
// });

// Add the points to the enmap for this user.
// bot.profiles(key, "+", pointsToAdd, "profiles");

 }

 module.exports.help = {
     name: "twotterprofilecreate"
 }
