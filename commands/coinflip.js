exports.run = (client, message, args) => {
    message.reply('You rolled ' + coinFlip() + '!')
}