// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //incorrect password feedback; Using If statement 
  if (password == undefined) {
    passwordText.value = 'Password error Please try again.'
  } else if (password == 0) {
    passwordText.value = 'Do you want a password?'
  } else {
  passwordText.value = password;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generator function
function generatePassword() {

  //password length prompt
  let lengthPrompt = prompt('Password length must be between 8 & 128 characters.', '20');
  
  let length = Number(lengthPrompt);

  //input for min, max and Nan for length 
  if (isNaN(length)) {
    alert('Please use only numbers');
    return;
  } else if (length == 0) {
    alert('Password length needed')
    return 0;
  } else if (length < 8) {
    alert('Minimum password length is 8');
    return;
  } else if (length > 128) {
    alert('Max password length is 128')
    return;
  }

  //if statements to create password
  let pwString = ''

  //true or false to select required elements for password
  let lowerCaseReq = confirm('Include lowercase characters?')
    if (lowerCaseReq == true) {
      pwString += 'abcdefghijklmnopqrstuvwxyz';
    }
  
  let upperCasReq = confirm('Include upprecase characters?')
     if (upperCasReq == true) {
      pwString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    }
  
  let numberReq = confirm('Include numbers?')
    if (numberReq == true) {
      pwString += '0123456789';
    }
  
  let symbolsReq = confirm("Include special characters?")
    if (symbolsReq == true) {
      pwString += '!#$%&()*+,-./:;<=>?@[]/^_`{|}~';
    }
  
  if (lowerCaseReq == false && upperCasReq == false && numberReq == false && symbolsReq == false) {
    alert('Please add some complexity to your password');
    return;
  }

  //now we loop to create our dynamic password string 
  let generatedPw = ''
  //randomize to create generatedPw
  for (let i = 0; i < length; i++) {
    generatedPw += pwString[(Math.floor(Math.random() * pwString.length))];
  }

  return generatePassword
}




