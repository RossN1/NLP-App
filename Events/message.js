const chalk = require("chalk");
const RasaAPI = require("../Middleware/RasaAPI");

module.exports = {
    name: 'messageCreate',
    once: false,
    execute(message) {
        var text = ""
        if (message.author.bot) return;
        console.log(chalk.green(`${message.author.username} -> ${message.channel.name} -> `) + chalk.white(`${message.content}`));
        text = `${message.content}`
        userId = `${message.author.id}`

        if(text.includes("API")) {
            console.log(RasaAPI())
        } else {
            console.log("Don't send to API")
        }
        


    }
}