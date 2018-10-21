const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  hoş geldin ^^');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hg') {
    msg.reply('Hoş Bulduk :fire: ^^');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hb') {
    msg.reply('Hoş Geldin :joy: ^^');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'youtube') {
    msg.reply('https://www.youtube.com/channel/UCn8-2_der7Bf7Cb2k9n29qw?view_as=subscriber ^^');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'günaydın') {
    msg.reply('Günaydın :smile:  ^^');
  }
});
client.on('message', msg => {
  if (msg.content === 'amk') {
   msg.delete(5)
    msg.reply('Küfür Etme Kardeş');
  }
});
////////////////////////

 ////////////////////////
client.on("guildMemberAdd", member => {
	
	var channel = member.guild.channels.find("name", "giriş-çıkış");
	if (!channel) return;
	
	var role = member.guild.roles.find("name", "ÜYE");
	if (!role) return;
	
	member.addRole(role); 
	
	channel.send(member + " artık " + role + " rolü ile aramızda https://giphy.com/gifs/welcome-OkJat1YNdoD3W?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=https://elearning.newinti.edu.my/webapps/blackboard/content/listContent.jsp?course_id=_71503_1&content_id=_3209606_1&mode=reset ");
	
	member.send("Aramıza hoş geldin! Artık @ÜYE rolüne sahipsin!")
	
});

client.on("guildMemberAdd", member => {
    let otorol = JSON.parse(fs.readFileSync("./sunucuyaözelayarlar/otorol.json", "utf8"));
  
    var role = otorol[member.guild.id].role;
  const rol = member.guild.roles.find('name', role);
    if (!rol)
    member.addRole(role);
});
client.on('message', msg => {
  if (msg.content === 'oç') {
   msg.delete(5)
    msg.reply('Küfür Etme Kardeş');
  }
});
client.on('message', msg => {
  if (msg.content === 'amcık') {
   msg.delete(5)
    msg.reply('Küfür Etme Kardeş');
  }
});
client.on('message', msg => {
  if (msg.content === 'oruspu cocugu') {
   msg.delete(5)
    msg.reply('Küfür Etme Kardeş');
  }
});
client.on('message', msg => {
  if (msg.content === 'orusbu cocugu') {
   msg.delete(5)
    msg.reply('Küfür Etme Kardeş');
  }
});
client.on('message', msg => {
  if (msg.content === 'ananı') {
   msg.delete(5)
    msg.reply('Küfre Kalkışma Kardeşim :crown:');
  }
});
client.on('message', msg => {
  if (msg.content === 'sikerim') {
   msg.delete(5)
    msg.reply('Küfür Etme Kardeş');
  }
});
client.on('message', msg => {
  if (msg.content === 'bacını sikerim') {
   msg.delete(5)
    msg.reply('Küfür Etme Kardeş');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'lol') {
    msg.reply('WOW COOL ÇOCUK OLDUN LOL DEMEKLE :fire: ^^');
  }
});