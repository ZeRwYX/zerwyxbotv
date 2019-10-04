const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require ('fs');
var prefix = "Z!";

client.login("NjI4ODk5MjAwNjMzMDEyMjI0.XZTqHA.N6f9gcmfUywjgteK-Kkvq19Shqg");

//Bonjour couleur bleu
client.on("guildMemberAdd", user =>{
    let joindEmbed = new Discord.RichEmbed()
        .setColor("#0077ff")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription( "**Bienvenue a toi** " + user + " **Merci pour ta visite!**")
        .setFooter("Souhaitez luis la bienvenue.")
        user.guild.channels.get("629026605284458500").send(joindEmbed)

});
//aurevoir couleur rose
client.on("guildMemberRemove", user =>{
    let leaveEmbed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription( "**Dommage** " + user + " **Vien de nous quitter le serveur**")
        .setFooter("Aucune funeraille ne te seras faites pour tes adieux ")
        user.guild.channels.get("629026605284458500").send(leaveEmbed)
});
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "Maintenance"){
        message.channel.send("> Les serveurs du spotify checker sont en maintenance. Nous essayons de resoudre le probléme le plus rapidement possibles. Pour savoir quand les serveurs serons revenue le premier chanel vous indiquera l'activiter du serveur")
    }
});
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "giveaway"){
        message.channel.send("__Voicie la liste des prochain giveaway a venir__")
        message.channel.send("**Giveway a venir         Minecraft premium au 50 membre**")
        message.channel.send("**Giveway a venir                Compte Origine au 50 membre**")
    }
});
fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);
//14
        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });

        client.on("message", message =>{
            if(!message.guild) return
            if(message.content === prefix + "help"){
                message.channel.send("__**Voici le commande mis a votre disposition:**__")
                message.channel.send("Maintenance:                       Afficher la raison de la maintenance")
                message.channel.send("giveaway:     Afficher les prochaine concour(giveaway) a venir")
                message.channel.send("Prefix:                                                                                                  Z!")
            }
        });
});
