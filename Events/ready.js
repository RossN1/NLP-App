const chalk = require("chalk")


module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(chalk.green(`Logged in as ${client.user.username}`));
    }
}

// When the client is ready, run this code (only once)
