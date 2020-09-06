function convertToRoman(num) {
    const ones = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const tens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const hundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const thousands = ['M', 'MM', 'MMM'];
    const digits = [ones, tens, hundreds, thousands];
    
    let digitArrIndex = 0;
    let convertedNumToRoman = '';
  
    while(num >= 1){
      const digitToConvert = num % 10;
      const digitIndex = digitToConvert - 1;
      if(digitIndex >= 0){
        convertedNumToRoman = digits[digitArrIndex][digitIndex] + convertedNumToRoman;
      }
      digitArrIndex++;
      num = Math.floor(num / 10);
    }
   return convertedNumToRoman;
}