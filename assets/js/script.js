//hide question section when the page is loaded
$(document).ready(function(){
    $(".question").hide();
})

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
      { text: 'Sahara Desert', correct: true },
      { text: 'Gobi Desert', correct: false },
      { text: 'Kalahari Desert', correct: false }
    ]
  },
  {
    question: 'The gemstone ruby is typically what color?',
    answers: [
      { text: 'White', correct: false },
      { text: 'Yellow', correct: false },
      { text: 'Blue', correct: false },
      { text: 'Red', correct: true }
    ]
  },
  {
    question: 'What is the name of the highest mountain on earth?',
    answers: [
      { text: 'Mount Everest', correct: true },
      { text: 'K2', correct: false },
      { text: 'Makalu', correct: false },
      { text: 'Cho Oyu', correct: false }
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
    question: 'What is the second most common gas found in the air we breathe?',
    answers: [
      { text: 'Helium', correct: false },
      { text: 'Oxygen', correct: true },
      { text: 'Sulfur', correct: false },
      { text: 'Krypton', correct: false }
    ]
  },
  {
    question: 'What is longest river in the world?',
    answers: [
      { text: 'Nile', correct: true },
      { text: 'Amazon River', correct: false },
      { text: 'Congo River', correct: false },
      { text: 'Niger', correct: false }
    ]
  }
]

let startButton = document.getElementById("start-button")
let questionContainer = document.getElementById("quiz-questions")
let questionElement = document.getElementById("question-info")
let answersButtons = document.getElementById("answer-btns")
let nextButton = document.getElementById("next-button")
let shuffledQuestions, currentQuestion
startGame();

function startGame(){
    //on click Start Quiz button hide landing page and show question in quiz
    $("#start-button").click(function(){
        $("#landing-page").hide("slow");
        $(".question").show("slow");
    })
    // shuffling questions so the order is not always the same
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    //current question index
    currentQuestion = 0
    nextQuestion();
    
   showQuestion();
}

function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestion]);
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("answer-btn", "col-sm-12", "col-lg-6", "text-center", "mt-3")
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answersButtons.appendChild(button)
    });
}

function resetState() {
    while (answersButtons.firstChild){
        answersButtons.removeChild(answersButtons.firstChild)
    }
}

function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    Array.from(answersButtons.children).forEach(button)
}
     

/*
function showQuestion(){
    for(let i=0; i < questions.length; i++){
        questionElement.innerText = questions[i].question;
        answersButtons.innerText = questions[i].answers;
    }
}*/