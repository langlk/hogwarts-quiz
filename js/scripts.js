$(document).ready(function() {
  $("#quiz").submit(function(event) {
    var scores = [0, 0, 0, 0];
    var questions = ["question1", "question2", "question3", "question4"];

    questions.forEach(function(q) {
      var answer = parseInt($("select#" + q).val());
      scores[answer] += 1;
    });

    var indexOfMax = scores.indexOf(Math.max.apply(null, scores));
    $("form").hide();
    if (indexOfMax === 0) {
      $(".luna").show();
    } else if (indexOfMax === 1) {
      $(".tonks").show();
    } else if (indexOfMax === 2) {
      $(".neville").show();
    } else {
      $(".weasleys").show();
    }

    event.preventDefault();
  });
});
