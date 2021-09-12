// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const axios = require("axios");
const chalk = require("chalk")
require('dotenv').config()

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES], partials: ['MESSAGE', 'CHANNEL'] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log(chalk.green(`Logged in as ${client.user.username}`));
});

client.on("debug", function (info) {
  console.log(chalk.blue(`debug -> `) + `${info}`);
});

var text = ""

client.on("messageCreate", (message) => {


  if (message.author.bot) return;

  console.log(chalk.yellow(`${message.channel.name} -> `) + chalk.yellow(`${message.content}`));
  text = `${message.content}`
  userId = `${message.author.id}`

  // Send POST request

  axios.post("http://localhost:5005/webhooks/rest/webhook", {
    sender: `${userId}`,
    message: `${text}`
  })
    .then(res => {
      //console.log(res.data[0].text)
      message.channel.send(res.data[0].text)


    })

    .catch(function (error) {
      if (error.request) {
        let errorString = error.message
        if (`${errorString}`.includes('ECONNREFUSED')) {
          console.log(chalk.red(`ERROR -> API is down.`));
        }
      }
    })
})



// Login to Discord with your client's token
client.login(process.env.TOKEN);
