const { Client, MessageEmbed } = require('discord.js'); 
const bot = new Client();
var date = new Date;


const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./AstroDB.db');

module.exports = function banco(message) {

    let sql = 'SELECT * FROM usuarios WHERE user=?';
    let user = message.author.id;
    //console.log( Math.round((Math.abs(message.createdAt.getTime() - date.getTime())) / 60000) );
    //console.log(date);
    //console.log(message.createdAt)


    db.get(sql, [user], (err, row)=>{
        if (err) {
            return console.error(err.message);
        }

        if (!row) {
          db.run(`INSERT INTO usuarios (user, coins, lastmsg) VALUES ('${message.author.id}', 1, '${message.createdAt}')`);  
        }else {
            var teste = new Date(row.lastMsg)
            console.log(message.channel.name + ' ' + message.author.username)
            console.log( Math.round((Math.abs(message.createdAt.getTime() - teste.getTime())) / 60000) );


            if ( (Math.round((Math.abs(message.createdAt.getTime() - teste.getTime())) / 60000)) > 2  ) {
                let coins = row.coins + 1;
                db.run(`UPDATE usuarios SET coins = ${coins}, lastmsg = '${message.createdAt}' WHERE user = ${message.author.id} `)
            }
        }


            //comandos do banco
        if (message.content.toUpperCase() === '!CARTEIRA') {
            message.channel.send(`${message.member} Você tem exatamente ${row.coins} Astro coins`)
        }

    })



    

}
