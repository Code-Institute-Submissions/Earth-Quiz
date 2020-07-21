// jshint esversion: 6 /*Added to remove warnings (ES6) from JSHint  */
/***HIDE QUESTION SECTION WHEN THE PAGE IS LOADED***/
$(document).ready(function () {
  $(".question").hide();
});
/***QUIZ QUESTIONS***/
let questions = [
  {
    question: "What is the name of the largest ocean on earth?",
    img: "assets/images/ocean.jpg",
    answers: [
      { text: "The Pacific Ocean", correct: true },
      { text: "The Indian Ocean", correct: false },
      { text: "The Black Sea", correct: false },
      { text: "The Arctic Ocean", correct: false },
    ],
  },
  {
    question: "What are the two main metals in the earth’s core?",
    img: "assets/images/metals.jpg",
    answers: [
      { text: "Silver and Gold", correct: false },
      { text: "Iron and Nickel", correct: true },
      { text: "Titanium and Gold", correct: false },
      { text: "Cobalt and Iron", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT considered a continent?",
    img: "assets/images/continents.jpg",
    answers: [
      { text: "Antarctica", correct: false },
      { text: "Australia", correct: false },
      { text: "Europe", correct: false },
      { text: "Caribbean", correct: true },
    ],
  },
  {
    question: "What is the name of the deepest location in the world’s oceans?",
    img: "assets/images/Mariana_Trench.jpg",
    answers: [
      { text: "Tonga Trench", correct: false },
      { text: "Philippine Trench", correct: false },
      { text: "Mariana Trench", correct: true },
      { text: "Japan Trench", correct: false },
    ],
  },
  {
    question: "Outside of Antarctica, what is the largest desert in the world?",
    img: "assets/images/desert.jpg",
    answers: [
      { text: "Arabian Desert", correct: false },
      { text: "Sahara Desert", correct: true },
      { text: "Gobi Desert", correct: false },
      { text: "Kalahari Desert", correct: false },
    ],
  },
  {
    question: "The gemstone ruby is typically what color?",
    img: "assets/images/gemstone.jpg",
    answers: [
      { text: "White", correct: false },
      { text: "Yellow", correct: false },
      { text: "Blue", correct: false },
      { text: "Red", correct: true },
    ],
  },
  {
    question: "What is the name of the highest mountain on earth?",
    img: "assets/images/mountain.jpg",
    answers: [
      { text: "Mount Everest", correct: true },
      { text: "K2", correct: false },
      { text: "Makalu", correct: false },
      { text: "Cho Oyu", correct: false },
    ],
  },
  {
    question: "What do you call molten rock before it has erupted?",
    img: "assets/images/stone.jpg",
    answers: [
      { text: "Lava", correct: false },
      { text: "Adakite", correct: false },
      { text: "Magma", correct: true },
      { text: "Blairmorite", correct: false },
    ],
  },
  {
    question: "What is the second most common gas found in the air we breathe?",
    img: "assets/images/oxygen.jpg",
    answers: [
      { text: "Helium", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Sulfur", correct: false },
      { text: "Krypton", correct: false },
    ],
  },
  {
    question: "What is longest river in the world?",
    img: "assets/images/river.jpg",
    answers: [
      { text: "Nile", correct: true },
      { text: "Amazon River", correct: false },
      { text: "Congo River", correct: false },
      { text: "Niger", correct: false },
    ],
  },
];
let questionContainer = document.getElementById("quiz-questions");
let questionElement = document.getElementById("question-info");
let answersButtonsClass = document.getElementsByClassName("answer-btn");
let nextButton = document.getElementById("next-button");
let shuffledQuestions, currentQuestion;
let imageElement = document.getElementById("image");
let scoreElement = document.getElementById("score");
let scoreContainer = document.getElementById("score-page");
let tryAgain = document.getElementById("try-again-btn");
let restartGame = document.getElementById("restart-button");
let quitGame = document.getElementById("quit-button");
let score = 0;
let answerButtonsArray;
startGame();


function startGame() {
  /***ON CLICK Start Quiz BUTTON HIDE LANDING PAGE AND SHOW QUESTION IN QUIZ***/
  $("#start-button").click(function () {
    $("#landing-page").hide("slow");
    $(".question").show("slow");
  });
  /***SHUFFLING QUESTIONS SO THE ORDER IS NOT ALWAYS SAME***/
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  /*CURRENT QUESTION INDEX*/
  currentQuestion = 0;
  nextQuestion(); 
}

function showQuestion(question) {
  /***POPULATING QUESTION CONTAINER WITH QUESTION, IMAGE AND ANSWERS***/  
  questionElement.innerText = question.question;
  imageElement.src = question.img;
  question.answers.forEach((answer, index) => {
    const button = document.getElementById("answer-btn-" + (index + 1));
    button.innerText = answer.text;
    button.removeAttribute('data-correct');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function selectAnswer(e) {
  /***CREATING AN EMPTY ARRAY FOR RESETING STATE OF THE BUTTONS***/  
  answerButtonsArray = [];  
  const selectedButton = e.target;
  if (selectedButton.dataset.correct === "true"){
      score++;
  }
   /***DISABLING ANSWER BUTTONS AFTER CLICK***/
   $(".answer-btn").prop("disabled", true);
  Array.from(answersButtonsClass).forEach(button => {
    setStatusClass(button, button.dataset.correct);
    answerButtonsArray.push(button);
  });
  if (shuffledQuestions.length > currentQuestion + 1) {
     nextButton.classList.remove("d-none");
  } else {
    scoreContainer.classList.remove("d-none");
    questionContainer.classList.add("d-none");
    $("h3").hide();
    scoreElement.innerText = "Your score is: " + score + "/" + questions.length;
    quizEndFeedback();
    tryAgain.addEventListener('click', () => {
    scoreContainer.classList.add("d-none");
    score = 0;
    startGame();
    resetButtonState();
    questionContainer.classList.remove("d-none");
    $("h3").show();   
});
  }
}
/***FEEDBACK FOR SCORES***/
function quizEndFeedback(){
    if(score > 8){
        $("#feedback").html(`<div class="text-center">
        <video autoplay="autoplay" loop="loop" width="500" height="500" class="img-fluid mx-auto">
        <source src="assets/images/well_done.mp4" type="video/mp4" />
        <img src="assets/images/well_done.gif" alt="Well Done" class="img-fluid mx-auto">
        </video>
        <h3><strong>If you want to learn more, visit <a href="https://www.ourplanet.com/en/" target="_blank" class="text-decoration-none">Our Planet</a></strong></h3>
        </div>`);
    }else if(score > 5){
        $("#feedback").html(`<div class="text-center">
        <video autoplay="autoplay" loop="loop" width="500" height="500" class="img-fluid mx-auto">
        <source src="assets/images/not_bad.mp4" type="video/mp4" />
        <img src="assets/images/not_bad.gif" alt="Not Bad" class="img-fluid mx-auto">
        </video>
        <h3><strong>If you want to learn more, visit <a href="https://www.ourplanet.com/en/" target="_blank" class="text-decoration-none">Our Planet</a></strong></h3>
        </div>`);
    }else {
        $("#feedback").html(`<div class="text-center">
        <video autoplay="autoplay" loop="loop" width="500" height="500" class="img-fluid mx-auto">
        <source src="assets/images/not_good.mp4" type="video/mp4" />
        <img src="assets/images/not_good.gif" alt="Not Good" class="img-fluid mx-auto">
        </video>
        <h3><strong>If you want to learn more, visit <a href="https://www.ourplanet.com/en/" target="_blank" class="text-decoration-none">Our Planet</a></strong></h3>
        </div>`);
    }

}
/***ADDING CLASS TO BUTTON CLICKED***/
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("green");
  } else {
    element.classList.add("red");
  }
}
/***CLEARING CLASSES OF BUTTONS CLICKED***/
function clearStatusClass(element) {
  element.classList.remove("green");
  element.classList.remove("red");
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  resetButtonState();
  nextQuestion();
});
/***RESETING BUTTONS STATE***/
function resetButtonState(){
  answerButtonsArray.forEach( element => {
    clearStatusClass(element);
  });
}
/***SHOWING NEXT QUESTION AND ENABLING ANSWER BUTTONS***/
function nextQuestion() {
  nextButton.classList.add("d-none");
  showQuestion(shuffledQuestions[currentQuestion]);
   $(".answer-btn").prop("disabled", false);
}
restartGame.addEventListener("click", ()=>{
    score = 0;
    startGame();
    resetButtonState();
});
quitGame.addEventListener("click",()=>{

});
