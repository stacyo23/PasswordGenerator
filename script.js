// Assignment Code
var enter;

var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", " > ", " ? ", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var choices;

var password =[];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var enter = parseInt(prompt("How many characters do you need? Select between 8 and 128")); 

  if (isNaN(enter === true)) {
  alert("Value must be a number");
  return;
}

 if (enter < 8) {
   alert("The password must be at least 8 characters.")
   return;
 }

   if (enter > 128) {
    alert("The password must be less than 129 characters");
    return;
  }


  
  var confirmNumber = confirm("Select ok if you'd like to include numbers."); 
  var confirmCharacter = confirm("Select ok if you'd like to include special characters.");
  var confirmUppercase = confirm("Select ok if you'd like to include uppercase letters."); 
  var confirmLowercase = confirm("Select ok if you'd like to include lowercase letters."); 
  

  
if (confirmNumber === false  && confirmCharacter ===false && confirmUppercase === false && confirmLowercase === false) {
    alert("You must select at least one criteria"); 
    return; 
  }


  var passwordOptions = {
  enter: enter,
  confirmNumber: confirmNumber,
  confirmUppercase: confirmUppercase,
  confirmLowercase: confirmLowercase, 
  confirmCharacter:confirmCharacter
  };

var choices = [];

if (passwordOptions.confirmNumber === true) {
choices =choices.concat(number);
}

if (passwordOptions.confirmUppercase === true) {
  choices =choices.concat(upperCase);
}


if (passwordOptions.confirmLowercase === true) {
    choices =choices.concat(lowerCase);
}


if (passwordOptions.confirmCharacter === true) {
    choices =choices.concat(character);
  }



for (var i =0; i < enter; i++) {
 var randChoices = choices[Math.floor(Math.random() * choices.length)];
 password.push(randChoices);
 
}
return password.join('');
}


