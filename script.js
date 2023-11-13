let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timerElement = document.getElementById("time-left");
let scoreElement = document.getElementById("score");
let questionElement = document.getElementById("question");
let choicesElement = document.getElementById("choices");
let startButton = document.getElementById("start-button");
let quizContainer = document.getElementById("quiz-container");
let nextButton = document.getElementById("next-button");

let questions = [
    {
        question: "jQuery is considered which of the following?",
        choices: ["A terminal", "A framework", "A library", "A codebase"],
        correctAnswer: "C"
    },
    {
        question: "Which is not a primitive type?",
        choices: ["Undefined", "Element", "Number","Boolean"],
        correctAnswer: "B"
    },
    {
        question: "What does this '%' arithmetic symbol mean?",
        choices: ["Remainder", "And", "Or","Compare equality + type"],
        correctAnswer: "A"
    },{
        question: "What index number is the second item in an array?",
        choices: ["2", "3", "0","1"],
        correctAnswer: "D"
    },{
        question: "What is the correct syntax of a for loop?",
        choices: ["for (var i = 0; i > divTags.length; i++)", "for (var i = 0; i < divTags.length; i++)",
        "for (var i = 0; i = divTags.length; i--)","for (var i < 0; i > divTags.length; i--)"],
        correctAnswer: "B"
    }
];

nextButton.style.display = "none";

function startQuiz() {
    startButton.style.display = "none"; // Hide the start button
    quizContainer.style.display = "block"; // Show the quiz container
    startTimer();
    displayQuestion();
}

function displayQuestion() {
    console.log("Displaying question:", currentQuestion);
    if (currentQuestion < questions.length) {
        questionElement.textContent = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
        choicesElement.innerHTML = "";
        for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
            let choice = questions[currentQuestion].choices[i];
            let label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="choice" value="${String.fromCharCode(65 + i)}"> ${choice}<br>`;
            choicesElement.appendChild(label);
        }
    } else {
        // Quiz is over
        questionElement.textContent = "Quiz Over";
        choicesElement.innerHTML = "";
        nextButton.style.display = "none";

        let finalScore = score * 20;
        alert("Your final score is "+ finalScore + "! Initials: " + initials);
    }
    startButton.style.display = "none";
    nextButton.style.display = "block";
};


function checkAnswer() {
    let selectedChoice = document.querySelector("input[name='choice']:checked");
    if (selectedChoice) {
        if (selectedChoice.value === questions[currentQuestion].correctAnswer) {
            score++;
            scoreElement.textContent = score;
         } else {
            timeLeft -= 10; // Decrement time by _ if the answer is wrong
            if (timeLeft < 0) {
                timeLeft = 0; // Makes sure time doesn't go negative
            }
            timerElement.textContent = timeLeft; // Update the displayed time
        }
        currentQuestion++;
        displayQuestion();
    }
}
// What happens when you click 
function startTimer() {
    let timer = setInterval(function () {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0 || currentQuestion >= questions.length) {
            clearInterval(timer);

            if (currentQuestion < questions.length) {
                alert("Time's up!");
                prompt("Enter your initials:")
            }

            let initials = prompt("Enter your initials:");
            let finalScore = score * 20;
            alert("Your final score is " + finalScore + "! Initials: " + initials);

            questionElement.textContent = "Quiz Over. Click refresh to try again!";
            choicesElement.innerHTML = "";
            nextButton.style.display = "none";
        }
        
    }, 1000);
}


startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", checkAnswer);