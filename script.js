// Special characters for the function created
var specialCharacters = "!@#$%^&*()";
window.onload=function(){
const generateButton = document.getElementById("generate");

// Add event listener to generate button
generateButton.addEventListener('click', writePassword)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}

// Prompts and confirms that pop up after click on button generate password
function generatePassword() {
  var passwordLength = prompt("Length of the password");

  var numbers = confirm("Would you like to include numbers in the password?");

  var lowerCases = confirm("Would you like to include lowercases in the password?");

  var upperCases = confirm("Would you like to include uppercases in the password?");

  var special = confirm("Would you like to include special characters in the password?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var j = 0;
  


  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    j++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    j++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    j++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    j++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (var i = 0; i < (parseInt(passwordLength) - j); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}