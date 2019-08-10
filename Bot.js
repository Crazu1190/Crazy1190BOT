const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!zbanuj') {
    	message.reply('Poprawne użycie: !b @oznaczenie (powód)');
  	}
    if (message.content === '@Crazy1190') {
        message.channel.send('Nie oznaczaj administracji!');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
