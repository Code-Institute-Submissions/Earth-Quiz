

let startButton = document.getElementById("start-button")
let questionContainer = document.getElementById("quiz-questions")


//hide question section when the page is loaded
$(document).ready(function(){
    $(".question").hide();
})
//on click Start Quiz button hide landing page and show question in quiz
$("#start-button").click(function(){
        $("#landing-page").hide("slow");
        $(".question").show("slow");
    })


function startGame(){
    nextQuestion()
}

function nextQuestion() {

}

function selectAnswer() {

}
     

let questions = [
  {
    question: 'What is the name of the largest ocean on earth?',
    answers: [
      { text: 'The Pacific Ocean', correct: true },
      { text: 'The Indian Ocean', correct: false },
      { text: 'The Black Sea', correct: false },
      { text: 'The Arctic Ocean', correct: false }
    ]
  },
  {
    question: 'What are the two main metals in the earth’s core?',
    answers: [
      { text: 'Silver and Gold', correct: false },
      { text: 'Iron and Nickel', correct: true },
      { text: 'Titanium and Gold', correct: false },
      { text: 'Cobalt and Iron', correct: false }
    ]
  },
  {
    question: 'Which of the following is NOT considered a continent?',
    answers: [
      { text: 'Antarctica', correct: false },
      { text: 'Australia', correct: false },
      { text: 'Europe', correct: false },
      { text: 'Caribbean', correct: true }
    ]
  },
  {
    question: 'What is the name of the deepest location in the world’s oceans?',
    answers: [
      { text: 'Tonga Trench', correct: false },
      { text: 'Philippine Trench', correct: false },
      { text: 'Mariana Trench', correct: true },
      { text: 'Japan Trench', correct: false }
    ]
  },
  {
    question: 'Outside of Antarctica, what is the largest desert in the world?',
    answers: [
      { text: 'Arabian Desert', correct: false },
      { text: 'Sahara Desert', correct: false },
      { text: 'Gobi Desert', correct: true },
      { text: 'Kalahari Desert', correct: false }
    ]
  },
  {
    question: 'What is the name of the deepest location in the world’s oceans?',
    answers: [
      { text: 'Tonga Trench', correct: false },
      { text: 'Philippine Trench', correct: false },
      { text: 'Mariana Trench', correct: true },
      { text: 'Japan Trench', correct: false }
    ]
  },
  {
    question: 'What is the name of the deepest location in the world’s oceans?',
    answers: [
      { text: 'Tonga Trench', correct: false },
      { text: 'Philippine Trench', correct: false },
      { text: 'Mariana Trench', correct: true },
      { text: 'Japan Trench', correct: false }
    ]
  },
  {
    question: 'What is the name of the deepest location in the world’s oceans?',
    answers: [
      { text: 'Tonga Trench', correct: false },
      { text: 'Philippine Trench', correct: false },
      { text: 'Mariana Trench', correct: true },
      { text: 'Japan Trench', correct: false }
    ]
  },
  {
    question: 'What is the name of the deepest location in the world’s oceans?',
    answers: [
      { text: 'Tonga Trench', correct: false },
      { text: 'Philippine Trench', correct: false },
      { text: 'Mariana Trench', correct: true },
      { text: 'Japan Trench', correct: false }
    ]
  },
  {
    question: 'What is the name of the deepest location in the world’s oceans?',
    answers: [
      { text: 'Tonga Trench', correct: false },
      { text: 'Philippine Trench', correct: false },
      { text: 'Mariana Trench', correct: true },
      { text: 'Japan Trench', correct: false }
    ]
  }
]