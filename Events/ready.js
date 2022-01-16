const chalk = require("chalk");
const Guild = require("../MongoDB/GuildSchema");


module.exports = {
    name: 'ready',
    once: true,
    execute(client) {

        console.log(chalk.green(`Logged in as ${client.user.username}`));
        const Guilds = client.guilds.cache.map(guild => guild.id);

        
        
        Guilds.forEach(Guilds => {
            // a document instance
            var newGuild = new Guild({ guildId: Guilds });

            // Look for guild in DB            
            Guild.countDocuments({ guildId: Guilds }, function (err, count) {
                if (count > 0) {

                } else {
                    // save model to database
                    newGuild.save(function (err, guild) {
                        if (err) return console.error(err);
                        console.log(guild.guildId + " saved to guilds collection.");
                        
                    })
                }

            })
        })
    }

}

// When the client is ready, run this code (only once)
