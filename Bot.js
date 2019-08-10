const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!zbanuj') {
    	message.reply('Poprawne użycie: !b @oznaczenie (powód)');
  	}
    if (message.content === 'Kurwa') {
        message.channel.send('Nie używaj przekleństw!');
        }
    if (message.content === '!pomoc') {
        message.channel.send('ta komenda nie działa z powodu betatestów');
        }
    if (message.content === '!info') {
        message.channel.send('Test');
        message.channel.send('Test pomyślny!');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
