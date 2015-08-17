////////////////////////
///Monthly Bill Input///
////////////////////////
$('#monthly-cable-cost').on('change', function() {
  if ($(':button')[1].disabled === true) {
      $(':button')[1].disabled = false;
  }
});


///////////////////////
///On Submit Button ///
///////////////////////

// Gets monthly cost input, sums checked boxes, compares//

$('#menu-submit').on("submit", function (event){
  event.preventDefault();
  $('#recommendation-container').html('');

  var monthlyCableCost = $('#monthly-cable-cost').val();
  var monthlyInternetCost = parseInt($('#monthly-internet-cost').val());

  //updated a la carte total
  var showsPerMonth = $("#a-la-carte-input").val();
  console.log(showsPerMonth);
  var total = 3 * showsPerMonth;
  $('#a-la-carte').val(total);



  var checkedValues = $('input:checkbox:checked').map(function() {
    return this.value;
    }).get();

  var menuTotal = (sumChecked(checkedValues)) + (monthlyInternetCost);


  //append to cost comparison
  $('#modal-calculate').html('<h3><strong>Cost Comparison:</strong> Your monthly bill is $' + monthlyCableCost + ', and your monthly cost of streaming options is $' + menuTotal +'. ' + costCompare(menuTotal, monthlyCableCost) +'</h3>');


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
  $('.modal-body').html('');
  $('html, body').animate({
        scrollTop: $("#page-top").offset().top
    }, 1000);
  $(':button')[1].disabled = true;
  $("#a-la-carte-input").val('')

});





$(document).on('ready', function() {

});


