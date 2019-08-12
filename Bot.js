const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 

});

client.on('message', message => {
    if (message.content === '!eventy') {
    	message.channel.send('Wyszukiwanie informacji...');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send('Wczytywanie...');
        message.channel.send(' ');
        message.delete('Wczytywanie...');
        message.reply('wszystko zostało wczytane!');
        message.channel.send('■■■■■■■■■■■■');
        message.channel.send('**Najbilższy event:**');
        message.channel.send('***Kruca***');
        message.channel.send('**Data:** 30.08.2019 **Godz:** 11:30-12:00');
        message.channel.send('**Brak dostępu do kanału głosowego**');
        message.channel.send('■■■■■■■■■■■■');
  	}
    if (message.content === 'Kurwa') {
        message.channel.send('Nie używaj przekleństw!');
        }
    if (message.content === '!changelog') {
        message.channel.send('■■■■■■■■■■■■');
        message.channel.send('**Wersja:** 1.0 **(beta)**');
        message.channel.send('**Dodano:**');
        message.channel.send('!info - pokazuje informacje');
        message.channel.send('!eventy - pokazuje eventy i informcje o nich');
        message.channel.send('■■■■■■■■■■■■');
        }
    if (message.content === '!info') {
        message.channel.send('Wyszukiwanie informacji...');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send('Wczytywanie...');
        message.channel.send(' ');
        message.delete('Wczytywanie...')
        message.reply('wszystko zostało wczytane!');
        message.channel.send('■■■■■■■■■■■■');
        message.channel.send('Serwer: NOLIFY®');
        message.channel.send('Autor: Crazy1190');
        message.channel.send('Język: Polski');
        message.channel.send('Wersja: 1.0');
        message.channel.send('■■■■■■■■■■■■');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
