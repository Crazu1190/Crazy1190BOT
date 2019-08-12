const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 

});

//1000 - 1sec

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
        message.channel.send('Wyszukiwanie informacji...');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send('Wczytywanie...');
        message.delete(5000);
        message.channel.send(' ');
        message.reply('wszystko zostało wczytane!');
        message.channel.send('Serwer: NOLIFY®');
        message.channel.send('Autor: Crazy1190');
        message.channel.send('Język: Polski');
        message.channel.send('Wersja: 1.0');
        message.channel.send('Status: Online');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
