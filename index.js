// Code your solutions in this file
function writeCards() {
    let names = ["Guadalupe", "Ollie", "Aki"]
    let event = "birthday"
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return cards
}

countDown = function() {
    let i = 10
    while (i >= 0) {
        console.log(i)
        i--
    }
}
