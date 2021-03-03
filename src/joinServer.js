const { Client, message } = require('discord.js'); 
const bot = new Client();
const cfg = require("../config.json");

module.exports = function joinServer(member) {
    const canal = member.guild.channels.cache.find(c => c.id === cfg.canalEntrada);
    canal.send(`${member} Bem vindo ao nosso querido Survidor`)
}