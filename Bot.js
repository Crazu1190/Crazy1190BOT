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
        message.channel.send('**Obecny event: Event 2019** (Wymaga biletu));
        }
    if (message.content === '<@&611150961418829846>') {
        message.channel.send('Zostaw mnie! Chyba , że chcesz warnika😈');
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
    if (message.content === '!partnerstwo') {
        message.channel.send('**Partnerstwo wymagania:**');
        message.delete('**Partnerstwo wymagania:**');
        message.channel.send('50 osób i non toxic społeczność');
        }
    if (message.content === '!zglos') {
        message.channel.send('**Administracja otworzy wkrótce ticketa!**');
        message.channel.send('**Czas otwierania ticketa może potrwać do 24h**');
        message.channel.send('**ID:** #09262');
        message.channel.send('Możesz posiadać max 1 ticketa!');
        message.channel.send('<@&600001366835855368>');
        message.delete('<@&600001366835855368>');
        message.reply('Twój ticket w: **OCZEKIWANIU**');
        }
    if (message.content === '8916') {
        message.reply('udało ci się!');
        message.channel.send('Wkrótce otrzymasz odznake!');
        message.delete('Wkrótce otrzymasz odznake!');
        }
    if (message.content === '!klanbs') {
        message.channel.send('Wygenerowano zaproszenie!');
        message.channel.send('**Wymagania:**');
        message.channel.send('200 pucharków i non **toxic**');
        message.channel.send('**Klub jest zamknięty** podczas wysyłania prośby o dołączenie napisz swój nick');
        message.channel.send('https://link.brawlstars.com/invite/band/pl?tag=LC08Y0J0&token=j66fnsdd');
        }
    if (message.content === '!chaejsjej') {
        message.channel.send('■■■■■■■■■■■■');
        message.channel.send('**Wersja:** 2.0 **(Beta)**');
        message.channel.send('**Dodano:**');
        message.channel.send('**!zglos** - Wysyła prośbe do administracji o utworzenie ticketa.');
        message.channel.send('■■■■■■■■■■■■');
        }
    if (message.content === '!restart') {
        message.channel.send(':x: Brak uprawnień! :x: ');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
