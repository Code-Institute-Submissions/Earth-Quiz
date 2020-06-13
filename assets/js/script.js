document.getElementsByClassName("answer-btn");

let answersClicked = [
    {answer: "1. The Pacific Ocean", correct: true},
    {answer: "2. The Indian Ocean", correct: false},
    {answer: "3. The Black Sea", correct: false},
    {answer: "4. The Arctic Ocean", correct: false}
]

//hide question section when the page is loaded
$(document).ready(function(){
    $(".question").hide();
})

//on click Start Quiz button hide landing page and show question 1 in quiz
$("#start-button").click(function(){
    $("#landing-page").hide("slow");
    $("#question-1").show("slow");
})


function clickedAnswer(){
    $(".answer-btn").click(function(){
        if ($(this) === answersClicked.correct(true)) {
            $(this).css("background-color", "green");
        }
        else {
            $(this).css("background-color", "red");
        }
    })
}

