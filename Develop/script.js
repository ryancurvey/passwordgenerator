var generateBtn = document.querySelector("#generate");


function generatePassword() {

    var characterUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var characterLower = 'abcdefghijklmnopqrstuvwxyz'
    var characterNumber = '0123456789'
    var characterSpecial = '!@#$%^&*()'

    var characterLimit = 0;


    do {
        characterLimit = prompt("How many characters in your new password?");

        if (characterLimit < 8) {
            alert("please choose between 8-128 characters!");

        } else if (characterLimit > 128) {
            alert("please choose between 8-128 characters!");
        }
        else {
            console.log(characterLimit);
        }
       
    } while (characterLimit < 8 || characterLimit > 128);


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

    for (let i = 0; i < characterLimit; i++) {
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

