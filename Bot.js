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
    if (message.content === '!witam') {
        message.reply('wita wszystkich!');
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
    if (message.content === '!killall') {
        message.reply('strzela!');
        message.channel.send('Możesz **nie zostać postrzelonym!**');
        message.channel.send('**Używając komendę:**');
        message.channel.send('**!oslona**');
        message.channel.send('5');
        message.channel.send('4');
        message.channel.send('3');
        message.channel.send('2');
        message.channel.send('1');
        message.channel.send('**Strzał!** przeżyli tylko ci co użyli osłony!');
        }
    if (message.content === '!oslona') {
        message.channel.send('Ładowanie osłony: 30%');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send('Ładowanie osłony: 60%');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send('Ładowanie osłony: 90%');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send('Ładowanie osłony: 100%');
        message.channel.send('**Osłona załadowana!**');
        message.reply('załadował osłone jest ochroniony pred strzałem!');
        }
    if (message.content === '!karta demogorgon');
        message.channel.send('Wyszukiwanie informacji...');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send('Wczytywanie...');
        message.channel.send(' ');
        message.channel.send('Zdrowie: 150❤️');
        message.channel.send('Obrażenia: 50⚔️');
        message.channel.send('Atak co: 1sec⚡');
        message.channel.send('https://cdn.discordapp.com/attachments/609795986965135360/610610044450504807/Demogorgon_-_Chapter_Eight.jpg');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
