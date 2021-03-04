const {  Client, Message } = require('discord.js'); 
const bot = new Client();

module.exports = function gostoso(message) {
    if (message.content.indexOf('gostoso') != -1) {
        message.react(`<:su_gatoblush2:803603319447748648>`);
    } 
    if (message.content.indexOf('gostosa') != -1) {
        message.react('✋');
    }     
}

    
