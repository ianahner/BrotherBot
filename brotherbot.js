var Discord = require('discord.js');
var auth = require('./auth.json');
// Configure logger settings
const winston = require('winston');

const logger = module.exports = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.simple()
  )
});

logger.log('info', 'This is an information message.');
// Initialize Discord Bot
var bot = new Discord.Client;
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', (msg) => {
    console.log("We got a message");
    console.log(msg.content);
    if(msg.author.bot){
      return;
    }
   
    //Convert message to lowercase
    var lcmsg = msg.content.toLowerCase();

    //Robust hell yeah brother
    if(lcmsg.includes('yeah')||lcmsg.includes('yea')){
     if(lcmsg.includes('bro')||lcmsg.includes('brother')||lcmsg.includes('bruh')){
       msg.channel.send("HELL YEAH BROTHER!!!");
     }
    }
   
    //pilot
    if(lcmsg.includes('plane') || lcmsg.includes('airplane') || lcmsg.includes('pilot')){
     msg.channel.send("Did I mention that I'm a pilot?");
    }
});

bot.login(auth.token);
