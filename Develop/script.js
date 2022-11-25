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

console.log(Upper);
console.log(Lower);
console.log(Number);
console.log(Special);

var possibleCharacters = "";

if (Upper) {
    possibleCharacters = possibleCharacters + characterUpper;
}

if (Lower) {
    possibleCharacters = possibleCharacters + characterLower;
}
if (Number) {
    possibleCharacters = possibleCharacters + characterNumber;
}
if (Special) {
    possibleCharacters = possibleCharacters + characterSpecial;
}

let password = ""

for(let i = 0; i <= characterLimit; i++) {
      var character = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    console.log(character)
    password += character
    console.log(i + " iteration: " + password)
    }
   

    return password
} 




// if(Upper === true && !Lower && !Number && !Special) {
    //     possibleCharacters = characterUpper
    
    // } else if (Upper === true && Lower === true && !Number && !Special) {
    //     possibleCharacters = characterUpper + characterLower
    
    // } else if (Upper === true && !Lower && Number === true && !Special) {
    //     possibleCharacters = characterUpper + characterNumber
    
    // } else if (Upper === true && !Lower && !Number && Special === true) {
    //     possibleCharacters = characterUpper + characterSpecial
    
    // } else if (Upper === true && Lower === true && Number === true && !Special) {
    //     possibleCharacters = characterUpper + characterLower + characterNumber
    
    // } else if (Upper === true && Lower === true && !Number && Special === true) {
    //         possibleCharacters = characterUpper + characterLower + characterSpecial
        
    //  } else if (Upper === true && !Lower  && Number === true && Special === true) {
    //         possibleCharacters = characterUpper + characterNumber + characterSpecial
    
    // } else if (!Upper && Lower === true && !Number && !Special) {
    //     possibleCharacters = characterLower
    
    // } else if (!Upper && Lower === true && Number === true && !Special) {
    //     possibleCharacters = characterLower + characterNumber
    
    // } else if (!Upper&& Lower === true && !Number && Special === true) {
    //     possibleCharacters =  characterLower + characterSpecial
    
    // } else if (!Upper && Lower === true && Number === true && Special === true) {
    //     possibleCharacters = characterLower + characterNumber + characterSpecial
    
    // } else if (!Upper && !Lower && Number === true && !Special) {
    //     possibleCharacters = characterNumber
    
    // } else if (!Upper && !Lower && Number === true && Special === true) {
    //     possibleCharacters = characterNumber + characterSpecial
    
    // } else if (!Upper && !Lower && !Number && Special === true) {
    //     possibleCharacters = characterSpecial
    
    // } else  (Upper === true && Lower === true && Number === true && Special === true) 
    //     possibleCharacters = characterUpper + characterLower + characterNumber + characterSpecial  


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