const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Przerwa techniczna!', {type: 'WATCHING'}); 
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


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
