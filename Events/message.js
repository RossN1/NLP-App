const chalk = require("chalk");
const HaystackAPIFunction = require("../Middleware/HaystackAPI");

module.exports = {
    name: 'messageCreate',
    once: false,
    execute(message) {
        var text = ""
        if (message.author.bot) return;
        console.log(chalk.green(`${message.author.username} -> ${message.channel.name} -> `) + chalk.white(`${message.content}`));
        text = `${message.content}`
        userId = `${message.author.id}`  
        HaystackAPIFunction.HaystackAPI(message)   
    }
}