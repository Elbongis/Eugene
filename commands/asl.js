exports.run = (client, message, args) => {
    let age = args[0];
    let sex = args[1];
    let location = args[2];
   message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);

}