var generateBtn = document.querySelector("#generate");


function generatePassword () {

var characterUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var characterLower = 'abcdefghijklmnopqrstuvwxyz'
var characterNumber = '0123456789'
var characterSpecial = '!@#$%^&*()'

characterLimit = prompt("How many characters in your new password?");

if(characterLimit < 8) {
alert ("please choose between 8-128 characters!");

} else if (characterLimit > 128) {
  alert ("please choose between 8-128 characters!");
}
  else console.log(characterLimit);

var Upper = confirm("Include uppercase letters?");
var Lower = confirm("Include lowercase letters?");
var Number = confirm("Include numbers?");
var Special = confirm("Include special characters?");

var possibleCharacters = "";
if(Upper === true && !Lower && !Number && !Special) {
    possibleCharacters = characterUpper
} else if (Upper === true && Lower === true && !Number && !Special) {
    possibleCharacters = characterUpper + characterLower
}

// if(Upper === true) {
//     for(let i = 0; i <= characterLimit; i++) {
//         var character = characterUpper.charAt(Math.floor(Math.random() * characterUpper.length));
//       console.log(character)  
//       } 
// }

// if(Lower === true) {
//     for(let i = 0; i <= characterLimit; i++) {
//         var character = characterLower.charAt(Math.floor(Math.random() * characterLower.length));
//       console.log(character)  
//       }
// }

// if(Number === true) {
//     for(let i = 0; i <= characterLimit; i++) {
//         var character = characterNumber.charAt(Math.floor(Math.random() * characterNumber.length));
//       console.log(character)  
//       }
// }

// if(Special === true) {
//     for(let i = 0; i <= characterLimit; i++) {
//         var character = characterSpecial.charAt(Math.floor(Math.random() * characterSpecial.length));
//       console.log(character)  
//       }
// }

//   if (characterType === true)
//   console.log (yes)

let password = ""

for(let i = 0; i <= characterLimit; i++) {
      var character = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    console.log(character)
    password += character
    console.log(i + " iteration: " + password)
    }
   

    return password
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
// display password that matched the criteria.


//   (characterLimit * characterType)
//  random math to select characters--how do I select from each character group

//   if (confirm("Include lowercase letters?"))


//   var characterType = confirm("Include lowercase letters?");
  
//   if (characterType === true)
//   console.log (yes)

//   var characterType = confirm("Include numbers?");
  
//   if (characterType === true)
//   console.log (yes)

//   var characterType = confirm("Include special characters?");
  
//   if (characterType === true)
//   console.log (yes)

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// alert("Create a New Password!");
// var characterLimit = prompt("How many characters in your new password?");

// if(characterLimit < 8) {
// alert ("please choose between 8-128 characters!");

// } else if (characterLimit > 128) {
//   alert ("please choose between 8-128 characters!");

// } else (null) 
// // else(characterLimit = "input") How to get this to the next level


// var characterType = confirm("Would you like to include lower case letters?");
// if (characterType ===True) {
// includes = ("abcdefghijklmnopqrstuvwxyz")
// } else (characterType !== True);
//  {
//   includes = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()")
// }

// // nothing is happening after this

// var characterType = prompt("Would you like to include upper case letters?");
// if (characterType ===True) {
// includes = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
// } else (characterType !== True); 
// {
// includes = ("abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()")
// }

// var characterType = prompt("Would you like to include numbers?");
// if (characterType ===True) {
// includes = ("0123456789")
// } else (characterType !== True);
//  {
// includes = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()")
// }

// var characterType = prompt("Would you like to include special characters?");
// if (characterType ===True) {
// includes = ("!@#$%^&*()")
// } else (characterType !== True);
//  {
// includes = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")
// }


// function generatePassword () {
//   var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
//   var characterLimit = ("")
// }
// for(let i = 0; i <= characterLimit.length; i++) {
//   var characterLimit = Math.floor(Math.random() * characterLimit.length);
//   }



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);





// create password
// length 8-128 characters
// Create function off of each (true/false) prompts for Upper, lowercase, numbers, special characters
// All represented character types
// display password that matched the criteria.