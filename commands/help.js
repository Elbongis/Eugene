exports.run = (client, message, args) => {
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
        name:"+reload",
        value: "Reloads a command | Usage: +reload [command]"
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