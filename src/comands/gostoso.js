const {  Client, Message } = require('discord.js'); 
const bot = new Client();

module.exports = function gostoso(message) {
    if (message.content.toUpperCase().indexOf('GOSTOSO') != -1) {
        message.react(`<:su_gatoblush2:803603319447748648>`);
    } 
    if (message.content.toUpperCase().indexOf('GOSTOSA') != -1) {
        message.react('✋');
    }     
}

    
