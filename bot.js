const { Client, MessageEmbed } = require('discord.js'); 
const bot = new Client();
const cfg = require("./config.json");
const imagens = require("./images.json");
const saudacao = require('./src/comands/saudacao');
const ajuda = require('./src/comands/ajuda')
const joinServer = require('./src/joinServer')
const gostoso = require('./src/comands/gostoso')

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
    if (message.reference != null) return false;
    
        //Caso o bot seja mencionado ele irá responder
    if (message.mentions.has(bot.user.id)) {
        const values = Object.values(imagens);
        const randomValue = values[parseInt(Math.random() * values.length)];
            message.channel.send(`${message.member}`);
            if (message.author.id === '134687378521456641') {
                const embed = new MessageEmbed()
                .setTitle(`Criador, que alegria você por aqui  <:su_love4:695377304045617162>`)
                .setColor([45,25,52])
                .setImage(randomValue)
                message.channel.send(embed);
                message.delete({timeout: 500});   
            }

            if (message.author.id != '134687378521456641') {
                const embed = new MessageEmbed()
                .setTitle(`Oii `+ message.author.username + '  <:su_pikauwu:684780783264595980> ')
                .setColor([45,25,52])
                .setImage(randomValue)
                message.channel.send(embed);
                message.delete({timeout: 500});  
            }  
    };
    //dispara as funções
    saudacao(message);
    ajuda(message);
    gostoso(message);
});
 // monitora quando alguem entra no servidor
bot.on("guildMemberAdd", async member => {
    joinServer(member);
})

bot.login(cfg.token)