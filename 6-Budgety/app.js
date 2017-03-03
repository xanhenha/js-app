// BUDGET CONTROLLER
var budgetController = (function(){

	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	// variavel criada para guardar todos os valores cadastrados e os totais
	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};

	return {
		addItem: function(type, des, val) {
			var newItem, ID;

			// Create new ID - identificador unico para cada item
			if( data.allItems[type].length > 0 ) {
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			} else  {
				ID = 0;
			}

			// novo item baseado no exp ou inc
			if(type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if(type === 'inc') {
				newItem = new Income(ID, des, val);
			}

			// Push it into our data structure
			data.allItems[type].push(newItem);

			// Return a new element
			return newItem;

		},

		testing: function() {
			console.log(data);
		}
	};

})();

// UI CONTROLLER
var UIController = (function(){

	// Isola as classes em um objeto, caso elas mudem de nome
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputButton: '.add__btn'
	}

	return {
		getinput: function() {
			return {
				type: document.querySelector( DOMstrings.inputType ).value, // Será inc ou exp
				description: document.querySelector( DOMstrings.inputDescription ).value,
				value: document.querySelector( DOMstrings.inputValue ).value
			}
		},

		getDOMstrings: function() {
			return DOMstrings;
		}
	};

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl) {

	var setupEventListeners = function() {

		var DOM = UICtrl.getDOMstrings();

		document.querySelector( DOM.inputButton ).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event) {
			if(event.keyCode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});
	};

	var ctrlAddItem = function() {

		var input, newItem;

		// 1. Get the field input data
		input = UICtrl.getinput();

		// 2. Add the item to the budget controller
		newItem = budgetCtrl.addItem(input.type, input.description, input.value);

	};

	return {
		init: function() {
			setupEventListeners();
		}
	};

})(budgetController,UIController);

controller.init();