///////////////////////
///On Submit Button ///
///////////////////////

// Gets monthly cost input, sums checked boxes, compares//

$('#menu-submit').on("submit", function (event){
  event.preventDefault();

  $('#recommendation-container').html('');

  //updated a la carte total
  var showsPerMonth = $("#a-la-carte-input").val();
  console.log(showsPerMonth);
  var total = 3 * showsPerMonth;
  console.log(total);
  $('#a-la-carte').val(total);

  var checkedValues = $('input:checkbox:checked').map(function() {
    return this.value;
    }).get();



  var menuTotal = (sumChecked(checkedValues)) + 40;


  var monthlyCost = $('#monthly-cable-cost').val();

  //append to cost comparison
  $('#recommendation-container').append('<h3><strong>Cost Comparison:</strong> Your monthly bill is $' + monthlyCost + ', and your monthly cost of streaming options is $' + menuTotal +'. ' + costCompare(menuTotal, monthlyCost) +'</h3>');

});

///////////////////////////////
///A La Carte Button Render ///
///////////////////////////////

$('#a-la-carte').on('click', function () {
  $("#a-la-carte-input").show();

});


/////////////////////////
/// Submit Answer Sum ///
/////////////////////////


$('#submit-answer').on('click', function (event) {
  event.preventDefault();
  $('#survey-recommendation-container').html("");
  var sumArray = $("input[name=optionsRadios]:checked");
  var score = (sumSelectedValues(sumArray));
  console.log(score);
  var recommendation = surveyScore(score);


  $('#survey-recommendation-container').append('<h3><strong>Usage Survey Results: </strong>' + recommendation + '</h3>');

});

$(document).on('ready', function() {

});


