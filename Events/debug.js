const chalk = require("chalk")


module.exports = {
    name: 'debug',
    once: true,
    execute(info) {
        console.log(chalk.blue(`debug -> `) + `${info}`);
    }
}