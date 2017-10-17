// Lecture 1 Variables
/*
console.log('Hello World');

var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(name + ' ' + lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

/////////////////////////////////////////////
// Lecture variables 2 Cariables and Mutations
/* var name = 'John';
var age  =	26;

console.log(name + age);
console.log(age+age);

var job, isMarried;

console.log(job);

job	= 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years ' + job + '. Is he married? ' +isMarried +'.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years ' + job + '. Is he married? ' +isMarried +'.');

var lastName = prompt('Popup to provide data for a variable')
console.log("The new" + ' ' + lastName)

alert(name + ' is a ' + age + ' years ' + job + '. Is he married? ' +isMarried +'.')
*/

/////////////////////////////////////////////
// Lecture 3 Operators
/*var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMark = 26
// = patrzy od prawej do lewej. Więc 26 = ageMark = ageJohn
console.log(ageJohn);
console.log(ageMark);

ageJohn++;
ageJohn = ageJohn + 1;

ageMark *= 2;
ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
*/

/////////////////////////////////////////////
// Lecture 5 If / else Statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {  //Condition. Needs to be True forif to execute. === is a comparison operator. Returns a true or false value
console.log(name + 'is married');
//if false 
} else {
	console.log(name + ' will be married soon');
}

isMarried = false;

if (isMarried) {
	console.log('yes');
} else {
	console.log('No');
}

if (isMarried) {
	console.log('yes');
} // just nothing happens if No

// ==  does type coortion - konwersja danych z jednego typu na drugi. Np string i numer
// === does not make type corotion - konwersja danych z jednego typu na drugi. Np string i numer

if (23 == "23") {
	console.log('Something')
} //daje true. Jest konwersja.

if (23 === "23") {
	console.log('Something')
} //daje false. Brak konwersji
*/

/////////////////////////////////////////////
// Lecture 6 Boolean Logic and Switch Statements
/*
var age = 20;

if (age < 20) {
// false dla age = 25
	console.log('He is a boy');
} else if (age >= 20 && age < 30) {
// Skoro wczesniejsze jest false, to rozpatrz ten. W tym pierwszy jest tru wiec nie idziemy do 3
	console.log('Between 20 and 30');
} else {
	console.log('He is a man');
} //// Boolean Logic

//Switch statement

var job = 'deweloper';

job = prompt('Daj dane')

switch (job) {
	case 'deweloper':
		console.log("writes programs");
		break; // break jest po to, aby po wykonaniu i stwierdzeniu prawdy zatryzmal sprawdzanie reszty
	case 'driver':
		console.log('drives');
		break;
	case 'cop':
		console.log('kradnie');
		break;
	default: // Jesli żadne nie spełnia, wykona to.
		console.log('John is a NEET');
}

*/





/////////////////////////////////////////////
// Coding Challange 1
/*
age1 = 5
age2 = 16
age3 = 446

wzrost1 = 188
wzrost2 = 156
wzrost3 = 167

wynik1 = wzrost1 + age1 * 5
wynik2 = wzrost2 + age2 * 5
wynik3 = wzrost3 + age3 * 5

if ((wynik1 > wynik2) && (wynik1 > wynik3)) {
	console.log('Wygrywa 1');
} else if ((wynik1 < wynik2) && (wynik2 > wynik3)) {
	console.log('Wygrywa 2');
} else if ((wynik1 < wynik3) && (wynik2 < wynik3)) { 
	console.log("Wygrywa 3");
} else {
	console.log('Remis');
}
*/





/////////////////////////////////////////////
// Lecture 7 Functions
/*
function calculateAge(birthYear) {
	// body...
	var age = 2016- birthYear;
	return age;
}

var ageJohn = calculateAge(1999);
console.log(ageJohn);

function yearsToRetirement(name, birthYear) {
	var age = calculateAge(birthYear);
	var reirement = 65 - age;
	if (reirement >= 0) {	
		console.log(name + ' cos ' + reirement + ' cos')
	}	else {
		console.log(name + ' has already retired')
	}
}

yearsToRetirement('John', 1990);
yearsToRetirement('Mary', 1940);
yearsToRetirement('Mark', 1948);
*/

/////////////////////////////////////////////
// Lecture 8 Statements and Expressions
/*
function function_name(argument) {
	// body...
	// this is a Function Statement - nie kończy się z value i trzeb stworzyć dla niej value. VAR.
}

var function_name = function(argument) {
	// body...
	// Function expression - kończy się z value. Zmienną  patrząc na budowę
}
*/
/////////////////////////////////////////////
// Lecture 9 Arrays
/*
var names = ['X', 'Y', 'Z'];
var years = new Array('1', '2', '3');
console.log(names[1]);
console.log(years[1]);

names[1] = 'F';
console.log(names[1]);

var john = ['John', 'XCA', 1987, 'teacher', false];

john.push('blue'); 		// dodajedo konca array dane
john.unshift('QWE');  	// dodaje do poczatku value
john.pop();   			// usuwa ostatni element
john.shift(); 			// usua pierwsz element

console.log(john);

// alert(john.indexOf('XCA')); // indexof sprawdza ktorym elementem array jest argument
// jesli elementu nie ma, to zwraca "-1"
if (john.indexOf('driver') === -1) {
	console.log('John is not a drver');
}


*/
/////////////////////////////////////////////
// Lecture 10 Objects and Properties (hashes)
/*
var mark = {
	name: 'mark',
	year: 1999,
	food: 'pasta',
	animal: 'dog'
};

console.log(mark);
console.log(mark.food);
console.log(mark['food']);

var xyz = 'animal';
console.log(mark[xyz]);

mark.name = 'Smith';
mark['food'] = 'apple';
console.log(mark);


// Alt way to make object
var jane = new Object();
jane.name = 'jane';
jane.job = 'asdadw';
jane.year = 23;
jane.married = false;

console.log(jane);
*/

/*  // Ver 1.0
var john = {
	name: 'john',
	lastName: 'Fuks',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	animal: 'dog',
	family: ['Jane', 'Mark', 'Bob'],
	
	// tradycyjny zapis
	//calculateAge: function(yearOfBirth) {
	//	return 2016 - yearOfBirth;

	//zapis uzywajacy this.
	// this.  odwoluje sie do tego co jest w danym obiekcie(hashu)
	calculateAge: function() {
		return 2016 - this.yearOfBirth;

	},

}; 

console.log(john);
console.log(john.family);
console.log(john.family[2]);
// console.log(john.calculateAge(1999));  // tradycyjne
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);*/

// Ver 2.0
/*
var john = {
	name: 'john',
	lastName: 'Fuks',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	animal: 'dog',
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		//return 2016 - this.yearOfBirth;
		this.age = 2016 - this.yearOfBirth;
		// this.age -> create a new key(property) for john and add this value
	},

}; 

john.calculateAge();
console.log(john);


var mike = {
	name: 'mike',
	lastName: 'Fuks',
	yearOfBirth: 1950,
	job: 'teacher',
	isMarried: false,
	animal: 'dog',
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		//return 2016 - this.yearOfBirth;
		this.age = 2016 - this.yearOfBirth;
		// this.age -> create a new key(property) for john and add this value
	},

}; 

mike.calculateAge();
console.log(mike);
*/



/////////////////////////////////////////////
// Lecture 11 Loops and Iteration

// for (initial value of a counter; condition do wykonania aby loop sie zakonczyl; co ma sie zdarzyc co iteracje zanim zostanie zakonczona)}

//var names = ['X', 'Y', 'Z', 'Q', "E", 'T']
/*
for (var i = 0; i <= 10; i++) {
	console.log(i);
}


for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}


for (var i = names.length -1; i > 0; i--) {  // -1 poniewaz 0 tez sie liczy wiec bedie za duzo
	console.log(names[i]);
}

var i = 0;    			   // counter
while(i < names.length) { // condition that will be evaluated before each loop. tzn. jak długo i jest mniejsze od dlugosci array, wykonuj.
	console.log(names[i]);
	i++;					// update counter
}

// breake = finish a loop at a certain point

// continue = quite current iteration of the loop and continue with the next one.

for (var i = 1; i <= 5; i++) {
	console.log(i);

	if (i === 3) {
		break;
	}
}

for (var i = 1; i <= 5; i++) {
		if (i === 3) {
		continue;			// 3 nie zostanie wydrukowana, bo continue skipuje aktualna iteracje, a po sprawdz czy jest 3 i continue jest console log, do torego nie dojdzie.
		}
	console.log(i);
}
*/




/////////////////////////////////////////////
// Coding Challange 2
/*
var years = [1987, 2013, 2002, 1789]


for (var i = years.length - 1; i >= 0; i--) {
	var x = 2017 - years[i];
	just.unshift(x);
}

for (var i = just.length - 1; i >= 0; i--) {
	if ( just[i] >= 18) {
		console.log( 'Persone ' + i + ' is over 18. They have ' + just[i] + ' years')
	} else {
		console.log('Persone ' + i + ' is not over 18. They have ' + just[i] + ' years')
	}
}

function printFullAge(years) {
	var just  = [];
	var answer = [];
	for (var i = years.length - 1; i >= 0; i--) {
		// alt aby bylo od dolu :
		// for (var i = 0; i < just.length; i++) { 
		var x = 2017 - years[i];
		just.unshift(x);
	}

	for (var i = just.length - 1; i >= 0; i--) { 
		if ( just[i] >= 18) {
			console.log( 'Persone ' + (i+1) + ' is over 18. They have ' + just[i] + ' years')
			answer.push(true);
		} else {
			console.log('Persone ' + (i+1) + ' is not over 18. They have ' + just[i] + ' years')
		answer.push(false);
		}
	}
	return answer;
}

var full_1 = printFullAge(years);
var full_2 = printFullAge([1999, 1890, 1987, 2002]);
*/



/////////////////////////////////////////////
// Lecture 12 Hoisting in Practice  w  3-How-JS-Works

