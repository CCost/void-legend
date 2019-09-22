const Discord = require('discord.js');
const bot = new Discord.Client();
const p = '='
const c = '0x9400D4'

bot.on('message', (msg) => {
	if (msg.author.id == 625382864154001430) return;
	if(msg.content == p + 'help') {
		var embed1 = new Discord.RichEmbed()
			.setDescription('**Fun:\n\nModerator:\n\nOther:\n**=help')
			.setColor(c);
		var embed2 = new Discord.RichEmbed()
			.setDescription("**Check your DMs!**")
			.setColor(c);
		msg.author.send(embed1);
		msg.channel.send(embed2);
	}
})

bot.login(process.env.BOT_TOKEN);
