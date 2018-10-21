const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı Üstadım.');

    var Games = [

        "!yardım By LetsGo",
    
        "🔥!Cowsay Aktif🔥",
        
		"🔥!reklamtara Aktif🔥",
		
		"🔥!mesajküçült Aktif🔥",
		
        `${client.users.size} Kullanıcı İçin Teşekkürler`,
        
        `${client.guilds.size} Sunucu İçin Teşekkürler`,
        
        `Rıca Etsem Beni Eklermisin !botdaveti`,



        `🔥Yapımcım LetsGo#4941`


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/semihmehmettr");
        }, 2 * 2500);

};