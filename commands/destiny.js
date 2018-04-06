exports.run = (client, message, args) => {
const guildMember = message.member;
  	guildMember.addRole('291235154301681665')
	.then(console.log)
	.catch(console.error);
	message.delete(1500);
	message.channel.send(`Role Destiny added to user **${message.author.username}**`).then(message => {
		message.delete(1500)
	})
}