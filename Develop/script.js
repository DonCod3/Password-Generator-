// Assignment Code
var generateBtn = document.querySelector("#generate");
var Uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lowercasechar = "abcdefghijklmnopqrstuvwxyz";
var numberchar = "0123456789";
var specialchars = "!@#$%^&*()_+{}[]\;':,<>";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Psudo code
///password criteria: must be at least 8 characters, no more than 128
///character reqts: at least 1 special character, 1 upper case & 1 numeric; lowercase accepted
///when entering a password, input should be accepted/validated or declined/rejected
////display new passwoord once password is generated 

