const easyQuestions = [
    {
        question: "What Surah is this from?",
        ayah: "قُلْ أَرَءَيْتُمْ إِنْ أَصْبَحَ مَآؤُكُمْ غَوْرًۭا فَمَن يَأْتِيكُم بِمَآءٍۢ مَّعِينٍۭ",
        answers: [
            {text: "Surah Maryam", correct: false},
            {text: "Surah Al-Fatihah", correct: false},
            {text: "Surah Al-Mulk", correct: true},
            {text: "Surah Al-Baqarah", correct: false}
        ]
    }, 
    {
        question: "What Surah is this from?",
        ayah: "فَبِأَىِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ ١٣",
        answers: [
            {text: "Surah Al-Fatihah", correct: false},
            {text: "Surah Al-Baqarah", correct: false},
            {text: "Surah An-Nasr", correct: false},
            {text: "Surah Ar-Rahman", correct: true}
        ]
    }, 
    {
        question: "What Surah is this from?",
        ayah: "وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ ٢",
        answers: [
            {text: "Surah Al-Masad", correct: false},
            {text: "Surah Al-Qadr", correct: true},
            {text: "Surah Al-Fajr", correct: false},
            {text: "Surah Al-Kawthar", correct: false}
        ]
    },
    {
        question: "What Surah is this from?",
        ayah: "لَمْ يَلِدْ وَلَمْ يُولَدْ ٣",
        answers: [
            {text: "Surah Al-Falaq", correct: false},
            {text: "Surah An-Nas", correct: false},
            {text: "Surah Al-Bayyinah", correct: false},
            {text: "Surah Al-Ikhlas", correct: true}
        ]
    },
    {
        question: "What Surah is this from?",
        ayah: "وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًۭا",
        answers: [
            {text: "Surah Al-Kafirun", correct: false},
            {text: "Surah Al-Ikhlas", correct: false},
            {text: "Surah An-Nasr", correct: true},
            {text: "Surah Al-Ma'un", correct: false}
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
const ayahElement = document.getElementById("ayah")
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

let currentQuestion;

let currentQuestionIndex = 0

let currentAyahIndex = 0;
let score = 0;

let selectedDifficulty;


function startQuiz() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizArea").style.display = "block";

    currentQuestionIndex = 0;
    currentAyahIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

function showQuestion() {
    resetState();

    if (selectedDifficulty === "easy") {
        currentQuestion = easyQuestions[currentQuestionIndex];
    } else if (selectedDifficulty === "medium") {
        currentQuestion = mediumQuestions[currentQuestionIndex];
    } else if (selectedDifficulty === "hard") {
        currentQuestion = hardQuestions[currentQuestionIndex];
    }

    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    let ayahNo = currentAyahIndex + 1;
    ayahElement.innerHTML = ayahNo + ". " + currentQuestion.ayah;

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
    questionElement.innerHTML = `You scored ${score} out of ${currentQuestionIndex}!`;
    if (score >= 5) {
        ayahElement.innerHTML = `Alhamdulillah! Perfect score!`;
    } else if (score >= 3) {
        ayahElement.innerHTML = `Alhamdulillah! Over half!`;
    } else if (score >= 0) {
        ayahElement.innerHTML = `In Sha Allah next time!`
    }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
};

function handleNextButton() {
    currentQuestionIndex++;

    if (selectedDifficulty === "easy") {
        if (currentQuestionIndex < easyQuestions.length) {
            showQuestion();
        } else {
            showScore()
        }
    } else if (selectedDifficulty === "medium") {
        if (currentQuestionIndex < mediumQuestions.length) {
            showQuestion();
        } else {
            showScore();
        }
    } else if (selectedDifficulty === "hard") {
        if (currentQuestionIndex < hardQuestions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }
}

nextButton.addEventListener("click", ()=> {

    if (selectedDifficulty === "easy") {
        if (currentQuestionIndex < easyQuestions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    } else if (selectedDifficulty === "medium") {
        if (currentQuestionIndex < mediumQuestions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    } else if (selectedDifficulty === "hard") {
        if (currentQuestionIndex < hardQuestions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    }
});