
const determineWinner = ({ player, enemy, timerId }) => {
    clearTimeout(timerId);
    document.querySelector('.display-text').style.display = 'flex';
    if(player.health === enemy.health) {
    document.querySelector('.display-text').innerHTML = 'Tie';
    } else if (player.health > enemy.health) {
        document.querySelector('.display-text').innerHTML = 'Player 1 Wins';
    } else if (enemy.health > player.health) {
        document.querySelector('.display-text').innerHTML = 'Player 2 Wins';
    }
}

let timer = 60;
let timerId;

const decreaseTimer = () => {
    if(timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000);
        timer--;
        document.getElementById('timer').innerHTML = timer;
    }
    if(timer === 0) {
        document.querySelector('.display-text').style.display = 'flex';
        determineWinner({ player, enemy, timerId });
    }
}