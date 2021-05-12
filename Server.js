const Discord = require('discord.js');
const config = require('dotenv').config()

const Webhook = new Discord.WebhookClient(process.env.BOT_ID,process.env.BOT_TOKEN);

let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

  let feed = await parser.parseURL('https://www.reddit.com/.rss');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();


Webhook.send('Hello world');
