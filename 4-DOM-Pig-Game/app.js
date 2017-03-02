/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, dicesResults;

dicesResults = [0,0]

init();

document.querySelector('.btn-roll').addEventListener('click', function() {

	if(gamePlaying) {

		// define os valores dos dados
		var dices = [ Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]

		// display block nos dois dados com os valores
		for (var i = 0; i < dices.length; i++) {

			var diceDOM = document.querySelector('.dice-' + i);
			diceDOM.style.display = 'block';
			diceDOM.src = 'dice-' + dices[i] +'.png';

		}

		// confere se tirou dois '6' duas vezes seguidas
		if ( dices[0] === 6 && dices[1] === 6 && dices[0] === dicesResults[0] && dices[1] === dicesResults[1] ) {
			document.querySelector('#current-' + activePlayer).textContent = '0';
			dicesResults = [0,0];
			nextPlayer();
		// confere se tirou pelo menos um dado com valor '1'
		} else if( dices[0] === 1 || dices[1] === 1 ){
			nextPlayer();
		// popula o current score
		} else {
			for (var i = 0; i < dices.length; i++) {
				dicesResults[i] = dices[i];
				roundScore += dices[i];
				document.querySelector('#current-' + activePlayer).textContent = roundScore;
			}
		}

	}

});

document.querySelector('.btn-hold').addEventListener('click', function(){

	if(gamePlaying) {
		// add CURRENT to GLOBAL score
		scores[activePlayer] += roundScore;

		// Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		var input = document.querySelector('.total-score').value;

		if(input)  {
			winningScore = input;
		} else {
			winningScore = 100;
		}

		// Check if player won the game
		if(scores[activePlayer] >= winningScore) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice-0').style.display = 'none';
			document.querySelector('.dice-1').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}

});

function nextPlayer() {

	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice-0').style.display = 'none';
	document.querySelector('.dice-1').style.display = 'none';

}

/*
// altera o número máximo de pontos e reinicia o jogo
document.querySelector('.total-score').addEventListener('blur', function(){
	init();
});
*/

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0,0]
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	for( var i = 0; i < scores.length; i++) {
		document.getElementById('score-' + i).textContent = '0';
		document.getElementById('current-' + i).textContent = '0';
		document.getElementById('name-' + i).textContent = 'Player ' + (i+1);
		document.querySelector('.player-' + i + '-panel').classList.remove('winner');
		document.querySelector('.player-' + i + '-panel').classList.remove('active');
		document.querySelector('.dice-'+ i).style.display = 'none';
	}

	// first player always starts active
	document.querySelector('.player-0-panel').classList.add('active');

}