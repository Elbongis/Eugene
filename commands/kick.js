exports.run = async (client, message, args) => {
  if(message.member.roles.find("name", "Moderator")){

    let kMember = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!kMember)
      return message.reply("Please mention a valid member of this server");
    if(!kMember.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await kMember.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
      message.channel.send({embed: {
        color: 0xff8000,
        author: {
          name: "Eugene",
          icon_url: client.user.avatarURL
        },
        title: "A User has been kicked!",
        thumbnail: {
            "url": "https://i.imgur.com/bhNxKH1.png"
          },
        fields: [{
            name: "User",
            value: `${kMember.user.tag}`
          },
          {
            name: "Kicked By",
            value: `${message.author.tag}`
          },
          {
            name: "Reason",
            value: `${reason}`
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL
        }
      }
    });
  } else {
    return message.reply("You do not have permission to do this!");
  }
}
