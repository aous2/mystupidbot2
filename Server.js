const Discord = require('discord.js');
const config = require('dotenv').config()

const Webhook = new Discord.WebhookClient(process.env.BOT_ID,process.env.BOT_TOKEN);

let Parser = require('rss-parser');
let parser = new Parser();
var rsslist =  process.env.FESTIVALS.split(' ');

(async () => {

    let i;let feed = [];
    for (i = 0; i < rsslist.length; i++)   feed.push(await parser.parseURL(rsslist[i]));
    for (i = 0; i < rsslist.length; i++)  feed[i].items.forEach(Item => {console.log(Item.title)});

})();
//Webhook.send('Hello world');
