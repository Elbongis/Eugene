exports.run = (client, message, args) => {
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