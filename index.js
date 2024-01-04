const easyQuestions = [
    {
        question: "What surah is this from?",
        ayah: "Ayahtext",
        answers: [
            {text: "Example", correct: false},
            {text: "Example", correct: false},
            {text: "Example", correct: true},
            {text: "Example", correct: false}
        ]
    }, 
];

const mediumQuestions = [
    {
        question: "What surah is this from?",
        ayah: "Ayahtext",
        answers: [
            {text: "Example", correct: false},
            {text: "Example", correct: false},
            {text: "Example", correct: true},
            {text: "Example", correct: false}
        ]
    },
]

const hardQuestions = [
    {
        question: "What surah is this from?",
        ayah: "Ayahtext",
        answers: [
            {text: "Example", correct: false},
            {text: "Example", correct: false},
            {text: "Example", correct: true},
            {text: "Example", correct: false}
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let currentAyahIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizArea").style.display = "block";

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