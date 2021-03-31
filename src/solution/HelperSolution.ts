export function encypher(codePhrase: string) {
  const unEncryptedCharacters = Array.from(codePhrase);
  let encryptedCharacters = new Array(20);
  let lastCharP = false;
  let changeThisCharToL: number = NaN;
  let alreadyAnE = false;
  let alreadyAT = false;
  unEncryptedCharacters.forEach((character, index) => {
    //r to n
    if (character === "r") character = "n";

    //s to a
    if (character === "s") character = "a";

    //delete e after first instance
    if (character === "e") {
      if (alreadyAnE === true) {
        character = "";
      } else {
        alreadyAnE = true;
      }
    }

    //change t to m after first instance
    if (character === "t") {
      if (alreadyAT === true) {
        character = "m";
      } else {
        alreadyAT = true;
      }
    }

    //change ph to lo
    if (lastCharP && character === "h") {
      character = "o";
      changeThisCharToL = index - 1;
    }
    if (character === "p") lastCharP = true;
    else lastCharP = false;

    //reassign
    encryptedCharacters[index] = character;
  });
  if (changeThisCharToL !== NaN) encryptedCharacters[changeThisCharToL] = "l";
  return encryptedCharacters.join("");
}
