const emojis = require('emoji.json');

module.exports = { main: function (event, context) {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const payload = event.data.map((name) => {
        return {
            name,
            emoji: emoji.codes,
            details: emoji
        }
    })

    return event.extensions.response.json(payload);

} }
