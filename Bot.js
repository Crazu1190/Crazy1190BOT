const Discord = require('discord.js');
const client = new Discord.Client();

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

client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('https://discordapp.com');
    else if (command === '!invite') return msg.channel.send(process.env.INVITE);
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
