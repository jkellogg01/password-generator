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

// TODO: Write the function generatePassword() to:
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

  let charTypes = {
    lowercase: true,
    uppercase: false,
    numeric: false,
    special: false,
  };

  for (rule in charTypes) {
    const userPref = prompt(
      "(true/false) Would you like your password to include the following character type: " +
        rule,
      charTypes[rule]
    );
    if (typeof userPref === "boolean") {
      charTypes[rule] = userPref;
    } else {
      alert(
        "Invalid (non-boolean) response, using default value: " +
          charTypes[rule]
      );
    }
  }

  return result;
}
