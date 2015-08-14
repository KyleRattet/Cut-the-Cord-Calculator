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

//////////////////////////
/// sum survey answers ///
//////////////////////////


///sum selected values, from an array to a value
function sumSelectedValues (array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
     total += parseInt(array[i].value);
  }
  return total;
}


//////////////////////////////////
/// survey results conditional ///
//////////////////////////////////

function surveyScore (number) {

  if(number <= 5) {
    return "Your survey results indicate you'd be unable to duplicate your media consumption without subscribing to a paid cable package.";
  }
  else if (number <=15) {
    return "Based on your survey results, you're on the cusp of being indifferent between paying for cable tv and being able to get your media fix through other means. With that in mind, you could be an ideal candidate for exploring some alternatives to the traditional cable/internet bundle.";
  }
  else return "Your cable usage doesn't warrant keeping the service bundle. Based on your behavior of generally low cable usage, lack of live viewing urgency, and streaming capabilities, you're unlikely to benefit from being be a paid TV subscriber.";

}


