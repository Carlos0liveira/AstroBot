const { Client, MessageEmbed } = require('discord.js'); 
const bot = new Client();
bot.once('ready', () => {console.log(`Bot Online e operante`)});


bot.on('message', msg => {
    if (msg.content === '!oi') {
        const embed = new MessageEmbed()
            .setTitle('Olá!!')
            .setColor(7419530)
            .setDescription('Eu ainda estou em desenvolvimento, mas em breve vou poder alegrar vocês!')
            .setFooter('Prodd neste momento')
            .setImage('https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif');    
        }   
        
    }            
);

  bot.login('ODE2MDQyNDg5Mjk1Mjc0MDQ1.YD1Myg.B2S2K3tXE0uSdfXwWJhK-TF1-ME')