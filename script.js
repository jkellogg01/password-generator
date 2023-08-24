// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TODO: Write thr function generatePassword() to:
// - prompt for password criteria
// - return a string password

function generatePassword() {
  let result = "";

  let passLength = Number(
    prompt("Enter your desired password length between 8 and 128")
  );
  if (passLength < 8 || passLength > 128) {
    return "Invalid password length: " + passLength;
  }

  return result;
}

function promptInclude(charType) {}
