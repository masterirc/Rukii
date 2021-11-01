function successfullMessage(msg) {
    return "✅ *Ruki*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Ruki*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "• *Ruki :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
