function rot13(str) {
    let newStr = '';
    const ASCIICodeA = 65;
    const ASCIICodeZ = 90;
    const ROT13Shift = 13;
    for(let i = 0; i < str.length; i++){
      if(str[i].match(/[A-Z]/)){
          const currentStrASCII = str.charCodeAt(i);
          const shiftedASCII = currentStrASCII + ROT13Shift;
          let newStrASCII = null;
          if(str[i].match(/[N-Z]/)){
              //ASCII code greater than 90 minus 90 plus 64
              newStrASCII = shiftedASCII - ASCIICodeZ + ASCIICodeA - 1;
            } else if (str[i].match(/[A-M]/)){
                newStrASCII = shiftedASCII;
            }
            newStr += String.fromCharCode(newStrASCII);
        } else {
            newStr += str[i];
        }
    }
    //Mutate the original string even though the instructions don't state to
    //because the tests on FCC don't pass otherwise
    str = newStr;
    return str;
}