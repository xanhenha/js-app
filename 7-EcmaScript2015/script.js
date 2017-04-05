/////////////////////////////////
// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);


// ES5
function driversLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);


// ES6
function driversLicence6(passedTest) {
    
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);



var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/

/*
//////////////////
// Lecture: Blocks and IIFEs

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
//console.log(c);

// ES5
(function() {
    var c = 3
})();

//console.log(c);
*/



//////////////////
// Lecture: Strings
/*
let firstName = 'Jonh';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2017 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/

//////////////////
// Lecture: Arrow functions
/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el){
    return 2017 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`)
console.log(ages6);

ages6 = years.map((el, index) =>  {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${2016 - el}.`;
});
console.log(ages6);
*/


//////////////////
// Lecture: Arrow functions 2
/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            alert('This button is ' + self.color + ' and position ' + self.position);
        });
    }
}
box5.clickMe();

// ES6
var box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', () => {
            alert('This button is ' + this.color + ' and position ' + this.position);
        });
    }
}
box6.clickMe();

function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friend with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Jonh').myFriends5(friends);

// ES6
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends){
    var arr = friends.map( el => {
        return `${this.name} is friend with ${el}`;
    });
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Xanhenha').myFriends5(friends);
*/

//////////////////
// Lecture: Destructuring

/*
// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
const [name, age] = ['John', 36];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/

//////////////////
// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
/*
boxesArr5.forEach( function(cur) {
    cur.style.backgroundColor = 'dodgerBlue';
})
*/

// ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerBlue');

/*
// ES5
for(var i = 0; i < boxesArr5.length; i++) {

    if(boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';

}
*/

// ES6
for (const cur of boxesArr6) {
    if(cur.className.includes('blue')) {
        continue;
    }

    cur.textContent = 'I changed to blue!';
}

var ages = [11,10,21,32,16,15];

// ES5
var fullAges = ages.map(function(cur){
    return cur >= 18;
})
console.log(fullAges);
console.log(fullAges.indexOf(true));
console.log(ages[fullAges.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));