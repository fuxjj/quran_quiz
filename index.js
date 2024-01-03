const questions = [
    {
        question: "What is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Ant", correct: false},
        ]
    }, 
    {
        question: "Who came up with the word 'vomit'?",
        answers: [
            {text: "William Shakespeare", correct: true},
            {text: "Richard Vomit", correct: false},
            {text: "Justin Brown", correct: false},
            {text: "Jay-Z", correct: false},
        ]
    },
    {
        question: "What human muscle is the strongest?",
        answers: [
            {text: "Pectoral", correct: false},
            {text: "Calf", correct: false},
            {text: "Thigh", correct: false},
            {text: "Jaw", correct: true},
        ]
    }, 
    {
        question: "How many hearts does an octopus have?",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: true},
            {text: "Trick question - they have none.", correct: false},
        ]
    },
    {
        question: "Which planet is the hottest in the Milky Way?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Venus", correct: true},
            {text: "Mercury", correct: false},
            {text: "The Sun", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;  // Corrected property name
        button.classList.add("bg-sky-600", "sm:h-28", "h-24", "rounded-lg", "sm:text-2xl", "text-1xl", "font-mono", "hover:bg-sky-700");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
};

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("bg-green-700");
        score++;
    } else {
        selectedBtn.classList.add("bg-red-700")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("bg-green-700");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
};

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else{
        showScore();
    }
};

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();