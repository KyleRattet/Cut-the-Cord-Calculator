




///////////////////////
///On Submit Button ///
///////////////////////

// Gets monthly cost input, sums checked boxes, compares//

$('#menu-submit').on("click", function (){
  $('#cost-comparison').html('');
  var checkedValues = $('input:checkbox:checked').map(function() {
    return this.value;
    }).get();
  var menuTotal = (sumChecked(checkedValues)) + 40;
  var monthlyCost = ($('#monthly-cable-cost').val()).replace('$', '');

  //append to cost comparison
  $('#cost-comparison').append('<p>Your monthly bill is $' + monthlyCost + ', and your monthly cost of streaming options is $' + menuTotal +'. ' + costCompare(menuTotal, monthlyCost) +'</p>');

});

////////////////////////
///A La Carte Button ///
////////////////////////

$('#a-la-carte').on('click', function () {
  var showsPerMonth= prompt("How many shows per month will you watch?");
  var total = 3 * showsPerMonth;
  $('#a-la-carte').val(total);

});

/////////////////////////
/// Submit Answer Sum ///
/////////////////////////


$('#submit-answer').on('click', function() {
  var sumArray = $("input[name=optionsRadios]:checked");
  console.log(sumSelectedValues(sumArray));

});

$(document).on('ready', function() {

});


