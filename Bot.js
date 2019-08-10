const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {

client.on('ready', () => { 
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!zbanuj') {
    	message.reply('Poprawne użycie: !b @oznaczenie (powód)');
  	}
    if (message.content === '!pomoc') {
        message.reply('Trwają beta testy!');
        }
});
//!say Hi!
  //Hi
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}

});

module.exports.help = {
  name: "say"
}


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
