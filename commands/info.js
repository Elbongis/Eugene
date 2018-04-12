function userInfo(user) {
  var finalString = '';

  finalString += '**' + user.username + "**, witht he **ID** of **" + user.id + '**';

  var userCreated = user.createdAt.toString().split(' ');
  finalString += ' and was created at ' + userCreated[1] + ', ' + userCreated[2], + ' ' + userCreated[3] + "**";

  return finalString;
}
exports.run = (client, message, args) => {
  
}