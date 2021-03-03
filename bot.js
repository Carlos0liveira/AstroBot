const { Client, MessageEmbed } = require('discord.js'); 
const bot = new Client();
const cfg = require("./config.json");

bot.on('ready', () => {
    console.log(`Bot Online e operante`)
    bot.user.setActivity(`Sou o Bot do Surv digite !ajuda para ver meus comandos`)
    }
);

bot.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return; 
        
    const arg = message.content.slice(cfg.prefix.length).trim().split(/ +/g);
    const command = arg.shift().toLowerCase();

    if (command === 'oi') {
        const embed = new MessageEmbed()
            .setTitle('Olá!!')
            .setColor(0000000)
            .setImage('https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif')
            .addField('Sou o bot do Survidor','Eu ainda estou em desenvolvimento, mas em breve vou poder entreter vocês!')
            .setFooter('Imagens do Prodd neste momento'); 
            message.channel.send(embed);
            message.delete({timeout: 1000});  
        }   
    }            
);

  bot.login(cfg.token)