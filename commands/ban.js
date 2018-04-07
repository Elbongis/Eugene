exports.run = async (client, message, args) => {
    if(message.member.roles.find("name", "Moderator")){
    
    let bMember = message.mentions.members.first();
    if(!bMember)
      return message.reply("Please mention a valid member of this server");
    if(!bMember.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await bMember.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
      message.channel.send({embed: {
        color: 0xff8000,
        author: {
          name: "Eugene",
          icon_url: client.user.avatarURL
        },
        title: "A User has been banned!",
        thumbnail: {
            "url": "https://i.imgur.com/bhNxKH1.png"
          },
        fields: [{
            name: "User",
            value: `${bMember.user.tag}`
          },
          {
            name: "Banned By",
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