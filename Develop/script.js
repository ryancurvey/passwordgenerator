// Assignment Code
var generateBtn = document.querySelector("#generate");

alert("Create a New Password!");
var characterLimit = prompt("How many characters in your new password?");
if(characterLimit < 8) {
alert ("please choose between 8-128 characters!");
} else if (characterLimit > 128) {
  alert ("please choose between 8-128 characters!");
// } else(characterLimit = "input") How to get this to the next level
}

var characterType = prompt("Would you like to include lower case letters?");
if (characterType ===True) {
includes = ("abcdefghijklmnopqrstuvwxyz")
} else (characterType !== True);
 {
  includes = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()")
}

// nothing is happening aftert this

var characterType = prompt("Would you like to include upper case letters?");
if (characterType ===True) {
includes = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
} else (characterType !== True); 
{
includes = ("abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()")
}

var characterType = prompt("Would you like to include numbers?");
if (characterType ===True) {
includes = ("0123456789")
} else (characterType !== True);
 {
includes = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()")
}

var characterType = prompt("Would you like to include special characters?");
if (characterType ===True) {
includes = ("!@#$%^&*()")
} else (characterType !== True);
 {
includes = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")
}


function createPassword () {
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
  var characterLimit = ("")
}
for(let i = 0; i <= characterLimit.length; i++) {
  characterLimit = Math.floor(Math.random() * characterLimit.length);
  }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// create password
// length 8-128 characters
// Create function off of each (true/false) prompts for Upper, lowercase, numbers, special characters
// All represented character types
// display password that matched the criteria