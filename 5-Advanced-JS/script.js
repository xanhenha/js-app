// Function constructor
/*
var john = {
	name: "John",
	yearOfBirth: 1990,
	job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function() {
	console.log(2017 - this.yearOfBirth);
}



Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);


var obj1 = {
	name: 'John',
	age: 26
}

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

*/

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {

	var arrRes = [];

	for (var i = 0; i < arr.length; i++) {
		arrRes.push( fn(arr[i]) );
	}

	return arrRes;

}

function calculateAge(el) {
	return 2016 - el;
}

function isFullAge(el) {
	return el >= 18;
}

var ages =  arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages, isFullAge);

console.log( ages );
console.log( fullAges );

*/

/*
function likeGames(game) {

	if(game === 'shooter') {
		return function(name) {
			console.log(name + ', qual é seu \'shooter game\' preferido?');
		}
	} else if(game === 'adventure') {
		return function(name) {
			console.log('Qual jogo de aventura te marcou mais, ' + name + '?');
		}
	} else  {
		return function(name) {
			console.log(name + ', qual seu estilo de jogo favorito?');
		}
	}

	return function(name) {
		if (game === 'shooter') {
			console.log(name + ', qual é seu \'shooter game\' preferido?');
		} else if(game === 'adventure') {
			console.log('Qual jogo de aventura te marcou mais, ' + name + '?');
		} else {
			console.log(name + ', qual seu estilo de jogo favorito?');
		}
	}
}

var shooterQuestion = likeGames('shooter');
var adventureQuestion = likeGames('adventure');
var raceQuestion = likeGames('race');

shooterQuestion('Thiago')
shooterQuestion('Abreu');
shooterQuestion('Irineu');
adventureQuestion('Xanhenha');
adventureQuestion('Flocky');
adventureQuestion('Miguel');
raceQuestion('Barbosa');
raceQuestion('Jose');
raceQuestion('Giovanni');

likeGames('shooter')('Thiago');
likeGames('adventure')('Xanhenha');
likeGames()('Barbosa');
*/

//////////////////////////////////////
/*
(function() {
	var answer,finalQuestions;

	var Question = function(q, a, c) {
		this.question = q;
		this.answers = a;
		this.correct = c;
	}

	var question1 = new Question('Qual melhor time do Brasil?',['Santos', 'Sport','Grêmio'],0);
	var question2 = new Question('Qual melhor jogador do Brasil?',['Tchê Tchê', 'Lucas Lima','Douglas'],1);
	var question3 = new Question('Qual melhor estádio do Brasil?',['Vila Belmiro', 'Pacaembu','Canindé'],2);

	Question.prototype.displayQuestion = function() {
		console.log(this.question);

		for(var i =0; i < this.answers.length; i++) {
			console.log( i + ': ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(a) {
		if( a === this.correct) {
			console.log('Parabéns, você acertou!');
		} else {
			console.log('Você errou, fica pra próxima...');
		}
	}

	finalQuestions = [question1,question2,question3]
	choosenQuestion = Math.floor( Math.random() * finalQuestions.length );

	finalQuestions[choosenQuestion].displayQuestion();
	answer = parseInt( prompt('Escolha uma opção, usando seu número correspondente') );
	finalQuestions[choosenQuestion].checkAnswer(answer);
})();



function makeQuestion(a,b) {
	a[b].displayQuestion();
	a[b].checkAnswer();
}

makeQuestion(finalQuestions,choosenQuestion);
*/

/////////////////////////////////
// quiz 2
(function() {

	var Question = function(q, a, c) {
		this.question = q;
		this.answers = a;
		this.correct = c;
	}

	var question1 = new Question('Qual melhor time do Brasil?',['Santos', 'Sport','Grêmio'],0);
	var question2 = new Question('Qual melhor jogador do Brasil?',['Tchê Tchê', 'Lucas Lima','Douglas'],1);
	var question3 = new Question('Qual melhor estádio do Brasil?',['Vila Belmiro', 'Pacaembu','Canindé'],2);

	Question.prototype.displayQuestion = function() {
		console.log(this.question);

		for(var i =0; i < this.answers.length; i++) {
			console.log( i + ': ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(a, callback) {
		var sc;
		if( a === this.correct) {
			console.log('Parabéns, você acertou!');
			sc = callback(true);
		} else {
			console.log('Você errou, fica pra próxima...');
			sc = callback(false);
		}
		this.displayScore(sc);
	}

	Question.prototype.displayScore = function(score) {
		console.log('Your current score is: ' + score );
		console.log('-------------------------------');
	}

	var q = [question1,question2,question3];

	function score() {
		var sc = 0;
		return function(correct) {
			if(correct) {
				sc++;
			}
			return sc;
		}
	}
	var keepScore = score();

	function nexQuestion() {
		var c = Math.floor( Math.random() * q.length );

		q[c].displayQuestion();
		var answer = prompt('Escolha uma opção, usando seu número correspondente');

		if(answer !== 'exit') {
			q[c].checkAnswer(parseInt(answer), keepScore);
			nexQuestion();
		}
	}

	nexQuestion();

})();