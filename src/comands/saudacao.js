const {  MessageEmbed, Message } = require('discord.js'); 
const bomDia = require('../jsons/bomDia.json');
const neAstro = require('../jsons/neAstro.json');
const blacklist = require('../jsons/blacklist.json');
const blackResp = require('../jsons/blackResp.json')

module.exports = function msgSend(message) {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;  
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;  

    if (message.content.toUpperCase() === '!OI') {
        const embed = new MessageEmbed()
            .setTitle('Olá! Me chamo Astro')
            .setColor([45,25,52])
            .setImage('https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif')
            .addField('Sou o bot do Survidor','Eu ainda estou em desenvolvimento, mas em breve vou poder entreter vocês!')
            .setFooter('Imagens do Prodd neste momento'); 
            message.channel.send(embed);
            message.delete({timeout: 500});  
    } 

    if (message.content.toUpperCase().includes('BOM DIA ASTRO')){
        const values = Object.values(bomDia);
        const randomValue = values[parseInt(Math.random() * values.length)];
        message.channel.send(randomValue);
    }

    if (message.content.toUpperCase().includes('NÉ ASTRO')){
        const values = Object.values(neAstro);
        const randomValue = values[parseInt(Math.random() * values.length)];
        message.channel.send(randomValue);
    }

    if (message.content.toUpperCase() === '!PING'){
        const embed = new MessageEmbed()
            .setTitle('Pooooong!!!!')
            .setImage('https://media.giphy.com/media/ECwTCTrHPVqKI/source.gif')
        message.channel.send(embed);
    }

        /*for (let i = 0; i < blacklist.length; i++) {
            console.log(blacklist[1])
            if (message.content.toUpperCase().includes(blacklist[i])) {
                const values = Object.values(blackResp);
                const randomValue = values[parseInt(Math.random() * values.length)];
                message.channel.send(randomValue);
            }
        }*/
}            

  
    
