//create questions array

var questions = [
  [{
    number: 1,
    question: "How many hours of live TV do you watch each week?",
    response: ["I don't watch live TV", "0-2 Hours/Week", "2-4 Hours/Week", "4-6 Hours/Week", "6+ Hours/Week"],
    values: [8,6,4,2,0]
  }],
  [{
    number: 2,
    question: "Do you currently have the hardware necessary to stream?",
    response: ["Yes", "No"],
    values: [2,0]
  }],
   [{
    number: 3,
    question: "Can you wait to see shows online even though they've already aired on TV?",
    response: ["Yes", "No"],
    values: [2,0]
  }],
   [{
    number: 4,
    question: "How long are you willing to wait for your shows to be available?",
    response: ["I can wait a day.", "I can wait a few days", "I can wait indefinitely"],
    values: [1,2,3]
  }],
   [{
    number: 5,
    question: "Are you okay with just local broadcasting for news and sports?",
    response: ["Yes", "No"],
    values: [2,0]
  }],
   [{
    number: 6,
    question: "Is your internet connection faster than 25 Mbps?",
    response: ["Yes", "No"],
    values: [4,0]
  }]




];


///In each object
//Question #:
//Question
//Answer Options
//Answer Values


$('#start').on('click', function () {
  renderQuestion(0);
  renderResponse(0);
  // console.log("test");
  submitResponse(0);
});


var surveySum = 0;
console.log(surveySum);


//render question function
function renderQuestion (num) {
  $('#renderQuestion').append('<h2>'+questions[num][0].number +". " + questions[num][0].question+'</h2>');
}

function renderResponse (num) {

    var checked= [];

  for (var i = 0; i < questions[num][0].response.length; i++) {
    // values.push(questions[num][0].values[i]);
    $('#renderResponse').append('<p><label>'+
      '<input type="radio" name="optionsRadios"'+
      'value="'+questions[num][0].values[i]+'">'+
      questions[num][0].response[i]+'</label></p>');

    }
    $('#renderResponse').append('<input type="submit" class="form-control" id="nextQuestion">');


}



function submitResponse (num) {

  // var questionValue = parseInt($("input[name=optionsRadios]:checked").val());
  // console.log(questionValue);
  $('#nextQuestion').on('click', function () {
  surveySum += parseInt($("input[name=optionsRadios]:checked").val());
  console.log(surveySum);
  $('#renderQuestion').html('');
  $('#renderResponse').html('');
  renderQuestion(num+1);
  renderResponse(num+1);
  submitResponse(num+1);

  imageChoice(surveySum);
  var recommendation = surveyScore(surveySum);

  $('#modal-survey').html('<h3><strong>Usage Survey Results: </strong>' + recommendation + '</h3>');

  });


}

$('#nextQuestion').on('click', function () {
  // $('#renderQuestion').html('');
  // $('#renderResponse').html('');
  console.log('test');

});


// $("input[name=optionsRadios]:checked").val()
