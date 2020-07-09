//hide question section when the page is loaded
$(document).ready(function () {
  $(".question").hide();
  $("#correct-feedback").hide();
  $("#incorrect-feedback").hide();
});

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

let startButton = document.getElementById("start-button");
let questionContainer = document.getElementById("quiz-questions");
let questionElement = document.getElementById("question-info");
let answersButtons = document.getElementById("answer-btns");
let nextButton = document.getElementById("next-button");
let shuffledQuestions, currentQuestion;
let imageElement = document.getElementById("image");
let score = 0;
startGame();

function startGame() {
  //on click Start Quiz button hide landing page and show question in quiz
  $("#start-button").click(function () {
    $("#landing-page").hide("slow");
    $(".question").show("slow");
  });
  // shuffling questions so the order is not always the same
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  //current question index
  currentQuestion = 0;
  nextQuestion();
}

function nextQuestion() {
  showQuestion(shuffledQuestions[currentQuestion]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  imageElement.src = question.img;
  question.answers.forEach((answer, index) => {
    const button = document.getElementById("answer-btn-" + (index + 1));
    console.log(answer, index, button);
    button.innerText = answer.text;
    //button.classList.add("answer-btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", function (e) {
      let selectedButton = e.target;
      let correct = selectedButton.dataset.correct;
      if (correct) {
        button.classList.add("green");
        score++;
        $("#correct-feedback").show("slow");
      } else {
        button.classList.add("red");
        $("#incorrect-feedback").show("slow");
      }
    });
  });
}
