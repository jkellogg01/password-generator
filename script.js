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
    // const userPref = prompt(
    //   "(true/false) Would you like your password to include the following character type: " +
    //     rule +
    //     "?",
    //   charTypes[rule]
    // );
    // if (typeof userPref === "boolean") {
    //   charTypes[rule] = userPref;
    // } else {
    //   alert(
    //     "Invalid (non-boolean) response, using default value: " +
    //       charTypes[rule]
    //   );
    // }
    const userPref = confirm(
      `current rule for inclusion of ${rule} characters is ${charTypes[rule]}.
      click "OK" to toggle this rule or "cancel" to keep current value`
    );
    if (userPref) {
      charTypes[rule] = !charTypes[rule];
    }
  }

  console.log(charTypes);

  // for each desired password character:
  // - pick a type of character
  // - pick a character matching that type
  // - append that character to the result string
  // in the long term i would probably opt to overload the generatePassword function with one that accepts the necessary arguments
  // i will not be doing that here because this does not need to work in the long term, and i value my time

  const charSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  };

  let charMasterSet = "";
  for (set in charSets) {
    if (charTypes[set]) {
      charMasterSet += charSets[set];
    }
    console.log(charMasterSet);
  }

  for (let i = 0; i < passLength; i++) {
    //generate a character
    const nextCharIndex = Math.random() * charMasterSet.length;
    const nextChar = String(charMasterSet.charAt(nextCharIndex));

    result += nextChar;
    console.log(result);
  }

  return result;
}

// function chooseCharacter(charTypes) {
//   const charSets = {
//     lowercase: "abcdefghijklmnopqrstuvwxyz",
//     uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//     numeric: "0123456789",
//     special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
//   };
// }
