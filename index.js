let fetch = require("node-fetch")

async function getnode() {
    let bestnode = await fetch("https://api.invalid-studios.com/lavalink")
    return bestnode.json()
}

module.exports = getnode