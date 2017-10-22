
var scores, roundScore, activePlayer, gamePlaying;   // Global scope wiec reszta moze uzywac.
var prevResult = 0;

 var rollDice = function() {
	console.log(prevResult);
if (gamePlaying) {
// 1. Random Number
		var dice = Math.floor(Math.random() * 6 + 1);     // Scope oznacza, ze to bedzie tylko tutaj. Nie będzie wyzej w scope chain
		
// 2. Display the result
		var diceDOM = document.querySelector('.dice'); //numer kosci bedize ptrzebny czesto
		diceDOM.style.display = 'block'; 
		diceDOM.src = 'dice-' + dice + '.png';
// 3 Update the round score but only if the oll number was not 1.
		if (dice !== 1 && dice !== 6) {   // !== oznacza ze musi byc inne niz 
			// add score
		addResult(dice);
	 	} else if (dice == 6 && prevResult !== dice) { // && prevResult !== dice) {
			prevResult = dice;
			addResult(dice);
		} else if (dice == 6 && prevResult == dice) {
			nextPlayer();
			prevResult = 0;			
		} else {
			nextPlayer();
			prevResult = 0;
		}
	}
	console.log(prevResult)
}

init() 


var x = document.querySelector('#score-0').textContent;   // przeczytał value
console.log(x);

document.querySelector('.btn-roll').addEventListener('click', rollDice); 

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {  //to nie ma else. bo jak false po prostu si nie wykona

	// Add CURRENT sore to GLOBAL score
	scores[activePlayer] += roundScore;

	// Update the UI.
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];  // bo w HTML pliku jest id="score-0/1"
	// Check if player won the game
	if (scores[activePlayer] >= 32) {
		document.querySelector('#name-' + activePlayer).textContent = 'Winner';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); // Klasa powstała wCSS
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); // Klasa powstała wCSS
		gamePlaying = false;
	} else {
		// next player
		nextPlayer() ;
	}
	}

});






function nextPlayer() {
		activePlayer === 0 ? activePlayer =1: activePlayer = 0; //if 0 then(?) xxx else(:) xxx
		roundScore = 0;  // jak jest jeden ustaw wyni na 0

		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';	
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init); 

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.getElementById('name-0').textContent = 'Player 1'; // get element by ID wiec nie trza #
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner'); 
	document.querySelector('.player-1-panel').classList.remove('winner'); 
	document.querySelector('.player-0-panel').classList.remove('active'); 
	document.querySelector('.player-1-panel').classList.remove('active'); 

	document.querySelector('.player-0-panel').classList.add('active'); 		// wpierw remove a potem Add aby miec pewność

}

function addResult(dice) {
	roundScore += dice; //roundScore = roundScore + dice
	document.querySelector('#current-' + activePlayer).textContent = roundScore;
}


// Chalanges
// 1. Traci all jak ma  dwie 6 pod rzad
// 2. Gracze sami moga ustalac jaki wynik daje zwyciestwo. Poczytaj value z .value property w javascript
// 3. Dodaj 2 kostkę. Gracz rzegrywa gry jedna z 2 ma jedynke.


