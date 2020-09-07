function telephoneCheck(str) {
    str = str.replaceAll(' ', '');
    const regex = new RegExp(
         //14567894444
        '[1]\\d{10}|' +
        
        //1555-555-5555
        '[1]\\d{3}\\-\\d{3}\\-\\d{4}|' +
        
        //1(555)555-5555
        '^[1]\\(\\d{3}\\)\\d{3}\\-\\d{4}|' +
        
        //555-555-5555
        //(555)555-5555
        '^\\d{3}\\-\\d{3}\\-\\d{4}|^\\(\\d{3}\\)\\d{3}\\-\\d{4}|' +
        
        //5555555555
        '^\\d{10}(?!\\d)'
    );
    if(str.match(regex)){
      return true;
    }
    return false;
}