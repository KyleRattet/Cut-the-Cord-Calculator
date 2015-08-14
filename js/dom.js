///////////////////////
///On Submit Button ///
///////////////////////

// Gets monthly cost input, sums checked boxes, compares//

$('#menu-submit').on("click", function (event){
  event.preventDefault();

  $('#cost-comparison').html('');
  var checkedValues = $('input:checkbox:checked').map(function() {
    return this.value;
    }).get();
  var menuTotal = (sumChecked(checkedValues)) + 40;
  var monthlyCost = ($('#monthly-cable-cost').val()).replace('$', '');

  //append to cost comparison
  $('#recommendation-container').append('<h3><strong>Compare Cost Results:</strong> Your monthly bill is $' + monthlyCost + ', and your monthly cost of streaming options is $' + menuTotal +'. ' + costCompare(menuTotal, monthlyCost) +'</h3>');

});

////////////////////////
///A La Carte Button ///
////////////////////////

$('#a-la-carte').on('click', function (event) {

  event.preventDefault();
  var showsPerMonth= prompt("How many shows per month will you watch?");
  var total = 3 * showsPerMonth;
  $('#a-la-carte').val(total);

});

// $('#a-la-carte').on('click', function () {
//   $("#a-la-carte-input").show();
//   var showsPerMonth = $("#a-la-carte-input").val();

//   var total = perShow * showsPerMonth;
//   // console.log(total);
//   $('#a-la-carte').val(total);

// });


/////////////////////////
/// Submit Answer Sum ///
/////////////////////////


$('#submit-answer').on('click', function (event) {
  event.preventDefault();
  $('#answer-container').html("");
  var sumArray = $("input[name=optionsRadios]:checked");
  var score = (sumSelectedValues(sumArray));
  console.log(score);
  var recommendation = surveyScore(score);

  $('#recommendation-container').append('<h3><strong>Usage Survey Results: </strong>' + recommendation + '</h3>');

});

$(document).on('ready', function() {

});


