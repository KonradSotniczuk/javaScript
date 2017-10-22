/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

- STATE VARIABLE tells us the condition of the system. Uzywamy ja aby cos zapamietać.
*/
var scores, roundScore, activePlayer, gamePlaying;   // Global scope wiec reszta moze uzywac.

// scores 		 = [0,0];
// roundScore 	 = 0;
// activePlayer = 0;

init() 


//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;    // # to id w CSS
									// podstawia ja w robot. Ustawia gracza, bo 1 i 0 to oddzielni gracze
									// textContent - ustawia dane tylko jako plain text.

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
									// innerHTML zapisuje to jako HTML. Tylko wpisujsz jako HTML uzywajac ''



// 	document.querySelector('#current-' + activePlayer).textContent = dice;    // # to id w CSS
// Select

var x = document.querySelector('#score-0').textContent;   // przeczytał value
console.log(x);

// document.querySelector('.dice').style.display = 'none';
								// style // css property // value we give to css
// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';
/*
Readabout Event, Event listener
*/
/* 
function	btn() {

}

btn();    // robimt to aby "call the function"

// https://developer.mozilla.org/en-US/docs/Web/Events
//document.querySelector('#btn-roll').addEventListener('click',btn); 
nie dajemy () w btn tutaj, ponieważ chcemy aby zostałą wywołana przez addEventListener, a nie tam. 
funkcje postawione w miejscu btn nazywamy callbac function. Bo jest wywołana przez inną funcję.
 A callback function, also known as a higher-order function, is a function that is passed to another function (let's call this other function “otherFunction”) as a parameter, 
and the callback function is called (or executed) inside the otherFunction.*/


document.querySelector('.btn-roll').addEventListener('click', function() {
if (gamePlaying) {

		// addEventListener, znaczy ze czeka na jakies wydarzenie i robi cos
		// do something. This function is an annonymus function
		// 1. Random Number
		var dice = Math.floor(Math.random() * 6 + 1);     // Scope oznacza, ze to bedzie tylko tutaj. Nie będzie wyzej w scope chain

		// 2. Display the result
		var diceDOM = document.querySelector('.dice'); //numer kosci bedize ptrzebny czesto
		diceDOM.style.display = 'block'; 
		diceDOM.src = 'dice-' + dice + '.png';
		//https://developer.mozilla.org/en-US/docs/Web/CSS/display

		// 3 Update the round score but only if the oll number was not 1.
		if (dice !== 1) {   // !== oznacza ze musi byc inne niz 
			// add score
			roundScore += dice; //roundScore = roundScore + dice
			document.querySelector('#current-' + activePlayer).textContent = roundScore; // wczsniej ustawiam wynik a potem wstawiam go w miejsce wskazane w tej linijce.
		} else {
			nextPlayer();
		}
	}
}); 
/* Anonymus function - funckja bez imienia, ktorej nie da sie reuse.
An anonymous function is a function that is not stored in a program file, but is associated with a variable whose data type is function_handle . 
Anonymous functions can accept inputs and return outputs, just as standard functions do. However, they can contain only a single executable statement.  */


document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {  //to nie ma else. bo jak false po prostu si nie wykona

	// Add CURRENT sore to GLOBAL score
	scores[activePlayer] += roundScore;

	// Update the UI.
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];  // bo w HTML pliku jest id="score-0/1"
	// Check if player won the game
	if (scores[activePlayer] >= 12) {
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
		// next player
		// ternary operator
		activePlayer === 0 ? activePlayer =1: activePlayer = 0; //if 0 then(?) xxx else(:) xxx
		// if (activePlayer === 0) {   //to samo
		// 	activePlayer = 1;
		// } else {
		// 	activePlayer = 0;
		// } 
		roundScore = 0;  // jak jest jeden ustaw wyni na 0

		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';	
		

		// W pliku HTML jest klasa active  ktora pokazuje ktory gracz jest aktywny. 
		// Chcemy aby JS ja zmienia miejsce dla aktywnego uzytkownia.

		//document.querySelector('player-0-panel').classList.remove('active');
		//document.querySelector('player-1-panel').classList.add('active');

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init); // bez nawiasow - poniewaz 
// funkcja bylaby wykonana przy każdym czytaniu kodu przez apke. A tak bedize wczytana tylko na Click.

function init() {
	// Initnialize function - ustawia nas do momentu inicjalizacji wszystkiego. Do poczatku ;p
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


// Chalanges
// 1. Traci all jak ma  dwie 6 pod rzad
// 2. Gracze sami moga ustalac jaki wynik daje zwyciestwo. Poczytaj value z .value property w javascript
// 3. Dodaj 2 kostkę. Gracz rzegrywa gry jedna z 2 ma jedynke.


