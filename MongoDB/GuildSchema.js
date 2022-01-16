var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const guildSchema = new Schema({
    guildId: String,
    guildName: String,
    Module1Channel: String,
    Module2Channel: String,
    Module3Channel: String
})

module.exports = mongoose.model('guild', guildSchema);
