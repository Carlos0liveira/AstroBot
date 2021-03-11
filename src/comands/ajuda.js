const {  MessageEmbed } = require('discord.js'); 

module.exports = function msgSend(message) {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;  
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;  

    
    if (message.content === '!ajuda'){
        const embed = new MessageEmbed()
            .setTitle('Precisando de Ajuda?')
            .setDescription("Bom meu prefixo é a '!' e estes são meus comandos:")
            .setColor([45,25,52])
            .setImage('https://media.giphy.com/media/jUWNrvwR4ezUwJc2Gq/giphy.gif')
            .addFields(
                { name:'oi' , value:' Conheça mais sobre mim :)', inline: true },
                { name: 'ping', value: 'Teste se estou acordado', inline: true},
                { name: 'carteira', value: 'Veja quantos coins você tem guardado', inline: true}
            )
        message.channel.send(embed);
        message.delete({timeout: 500})
    }
}  