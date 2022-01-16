// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require('dotenv').config()
const fs = require("fs")
const chalk = require("chalk");
const db = require("./MongoDB/Database")

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES], partials: ['MESSAGE', 'CHANNEL'] });

const eventFiles = fs.readdirSync('./Events').filter(file => file.endsWith('.js'));

if (eventFiles.length <= 0) return console.log(chalk.red("There are no commands to load..."));

eventFiles.forEach((f, i) => {
  console.log(chalk.yellow((`${i + 1}: ${f} loaded!`)));
})

for (const file of eventFiles) {
  const event = require(`./Events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

// Login to Discord with your client's token
client.login(process.env.TOKEN);