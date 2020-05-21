const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

});

client.on('message', message => {
    if (message.content === '!rozpocznij') {
    	message.channel.send('Wyszukiwanie informacji...');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send('Wczytywanie...');
        message.channel.send(' ');
        message.delete('Wczytywanie...');
        message.reply('wszystko zostało wczytane!');
        message.channel.send('■■■■■■■■■■■■');
        message.channel.send('Witaj!');
        message.channel.send('Bot został stworzony przez Michała G');
        message.channel.send('Trwa konfiguracja...');
        message.channel.send('Kończenie konfiguracji...');
        message.channel.send('Wszystki przebiegło pomyślnie bot został skonfigurowany!');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
