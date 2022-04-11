// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
let pwLength;
let pwSpecial;
let pwCapital;
let pwNumber;
function generatePassword () {
		const alpha = "abcdefghijklmnopqrstuvwxyz";
		const Capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const numbers = "1234567890";
		const special = "!@#$%^&*_-+=";
		let characters = alpha;
		if (pwSpecial == true) {characters += special};
		if (pwCapital == true) {characters += Capital};
		if (pwNumber == true) {characters += numbers};
			let password = "";
			for (let i = 0; i < pwLength; i++) {
			password += characters.charAt(
				(Math.floor(Math.random()*characters.length))
			);
		};
		var passwordText = document.querySelector("#password");
		passwordText.value = password;
	};	
pwLength = window.prompt("What length would you like your password? (minimum 8 characters)", "Integer 8 or greater");

		if (pwLength > 128) {
			window.alert("Please enter a value between 8 and 128!"); 
			return;
			}
		if (pwLength >= 8) {
			pwSpecial = window.confirm("Would you like special characters? (Confirm:Yes, Cancel:No)");
		}
		else {window.alert("Please enter a value betweem 8 and 128!"); 
			return;
		};
		
		pwCapital = window.confirm("Would you like CAPITAL LETTERS? (Confirm:Yes, Cancel:No)");
		
		pwNumber = window.confirm("Would you like numbers? (Confirm:Yes, Cancel:No)");
		
		if ((pwSpecial == false)&&(pwCapital == false)&&(pwNumber == false)) {
			window.alert("Please say yes to one of the prompts to have a strong password!");
			return;
		};
		generatePassword();
	};		
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
  