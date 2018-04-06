const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

var commandList = fs.readFileSync("./commandList.txt", {"encoding": "utf-8"});


client.on("ready", () => {
	console.log("I am ready!");
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
		const cmonBruh = client.emojis.get("268770878144118787");
		message.reply(`${cmonBruh} woah there edge lord`)
	}


	if (message.content.startsWith("-overwatch")) {
		guildMember.removeRole('352501447897645056')
		.then(console.log)
		.catch(console.error);
		message.delete(1500);
		message.channel.send(`Role Overwatch removed from user **${message.author.username}**`).then(msg => {
			message.delete(1500)
		})

	}

	if (message.content.startsWith("-destiny")) {
		guildMember.removeRole('291235154301681665')
		.then(console.log)
		.catch(console.error);
		message.delete(1500);
		message.channel.send(`Role Destiny removed from user **${message.author.username}**`).then(msg => {
			message.delete(1500)
		})

	}

	if (message.content.startsWith("-pubg")) {
		guildMember.removeRole('421637167735898113')
		.then(console.log)
		.catch(console.error);
		message.delete(1500);
		message.channel.send(`Role PUBG removed from user **${message.author.username}**`).then(msg => {
			message.delete(1500)
		})

	}

	if (message.content.indexOf(config.prefix) !== 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();

  	if(command ==='pring') {
  		message.channel.send('prong');
  	}

  	if (command === "help") {
  		message.channel.send(commandList)
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
			message.channel.send(`Role Overwatch added to user **${message.author.username}**`).then(msg => {
				message.delete(1500)
			})
	}

	if (command === "destiny") {
		guildMember.addRole('291235154301681665')
		.then(console.log)
		.catch(console.error);
		message.delete(1500);
		message.channel.send(`Role Destiny added to user **${message.author.username}**`).then(msg => {
			message.delete(1500)
		})

	}

	if (command === "pubg") {
		guildMember.addRole('421637167735898113')
		.then(console.log)
		.catch(console.error);
		message.delete(1500);
		message.channel.send(`Role PUBG added to user **${message.author.username}**`).then(msg => {
			message.delete(1500)
		})

	}

	if (command === "winper") {
		let wins = args[0];
		let total = args[1];
		var per = (wins / total) * 100;
		message.reply(per)
	}

})
});

client.login(config.token);
