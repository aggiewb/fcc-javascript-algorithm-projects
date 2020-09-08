function checkCashRegister(price, cash, cid) {
    const currencyUnits = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.10,
      "QUARTER": 0.25,
      "ONE": 1.0,
      "FIVE": 5.0,
      "TEN": 10.0,
      "TWENTY": 20.0,
      "ONE HUNDRED": 100.0
    };
  
    let cidTotal = 0.0;
    cid.forEach(unit => cidTotal += unit[1])
    let changeDue = cash - price;
    let change = [];
    
    if(cidTotal < changeDue){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    if(cidTotal === changeDue){
      return {status: "CLOSED", change: cid};
    }
  
    for(let i = cid.length - 1; i > -1 && changeDue > 0; i--){
      const unit = cid[i][0];
      const unitAmount = currencyUnits[unit];
      while(cid[i][1] > 0 && changeDue - unitAmount >= 0){
        changeDue -= unitAmount;
        // Round change to the nearest hundreth deals with precision errors
        changeDue = Math.round(changeDue * 100) / 100;
        cid[i][1] -= unitAmount;
        if(change.length === 0 || change[change.length - 1][0] !== unit){
          change.push([unit, unitAmount]);
        } else {
          change[change.length - 1][1] += unitAmount;
        }
      }
    }
  
    if(changeDue > 0.01){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    return {status: "OPEN", change};
}