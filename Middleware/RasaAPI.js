const chalk = require("chalk");
const axios = require("axios");
const message = require("../Events/message");

// Send POST request
function RasaAPI (message) {

    console.log(`Rasa API: ${message}`)

    // axios.post("http://localhost:5005/webhooks/rest/webhook", {
    //     userId: `userId`,
    //     text: `text`
    // })
    //     .then(res => {
    //         //console.log(res.data[0].text)
    //         message.channel.send(res.data[0].text)
    //     })

    //     .catch(function (error) {
    //         if (error.request) {
    //             let errorString = error.message
    //             if (`${errorString}`.includes('ECONNREFUSED')) {
    //                 console.log(chalk.red(`ERROR -> API is down.`));
    //             }
    //         }
    //     })
}

module.exports = {
    RasaAPI: RasaAPI
}