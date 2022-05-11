let game = ['rock', 'paper', 'scissor'];

function getHand() {
    let randomIndex = Math.floor(Math.random() * 3);
    return game[randomIndex];
}
console.log(getHand());