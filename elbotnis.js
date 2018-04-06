const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.on("ready", () => {
  console.log("We live bois");
  client.user.setActivity(`use +help`);
});

client.on("message", (message) => {
  if (message.author.bot) return;

  const guildMember = message.member;

  if (message.channel.id === '280499358577983489')
  {
    if (!message.content.startsWith(config.prefix || "-")) {
      message.delete();
    }
  }

  if (message.content.includes("nigger")) {
    const wutFace = client.emojis.get("268770878144118787");
		message.reply(`${wutFace} woah there edge lord`)
  }

  if (message.content.includes("games?")) {
    message.reply(`No.`)
  }

  if (message.content.includes("what game?" || "What game?")) {
    var whatGame = ['Overwatch', 'Destiny', 'PUBG', 'SCP'];
    var randGame = whatGame[Math.floor(Math.random() * whatGame.length)];
    message.reply(`Let's play ` + randGame + ` shall we?`)
  }

  if (message.content.includes("No, different game")) {
    var whatGame = ['Overwatch', 'Destiny', 'PUBG', 'SCP'];
    var randGame = whatGame[Math.floor(Math.random() * whatGame.length)];
    message.reply(`Okay.. How about ` + randGame + ` ?`)
  }

  if (message.content.startsWith("-overwatch")) {
    guildMember.removeRole('352501447897645056')
    .then(console.log)
    .catch(console.error);
    message.delete(1500);
    message.channel.send(`role Overwatch removed from user **${message.author.username}**`).then(message => {
      message.delete(1500)
    })

  }

  if (message.content.startsWith("-destiny")) {
    guildMember.removeRole('291235154301681665')
    .then(console.log)
    .catch(console.error);
    message.delete(1500);
    message.channel.send(`role Destiny removed from user **${message.author.username}**`).then(message => {
      message.delete(1500)
    })

  }

  if (message.content.startsWith("-pubg")) {
		guildMember.removeRole('421637167735898113')
		.then(console.log)
		.catch(console.error);
		message.delete(1500);
		message.channel.send(`Role PUBG removed from user **${message.author.username}**`).then(message => {
			message.delete(1500)
		})

	}


  if (message.content.indexOf(config.prefix) !==0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command ==='pring') {
    message.channel.send('prong');
  }

  if (command === "asl") {
    let age = args[0];
    let sex = args[1];
    let location = args[2];
   message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }

  if (command ==="overwatch") {
		guildMember.addRole('352501447897645056')
		.then(console.log)
		.catch(console.error);
		message.delete(1500);
			message.channel.send(`Role Overwatch added to user **${message.author.username}**`).then(message => {
        message.delete(1500)
      })
	}

  if (command === "destiny") {
		guildMember.addRole('291235154301681665')
		.then(console.log)
		.catch(console.error);
		message.delete(1500);
		message.channel.send(`Role Destiny added to user **${message.author.username}**`).then(message => {
			message.delete(1500)
		})

	}

  if (command === "pubg") {
		guildMember.addRole('421637167735898113')
		.then(console.log)
		.catch(console.error);
		message.delete(1500);
		message.channel.send(`Role PUBG added to user **${message.author.username}**`).then(message => {
			message.delete(1500)
		})

	}

  if (command === "winrate") {
    const poggers = client.emojis.get("431169281124990976");
		let wins = args[0];
		let total = args[1];
		var per = (wins / total) * 100;
    if (per > 70) {
		  message.reply(`${poggers} Your win percentage is ` + per + "%")
    } else {
      message.reply("Lmao, your win percentage is " + per + "% you fucking suck xd")
    }
	}

  function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
  }

  if (command === "coinflip") {
    message.reply('You rolled ' + coinFlip() + '!')
  }

  if (command === "help") {
    message.channel.send({embed: {
    color: 0xff8000,
    author: {
      name: "Eugene",
      icon_url: client.user.avatarURL
    },
    title: "Commands:",
    description: "Below are the current commands the bot has implemented, along with their usage.",
    thumbnail: {
        "url": "https://i.imgur.com/bhNxKH1.png"
      },
    fields: [{
        name: "+help",
        value: "*Displays this message. | Usage: +help*"
      },
      {
        name: "+pring",
        value: "*Pings the bot. | Usage: +pring*"
      },
      {
        name: "+asl",
        value: "*The bot asks you on a date. How cute. | Usage: +asl [age] [sex] [location]*"
      },
      {
        name: "+winrate",
        value: "*Displays winrate of user input. | Usage: +winrate [wins] [total]*"
      },
      {
        name: "**+coinflip**",
        value: "*Flips a coin. | Usage: +coinflip*"
      },
      {
        name: "+/-overwatch",
        value: "*Assigns or removes Overwatch role. | Usage: +overwatch OR -overwatch*"
      },
      {
        name: "+/-destiny",
        value: "*Assigns or removes Destiny role. | Usage: +destiny OR -destiny*"
      },
      {
        name: "+/-pubg",
        value: "*Assigns or removes PUBG role. | Usage: +pubg OR -pubg*"
      },
    ],
    footer: {
      icon_url: client.user.avatarURL
    }
  }
});
  }

});
client.login(config.token);
