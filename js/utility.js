//////////////////////////////////////////////
///function to sum checked values from menu///
//////////////////////////////////////////////

function sumChecked (checkedValues) {
  var total = 0;

  for (var i = 0; i < checkedValues.length; i++) {
    total += parseInt(checkedValues[i]);
  }
  return total;
}

//////////////////////////////////////////////
///compare checked values vs monthly cost  ///
//////////////////////////////////////////////

function costCompare (menuTotal, monthlyCost) {
  var monthlyDifference = monthlyCost - menuTotal;
  var annualizedDifference = 12*monthlyDifference;
  if(annualizedDifference > 0) {
    return " You'd save $" + annualizedDifference + " a year if you cut the cord.";
  } else {
    return "If only considering economics, you should keep cable. It would cost $" + annualizedDifference *-1 + " to free yourself of cable.";
  }
}

///////////////////////////////////////
///  annualized monthly comparison  ///
///////////////////////////////////////


