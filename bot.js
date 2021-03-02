const { Client, MessageEmbed } = require('discord.js'); 
const bot = new Client();
bot.once('ready', () => {console.log(`Bot Online e operante`)});

bot.on('message', msg => {
    if (msg.content === '!oi') {
        const embed = new MessageEmbed()
            .setTitle('Olá!!')
            .setColor(0000000)
            .setImage('https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif')
            .addField('Sou o bot do Survidor','Eu ainda estou em desenvolvimento, mas em breve vou poder entreter vocês!')
            .setFooter('Imagens do Prodd neste momento'); 
            msg.channel.send(embed);
            msg.delete({timeout: 1000});  
        }   
    }            
);

  bot.login('ODE2MDQyNDg5Mjk1Mjc0MDQ1.YD1Myg.n6y8E2RqlPQhwkTRfCStKvmjDjw')