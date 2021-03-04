const { Client, MessageEmbed } = require('discord.js'); 
const bot = new Client();
const cfg = require("./config.json");
const imagens = require("./images.json");
const saudacao = require('./src/comands/saudacao');
const ajuda = require('./src/comands/ajuda')
const joinServer = require('./src/joinServer')

    //conexão do banco
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./AstroDB.db');
    
    //quando o bot é startado
bot.on('ready', () => {
    console.log(`Bot Online e operante`)
    bot.user.setActivity(`Prazer me chamo Astro digite !ajuda para ver meus comandos`);
    }
);


bot.on('message', (message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;  
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;  
        //Caso o bot seja mencionado ele irá responder
    if (message.mentions.has(bot.user.id)) {
        const values = Object.values(imagens);
        const randomValue = values[parseInt(Math.random() * values.length)];
        const embed = new MessageEmbed()
            .setTitle(`Oii`)
            .setColor([45,25,52])
            .setImage(randomValue)
            message.channel.send(embed);
    };
    //dispara as funções
    saudacao(message);
    ajuda(message);
});
 // monitora quando alguem entra no servidor
bot.on("guildMemberAdd", async member => {
    joinServer(member);
})

bot.login(cfg.token)