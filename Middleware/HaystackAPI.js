const chalk = require("chalk");
const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const axiosTime = require('axios-time');
// Send POST request
function HaystackAPIFunction(message) {
    // Get time
    var time = axiosTime(axios);

    axios.post("http://localhost:8000/query", {
        query: `${message.content}`,
        params: {}
    })
        .then(res => {            
            var answer = res.data.answers[0].answer
            var score = res.data.answers[0].score
            var timeTaken = res.timings.elapsedTime
            if (answer == "") {
                answer = res.data.answers[1].answer
                score = res.data.answers[1].score
            }           
            var ScoreFixed = score.toFixed(2)
            const embed = new MessageEmbed()
            .setColor(0x3498DB)
            .setAuthor(message.author.username)
            .setTitle(`${message.content}`)
            .setDescription(`${answer}`)
            .addField("Confidence", `${ScoreFixed}`)
            .setTimestamp()
            .setFooter(`Time taken: ${timeTaken}ms`)
            message.channel.send({ embeds: [embed] })
        })
        .catch(function (error) {
            if (error.request) {
                let errorString = error.message
                if (`${errorString}`.includes('ECONNREFUSED')) {
                    console.log(chalk.red(`ERROR -> API is down.`));
                }
            }
        })
}

module.exports = {
    HaystackAPI: HaystackAPIFunction
}


































