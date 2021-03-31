export function encypher(codePhrase: string) {
  const unEncryptedCharacters = Array.from(codePhrase);
  let encryptedCharacters = new Array(20);
  //declare variables here
  let eArray:string[] = [];
  let tArray:string[] = [];

  let firstE:boolean = false;
  unEncryptedCharacters.forEach((character, index) => {
    
    if(character === "r"){
      character = "n";
    }

    if(character === "s"){
      character = "a";
    }

    if(character === "e" ){
      if(eArray[0] === "e"){
        character = "";
      }
      eArray.push("e");
    }

    if(character === "t"){
      if(tArray[0] === "t"){
        character = "m";
      }
      tArray.push("t")
    }

    
    encryptedCharacters[index] = character;    
  });

  return encryptedCharacters.join("");
}
