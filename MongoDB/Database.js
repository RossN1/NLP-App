const mongoose = require('mongoose');
const path = require("path")
const chalk = require("chalk");
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

function main() {
  mongoose.connect(process.env.MONGO_URI);
  console.log(chalk.green("Connected to mongoDB"))
}

module.exports = main();