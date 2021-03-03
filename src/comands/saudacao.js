const {  MessageEmbed, Message } = require('discord.js'); 

module.exports = function msgSend(message) {
    if (message.content === '!oi') {
        const embed = new MessageEmbed()
            .setTitle('Olá! Me chamo Astro')
            .setColor([45,25,52])
            .setImage('https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif')
            .addField('Sou o bot do Survidor','Eu ainda estou em desenvolvimento, mas em breve vou poder entreter vocês!')
            .setFooter('Imagens do Prodd neste momento'); 
            message.channel.send(embed);
            message.delete({timeout: 500});  
    } 
}            

  
    
