/*
var johnAge, johnHeight, friendAge, friendHeight;

johnAge = parseInt(prompt('John age'));
johnHeight = parseInt(prompt('John Height'));
friendAge = parseInt(prompt('Friend age'));
friendHeight = parseInt(prompt('Friend Height'));
otherAge = parseInt(prompt('Other age'));
otherHeight = parseInt(prompt('Other Height'));

johnScore = johnHeight + (johnAge * 5);
friendScore = friendHeight + (friendAge * 5);
otherScore = otherHeight + (otherAge * 5);

console.log(johnAge, johnHeight, johnScore);
console.log(friendAge, friendHeight, friendScore);
console.log(otherAge, otherHeight, otherScore);

if (johnScore === friendScore) {
	console.log('It\'s a draw! John have ' +johnScore+ ' points and his friend have ' +friendScore+ ' points.');
} else if (johnScore > friendScore) {
	console.log('John won! John have ' +johnScore+ ' points and his friend have ' +friendScore+ ' points.');
} else {
	console.log('John\'s friend won! John have ' +johnScore+ ' points and his friend have ' +friendScore+ ' points.');
}
*/

/*
function printFullAge(years) {
	var ages = new Array();
	var fullAges = [];
	// fill new array
	for (var i = 0; i < years.length; i++) {
		//newYears.push(years[i]);
		ages[i] = 2017 - years[i];
	}

	for (i = 0; i < ages.length; i++) {
		if (ages[i] >= 18) {
			console.log('This person ' + (i + 1) + ' is '+ages[i]+' years old and full of age');
			fullAges.push(true);
		} else {
			console.log('This person ' + (i + 1) + ' is '+ages[i]+' years old and not full of age');
			fullAges.push(false);
		}
	}

	return fullAges;
}

var years = [1986,1815,1960,2015,2012];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);

console.log(full_1);
console.log(full_2);
*/