const Discord = require("discord.js"); //get discord.js
const client = new Discord.Client({autoReconnect:true}); //create client and auto reconnect if bot goes down
const config = require("./config.json"); //get config
const fs = require("fs"); //get fs

//When bot starts, send message to console
client.on("ready", () => {
  console.log("Bot successfully started.");
  client.user.setActivity(`use +help`);
});

//When bot boots, get events files.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

//These are activated on certain user inputs (commands or phrases)
client.on("message", message => {
  if (message.author.bot) return; //If another bot caused input, do nothing
  const guildMember = message.member;//Declare guildMember

  //Delete any message sent into role channel
  if (message.channel.id === '280499358577983489')
  {
    if (!message.content.startsWith(config.prefix || "-")) {
      message.delete();
    }
  }

  //Removes the overwatch role
  if (message.content.startsWith("-overwatch")) {
    guildMember.removeRole('352501447897645056')
    .then(console.log)
    .catch(console.error);
    message.delete(1500);
    message.channel.send(`role Overwatch removed from user **${message.author.username}**`).then(message => {
      message.delete(1500)
    })

  }

  //Removes the Destiny role
  if (message.content.startsWith("-destiny")) {
    guildMember.removeRole('291235154301681665')
    .then(console.log)
    .catch(console.error);
    message.delete(1500);
    message.channel.send(`role Destiny removed from user **${message.author.username}**`).then(message => {
      message.delete(1500)
    })

  }

  //Removes the PUBG role
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
  //Fetches command files from ./commands/
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

//Gets bot token from ./config/
client.login(config.token);
