const { Client, message } = require('discord.js'); 
const bot = new Client();
const cfg = require("../config.json");

module.exports = function joinServer(member) {
    const canal = member.guild.channels.cache.find(c => c.id === "683797690185678911");
    canal.send(`${member} Bem vindo ao nosso querido Survidor`)
}