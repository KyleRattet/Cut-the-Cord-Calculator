////////////////////////
///Monthly Bill Input///
////////////////////////
$('#monthly-cable-cost').on('change', function() {
  $(':button')[1].removeAttribute('disabled');
});


///////////////////////
///On Submit Button ///
///////////////////////

// Gets monthly cost input, sums checked boxes, compares//

$('#menu-submit').on("submit", function (event){
  event.preventDefault();
  $('#recommendation-container').html('');

  var monthlyCost = $('#monthly-cable-cost').val();

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


  //append to cost comparison
  $('#modal-calculate').html('<h3><strong>Cost Comparison:</strong> Your monthly bill is $' + monthlyCost + ', and your monthly cost of streaming options is $' + menuTotal +'. ' + costCompare(menuTotal, monthlyCost) +'</h3>');


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
  $('#modal-survey').html("");

  var sumArray = $("input[name=optionsRadios]:checked");
  var score = (sumSelectedValues(sumArray));
  imageChoice(score);
  var recommendation = surveyScore(score);

 //alert popup if all questions aren't completed
  if (sumArray.length !== 6) {
    surveyAlert();
  }

  $('#modal-survey').html('<h3><strong>Usage Survey Results: </strong>' + recommendation + '</h3>');

});

//////////////////////////
/// Reset Modal Button ///
//////////////////////////

$('#reset').on('click', function() {
  $('#survey-recommendation-container').html('');
  $('#recommendation-container').html('');
  $("input:radio").removeAttr("checked");
  $('#menu-submit input[type="number"]').val("");
  $('input:checkbox:checked').removeAttr("checked");
  $('#picture-container').html('');
  $("#a-la-carte-input").hide();
  $('#modal-main').empty();
  $('html, body').animate({
        scrollTop: $("#page-top").offset().top
    }, 1000);

});





$(document).on('ready', function() {

});


