// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

let specials = '"\'!@#$%^&*() _;+-=,.<>[]{}|/\\~`';
let letters = 'qwertyuiopasdfghjklzxcvbnm';
let numbers = '1234567890';

/**
 * Ask the user a series of questions
 * and generate a password based on their answers
 */
function generatePassword() {
	let validCharacters = '';

	let passwordLength = Number(
		window.prompt('Enter password length (between 8 and 128 characters):')
	);

	if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
		alert('Needs to be between 8 and 128.');
		return;
	}

	// Make a list of valid characters for the password
	// based on the user's choices
	let useSpecial = confirm("Use special characters? ('OK' for yes, 'Cancel' for no)");
	let useUpper = confirm("Use uppercase characters? ('OK' for yes, 'Cancel' for no)");
	let useLower = confirm("Lowercase? ('OK' for yes, 'Cancel' for no)");
	let useNumeric = confirm("Numbers? ('OK' for yes, 'Cancel' for no)");

	if (useLower) validCharacters += letters;
	if (useUpper) validCharacters += letters.toUpperCase();
	if (useNumeric) validCharacters += numbers;
	if (useSpecial) validCharacters += specials;

	// Append characters to the end of this string,
	// randomly chosen from the "list" of valid characters
	let password = '';

	if (validCharacters.length == 0) {
		alert("Can't generate a password with no nothing!");
	} else {
		for (let x = 0; x < passwordLength; x++) {
			// Since Math.random() generates a decimal between 0 and 1,
			// lets upscale it to make it between 0 and validCharacters.length
			// And then Math.floor() it because decimal indices are frowned upon
			//
			// Math.ceil() could potentially pick an index that's out of bounds
			let randomIndex = Math.floor(Math.random() * validCharacters.length);

			password += validCharacters[randomIndex];
		}
	}

	return password;
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();

	/**
	 * @type {HTMLTextAreaElement}
	 */
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
