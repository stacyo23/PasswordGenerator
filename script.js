// Assignment Code
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var alpha2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var choice;

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

  var enter = prompt("How many characters do you need? Select between 8 and 128"); 

  if (!enter) {
    alert("This needs a value");
  }
  else if (enter < 8 || enter > 128) {
    enter = prompt("You must choose a number between 8 and 128");
  }
  else {
    confirmNumber = confirm("Will you be using numbers?"); 
    confirmCharacter = confirm("Will you be using special characters?");
    confirmUppercase = confirm("Will you be using upper case letters?"); 
    confirmLowercase = confirm("Will you be using lower case letters?"); 
  
  };
  
if (!confirmNumber && !confirmCharacter && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must select criteria"); 
  }
else if (confirmNumber && confirmCharacter && confirmUppercase && confirmLowercase) {
     choices = character.concat(alpha, alpha2, number);   
  }
else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  }
else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  }
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }
else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  } 
else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);
  } 
else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
  }
else if (confirmLowercase && confirmNumber) {
   choices = alpha.concat(number);
  } 
else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);
 } 
else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
 }
else if (confirmCharacter) {
    choices = character;
 }
else if (confirmNumber) {
    choices = number;
 }
else if (confirmLowercase) {
    choices = alpha;
 }
else if (confirmUppercase) {
    choices = alpha2;
 }; 
};

var password =[];

for (var i =0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
 //gives a value in the array//
 console.log(pickChoices);
}