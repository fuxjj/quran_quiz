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
        ayah: "قُل لِّمَنِ ٱلْأَرْضُ وَمَن فِيهَآ إِن كُنتُمْ تَعْلَمُونَ",
        answers: [
            {text: "Surah Al-Anbya", correct: false},
            {text: "Surah Al-Hajj", correct: false},
            {text: "Surah Mu'minun", correct: true},
            {text: "Surah An-Nur", correct: false}
        ]
    },
    {
        question: "What surah is this from?",
        ayah: "إِنَّ ٱلْإِنسَـٰنَ لِرَبِّهِۦ لَكَنُودٌۭ ",
        answers: [
            {text: "Surah Al-Qadr", correct: false},
            {text: "Surah Al-Bayyinah", correct: false},
            {text: "Surah Az-Zalzalah", correct: false},
            {text: "Surah Al-'Adiyat", correct: true}
        ]
    },
    {
        question: "What surah is this from?",
        ayah: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًۭا يَرَهُۥ ",
        answers: [
            {text: "Surah Az-Zalzalah", correct: true},
            {text: "Surah Al-Qari'ah", correct: false},
            {text: "Surah At-Takathur", correct: false},
            {text: "Surah Al-'Asr", correct: false}
        ]
    },
    {
        question: "What surah is this from?",
        ayah: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
        answers: [
            {text: "Surah Al-Layl", correct: false},
            {text: "Surah Ad-Duhaa", correct: true},
            {text: "Surah Ash-Sharh", correct: false},
            {text: "Surah At-Tin", correct: false}
        ]
    },
    {
        question: "What surah is this from?",
        ayah: "يَـٰٓأَيُّهَا ٱلْإِنسَـٰنُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًۭا فَمُلَـٰقِيهِ",
        answers: [
            {text: "Surah Al-Infitar", correct: false},
            {text: "Surah Al-Mutaffifin", correct: false},
            {text: "Surah Al-Inshiqaq", correct: true},
            {text: "Surah Al-Buruj", correct: false}
        ]
    },
]

const hardQuestions = [
    {
        question: "What surah is this from?",
        ayah: "وَيُسَبِّحُ ٱلرَّعْدُ بِحَمْدِهِۦ وَٱلْمَلَـٰٓئِكَةُ مِنْ خِيفَتِهِۦ وَيُرْسِلُ ٱلصَّوَٰعِقَ فَيُصِيبُ بِهَا مَن يَشَآءُ وَهُمْ يُجَـٰدِلُونَ فِى ٱللَّهِ وَهُوَ شَدِيدُ ٱلْمِحَالِ ",
        answers: [
            {text: "Surah Hud", correct: false},
            {text: "Surah Yusuf", correct: false},
            {text: "Surah Ar-Rad", correct: true},
            {text: "Surah Ibrahim", correct: false}
        ]
    },
    {
        question: "What surah is this from?",
        ayah: "وَلَا تَقُولُوا۟ لِمَا تَصِفُ أَلْسِنَتُكُمُ ٱلْكَذِبَ هَـٰذَا حَلَـٰلٌۭ وَهَـٰذَا حَرَامٌۭ لِّتَفْتَرُوا۟ عَلَى ٱللَّهِ ٱلْكَذِبَ ۚ إِنَّ ٱلَّذِينَ يَفْتَرُونَ عَلَى ٱللَّهِ ٱلْكَذِبَ لَا يُفْلِحُونَ ",
        answers: [
            {text: "Surah Al-Hijr", correct: false},
            {text: "Surah Al-Nahl", correct: true},
            {text: "Surah Al-Isra", correct: false},
            {text: "Surah Al-Kahf", correct: false}
        ]
    },
    {
        question: "What surah is this from?",
        ayah: "ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ فِرَٰشًۭا وَٱلسَّمَآءَ بِنَآءًۭ وَأَنزَلَ مِنَ ٱلسَّمَآءِ مَآءًۭ فَأَخْرَجَ بِهِۦ مِنَ ٱلثَّمَرَٰتِ رِزْقًۭا لَّكُمْ ۖ فَلَا تَجْعَلُوا۟ لِلَّهِ أَندَادًۭا وَأَنتُمْ تَعْلَمُونَ ",
        answers: [
            {text: "Surah Fatihah", correct: false},
            {text: "Surah Baqarah", correct: true},
            {text: "Surah Ali 'Imran", correct: false},
            {text: "Surah An-Nisa", correct: false}
        ]
    },
    {
        question: "What surah is this from?",
        ayah: "وَأَمَّا مَنْ أُوتِىَ كِتَـٰبَهُۥ بِشِمَالِهِۦ فَيَقُولُ يَـٰلَيْتَنِى لَمْ أُوتَ كِتَـٰبِيَهْ",
        answers: [
            {text: "Surah At-Tahrim", correct: false},
            {text: "Surah Al-Mulk", correct: false},
            {text: "Surah Al-Qalam", correct: false},
            {text: "Surah Al-Haqqah", correct: true}
        ]
    },
    {
        question: "What surah is this from?",
        ayah: "مَا يَنظُرُونَ إِلَّا صَيْحَةًۭ وَٰحِدَةًۭ تَأْخُذُهُمْ وَهُمْ يَخِصِّمُونَ",
        answers: [
            {text: "Surah Fatir", correct: false},
            {text: "Surah Ya-Sin", correct: true},
            {text: "Surah As-Saffat", correct: false},
            {text: "Surah Sad", correct: false}
        ]
    },
]

const questionElement = document.getElementById("question");
const ayahElement = document.getElementById("ayah")
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");
const menuButton = document.getElementById("menu");

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
    menuButton.style.display = "none";
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
    menuButton.style.display = "block";
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

function handleMenuButton() {
    location.reload()
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

menuButton.addEventListener("click", ()=> {
    handleMenuButton();
});