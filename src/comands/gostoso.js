const {  Client, Message } = require('discord.js'); 
const bot = new Client();

module.exports = function gostoso(message) {
    if (message.content.indexOf('gostoso') != -1) {
        message.react(`<:su_gatoblush2:803603319447748648>`);
    }   
}
module.exports = function gostoso(message) {
    if (message.content.indexOf('gostosa') != -1) {
        message.react('<:su_panda1:697163015866286269>');
    }   
}  