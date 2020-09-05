function palindrome(str) {
    const charArr = strStrip(str);
    const charArrLength = charArr.length;
    for(let i = 0; i < charArrLength; i++){
      if(charArr[i] !== charArr[charArrLength - i - 1]){
        return false;
      } 
    }
    return true;
}
  
function strStrip(str){
    const regex = /[a-z0-9]/g;
    str = str.toLowerCase();
    return str.split('').filter(character => {
      return character.search(regex) > -1;
    });
}