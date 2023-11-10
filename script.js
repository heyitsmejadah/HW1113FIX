
let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timerElement = document.getElementById("time-left");
let scoreElement = document.getElementById("score");
let questionElement = document.getElementById("question");
let choicesElement = document.getElementById("choices");
let nextButton = document.getElementById("next-button");

let questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Madrid", "Paris", "Berlin"],
        correctAnswer: "C"
    },
    {
        question: "question here?",
        choices: ["Fish, Fritz, Boy"],
        correctAnswer: "B"
    },
    {
        question: "question here?",
        choices: ["Fish, Fritz, Boy"],
        correctAnswer: "A"
    },{
        question: "question here?",
        choices: ["Fish, Fritz, Boy"],
        correctAnswer: "D"
    },{
        question: "question here?",
        choices: ["Fish, Fritz, Boy"],
        correctAnswer: "B"
    }
];

function displayQuestion() {
    console.log("Displaying question:", currentQuestion);
    if (currentQuestion < questions.length) {
        questionElement.textContent = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
        choicesElement.innerHTML = "";
        for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
            let choice = questions[currentQuestion].choices[i];
            let label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="choice" value="${String.fromCharCode(65 + i)}"> ${choice}`;
            choicesElement.appendChild(label);
        }
    } else {
        // Quiz is over
        questionElement.textContent = "Quiz Over";
        choicesElement.innerHTML = "";
        nextButton.style.display = "none";

        let initials = prompt("Enter your ititials:");
        let finalScore = score * 10;
        alert("Your final score is ${finalScore}. Initials: ${initials}");
    }
}

function checkAnswer() {
    let selectedChoice = document.querySelector("input[name='choice']:checked");
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
    let timer = setInterval(function () {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            questionElement.textContent = "Quiz Over";
            choicesElement.innerHTML = "";
            nextButton.style.display = "none";

            let initials = prompt("Enter your ititials:");
            let finalScore = score * 10;
            alert("Your final score is ${finalScore}. Initials: ${initials}");
        }
    }, 1000);
}

displayQuestion();
startTimer();

nextButton.addEventListener("click", checkAnswer);