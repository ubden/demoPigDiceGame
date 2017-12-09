var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Generate random number
    var dice = Math.floor(Math.random() * 6) + 1; // Numbers between 1 and 6
    console.log(dice);

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'img/dice-' + dice + '.png';
    // 3. Update the round score IF the rolled number was NOT a 1

});

//document.querySelector('#current-' + activePlayer).textContent = dice;