const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    bot.user.setGame("Bot by Crazy1190 dla serwera Nolify");
});

client.on('message', message => {
    if (message.content === '!zbanuj') {
    	message.reply('Poprawne użycie: !b @oznaczenie (powód)');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
