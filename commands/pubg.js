exports.run = (client, message, args) => {
const guildMember = message.member;
	guildMember.addRole('421637167735898113')
	.then(console.log)
	.catch(console.error);
	message.delete(1500);
	message.channel.send(`Role PUBG added to user **${message.author.username}**`).then(message => {
		message.delete(1500)
	})
}