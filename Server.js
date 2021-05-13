const Discord = require('discord.js');
const config = require('dotenv').config()
const fs = require('fs')
const Webhook = new Discord.WebhookClient(process.env.BOT_ID,process.env.BOT_TOKEN);

let Parser = require('rss-parser');
let parser = new Parser();
var rsslist =  process.env.FESTIVALS.split(' ');

(async () => {
    let feed = [];
    let feed2 = [];
    
    //getting last saved rss data from feeds.json
    {
    data = fs.readFileSync('Feeds.json', 'utf8') 
    feed = JSON.parse(data.toString());
    }

    //getting new feed and comparing with old data
    let i;let news;
    for (i = 0; i < rsslist.length; i++) {
        feed2.push(await parser.parseURL(rsslist[i]));
        feed[i].items.forEach(item => {
            let j=0;
            feed2[i].items.forEach(item2 => {
                if (item.title == item2.title){j=1; break;}
                if(j==0)news += item;
            });
        });
    }
    //update feeds.json
    {
    let StFeed; 
    StFeed= JSON.stringify(feed2);
    fs.writeFileSync('Feeds.json', StFeed);
    }
})();
//Webhook.send('Hello world');
