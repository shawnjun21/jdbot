// JD Bot version 0.3
// because JD is dumber than a box of wires

// basic shit, like in JD's special ed classes (note the plural "classes")
const Discord = require("discord.js");
const bot = new Discord.Client();


// feel free to change this next constant
// this is probability that the bot will respond to a message
// pretty much, it will respond once every _____ messages
// by default it will only respond to one out of thirty messages
// lower is more often, higher is less often
const probability = 30;

// this list covers 50% of JD's vocabulary
// more than one of the same phrase increases the chance of it being used
// it's like having your name twice in a raffle bag
const dumb_messages = [
	"What a bunch of weebs.",
	"Fucking hell, auto correct.",
	"Damn, Kai really hates me.",
	">mekos",
	"Really fucking edgy.",
	"For fuck sake.", // repeat this one
	"For fuck sake.", // he says it lots
	"Damn.",
	"Sure.",
	"God.",
	"Nice.",
	"Wow.",
	"Yeah.",
	"Ok.",
	"Ok.", // repeat this one three times
	"Ok.", // he says it a LOT
	"What?",
	"Why?"
];

// this list covers the other 50%
const user_specific = {
	["203035132700000266"]:[ // kai
		"Libido.",
		"Platonically.",
		"Kai, sure.",
		"Damn, Kai.",
		"Do people always have to feel pity for you?",
		"Fucking hell Kai."
	],
	["159082888137015296"]:[ // haley
		"Do you still like that forty year old?.",
		"Platonically.",
		"Fucking hell Haley."
	]
};

bot.on("message", message =>
{
	var rando = Math.floor(Math.random() * probability) + 1;
	if (rando == 1 && !message.author.bot)
	{
		var reply;
		if (user_specific[message.author.id])
		{
			reply = user_specific[message.author.id][Math.floor(Math.random() * user_specific[message.author.id].length)];
		}
		else
		{
			var raw = dumb_messages[Math.floor(Math.random() * dumb_messages.length)];
			var name = message.member.nickname || message.author.username || "Supreme Leader Kim Jong Un";
			reply = raw.replace("{name}", name);
		}
		message.channel.send(reply);
	}
});

bot.login(process.env.BOT_TOKEN);
