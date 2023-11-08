
let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
var timerElement = document.getElementById("time-left");
var scoreElement = document.getElementById("score");
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var nextButton = document.getElementById("next-button");

// Add JavaScript code here = 
[
    {
        question: "What is the capital of France?",
        choices: ["London", "Madrid", "Paris", "Berlin"],
        correctAnswer: "C"
    },
    {
        question: "question here?",
        choices: [choices here],
        correctAnswer: "B"
    },
    {
        question: "question here?",
        choices: [choices here],
        correctAnswer: "B"
    },{
        question: "question here?",
        choices: [choices here],
        correctAnswer: "B"
    },{
        question: "question here?",
        choices: [choices here],
        correctAnswer: "B"
    }
];

function displayQuestion() {
    if (currentQuestion < questions.length) {
        questionElement.textContent = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
        choicesElement.innerHTML = "";
        for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
            var choice = questions[currentQuestion].choices[i];
            var label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="choice" value="${String.fromCharCode(65 + i)}"> ${choice}`;
            choicesElement.appendChild(label);
        }
    } else {
        // Quiz is over
        questionElement.textContent = "Quiz Over";
        choicesElement.innerHTML = "";
        nextButton.style.display = "none";
    }
}

function checkAnswer() {
    var selectedChoice = document.querySelector("input[name='choice']:checked");
    if (selectedChoice) {
        if (selectedChoice.value === questions[currentQuestion].correctAnswer) {
            score++;
            scoreElement.textContent = score;
        }
        currentQuestion++;
        displayQuestion();
    }
}

function startTimer() {
    var timer = setInterval(function () {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            questionElement.textContent = "Quiz Over";
            choicesElement.innerHTML = "";
            nextButton.style.display = "none";
        }
    }, 1000);
}

displayQuestion();
startTimer();

nextButton.addEventListener("click", checkAnswer());