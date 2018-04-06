exports.run = (client, message, args) => {
const guildMember = message.member;
  	guildMember.addRole('352501447897645056')
		.then(console.log)
		.catch(console.error);
		message.delete(1500);
		message.channel.send(`Role Overwatch added to user **${message.author.username}**`).then(message => {
      	message.delete(1500)
    })
}