// Assignment Code
// assigns the id generate to the generateBtn variable
var generateBtn = document.querySelector("#generate");

function writePassword() {
// password length variable
let pwLength;

// Special Characters variable
let pwSpecial;

// Capital Letters variable
let pwCapital;

// Numbers variable
let pwNumber;

// Password Generation Function
function generatePassword () {
		// Sets strings of certain password criterion into constants
		const alpha = "abcdefghijklmnopqrstuvwxyz";
		const Capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const numbers = "1234567890";
		const special = "!@#$%^&*_-+=";
		// Starts the characters variable with the base set of lowercase letters
		let characters = alpha;
		// concatenates certain characters depending on user input
		if (pwSpecial == true) {characters += special};
		if (pwCapital == true) {characters += Capital};
		if (pwNumber == true) {characters += numbers};
		// Generates Password with criterion chosen	
		let password = "";
			for (let i = 0; i < pwLength; i++) {
			password += characters.charAt(
				(Math.floor(Math.random()*characters.length))
			);
		};
		// Prints password to the page
		var passwordText = document.querySelector("#password");
		passwordText.value = password;
	};	

	// Password Criterion Prompts
	// Creates a pop-up that prompts the user how long they want their password to be. Must be between 8-128 character.
	pwLength = window.prompt("What length would you like your password? (minimum 8 characters)", "Integer 8 or greater");
		// Rejects answers above 128
		if (pwLength > 128) {
			window.alert("Please enter a value between 8 and 128!"); 
			return;
			}

		// Proceeds to prompt users if they want special characters in their password
		if (pwLength >= 8) {
			pwSpecial = window.confirm("Would you like special characters? (Confirm:Yes, Cancel:No)");
		}

		// Rejects answers under 8
		else {window.alert("Please enter a value betweem 8 and 128!"); 
			return;
		};
		
		// Prompts users if they want capital letters in their password
		pwCapital = window.confirm("Would you like CAPITAL LETTERS? (Confirm:Yes, Cancel:No)");
		
		// Prompts users if they want numbers in their password
		pwNumber = window.confirm("Would you like numbers? (Confirm:Yes, Cancel:No)");
		
		// Rejects responses that say no to having no special characters,capital, and numbers in their password
		if ((pwSpecial == false)&&(pwCapital == false)&&(pwNumber == false)) {
			window.alert("Please say yes to one of the prompts to have a strong password!");
			return;
		};

		// Calls generatePassword function after requisite responses are filled
		generatePassword();
	};		
// Event listener that calls writePassword function on event of click
generateBtn.addEventListener("click", writePassword)
  