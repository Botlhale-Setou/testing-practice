const stringLength = (string) => {
	let result = string.length;

	if (result > 0 && result <= 10) {
		return result;
	} else {
		throw new Error('String should be 1-10 characters long.');
	}
};

function reverseString(string) {
	let result = string.split('').reverse().join('');
	return result;
}

class calculator {
	add = (num1, num2) => {
		return num1 + num2;
	};

	subtract = (num1, num2) => {
		return num1 - num2;
	};

	divide = (num1, num2) => {
		return num1 / num2;
	};

	multiply = (num1, num2) => {
		return num1 * num2;
	};
}

function capitalize(string) {
	let result = [];

	for (let i = 0; i < string.length; i += 1) {
		if (i === 0) {
			result[i] = string[i].toUpperCase();
		} else {
			result[i] = string[i];
		}
	}
  
	return result.join('');
}

module.exports = { stringLength, reverseString, calculator, capitalize };