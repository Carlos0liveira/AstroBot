const { Client } = require('discord.js'); 
const bot = new Client();
const cfg = require("./config.json");
const saudacao = require('./src/comands/saudação');
const ajuda = require('./src/comands/ajuda')

bot.on('ready', () => {
    console.log(`Bot Online e operante`)
    bot.user.setActivity(`Prazer me chamo Astro digite !ajuda para ver meus comandos`);
    }
);

bot.on('message', (message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;    
    saudacao(message);
    ajuda(message);
});

bot.login(cfg.token)