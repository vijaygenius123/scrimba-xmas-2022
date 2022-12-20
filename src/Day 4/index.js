/* Whispering function
Write a function `whisper` that takes in a sentence
and returns a new sentence in all lowercase letters with
"shh..." at the beginning.

The function should also remove an exclamation point
at the end of the sentence, if there is one.

Example
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(message) {
    const lowerCaseMessage = message.toLocaleLowerCase()
    return `shh... ${lowerCaseMessage[lowerCaseMessage.length - 1] === '!' ?
        lowerCaseMessage.substring(0, lowerCaseMessage.length - 1) : lowerCaseMessage}`
}

module.exports = whisper
