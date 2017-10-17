///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1965);  // Działa dla function declarations

// retirement(1999);  Function expression nie zadziala, bo jest zunawane za variable nie za funkcje
// w tej chwili jest to variablem z argumentem -- WTF
function calculateAge(year) {
    console.log(2016-year);
}

calculateAge(1965);   // działa tu i na początku

var retirement = function(year) {
    console.log(65- (2017 - year));
}

retirement(1999);       // działa tylko tutaj

// variables
console.log(age);   // Undefined. Variable bez value zawsze sa undefined
var age = 23;
console.log(age);   //23

function hlo() {
    var age = 65;   
    console.log(age);
    // body...
}

hlo();              // da 65 bo to local variable age
console.log(age);   // da 23 bo to global variable
*/
////////////////////////
/*

Zrozum dlaczego jedna funcka daje wyniki a druga nie.
console.log(age);
var age = 23;

function foo(age) {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

var years = [1987, 2013, 2002, 1789]
console.log(years);

function printFullAge(years) {
    console.log("daddwa");
    console.log(years);
}
    console.log("daddwa");
console.log(printFullAge(years));

////////////////

var years = [1987, 2013, 2002, 1789];

/*
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
    console.log("daddwa")
    console.log(years)
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





///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);  // printuje wszystko
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d); // ma dostep tylo do a i d. Reszty nie.
}
*/



///////////////////////////////////////
// Lecture: The this keyword
// Regular function call - points to a globa object - window object. Ogolnie do parent object??
// Method call - points to an object that is calling a method.


// console.log(this);

calculateAge(1987);

function calculateAge(year) {
    console.log(2017-year);
    console.log(this);
}

var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
     //   console.log(yearOfBirth); dpiero z this bo zbiera info z yearOfBirth. Aka method call matters.
        console.log(2016-this.yearOfBirth);
/*
        function innerFunction() {
            console.log(this);  // tutaj odesle do window. Bo window jest default wartością dla this.
        }

        innerFunction();*/
    }
}

john.calculateAge();

var mike = {
    name: 'mike',
    yearOfBirth: 1999,
};

mike.calculateAge = john.calculateAge;  // przycza cala tresc funkcji calculateAge od john
mike.calculateAge();   // This mimo, ze porzyczone z John, pobiera watosci z metody ktora go wezwała. Czyli mike.







