const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which language is primarily spoken in Brazil?",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        a: "Spanish",
        b: "Portuguese",
        c: "French",
        d: "English",
        correct: "b"
    },
    {
        question: "What is 2 + 2?",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const results = document.getElementById('results');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    
    quiz.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <img src="${currentQuestion.image}" alt="Question Image" class="question-image">
        <div class="answer"><input type="radio" name="answer" value="a"> ${currentQuestion.a}</div>
        <div class="answer"><input type="radio" name="answer" value="b"> ${currentQuestion.b}</div>
        <div class="answer"><input type="radio" name="answer" value="c"> ${currentQuestion.c}</div>
        <div class="answer"><input type="radio" name="answer" value="d"> ${currentQuestion.d}</div>
    `;
}

function calculateScore() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;

    answers.forEach((answer) => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });

    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
        score++;
    }
}

submitButton.addEventListener('click', () => {
    calculateScore();
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        results.innerHTML = `You scored ${score} out of ${quizData.length}`;
        quiz.style.display = 'none';
        submitButton.style.display = 'none';
    }
});

// Load the first question
loadQuestion();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// contact page

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const formMessages = document.getElementById('form-messages');

    fetch('/contact', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        formMessages.textContent = data.message;
        if (data.success) {
            formMessages.style.color = 'green';
        } else {
            formMessages.style.color = 'red';
        }
    })
    .catch(error => {
        formMessages.textContent = 'An error occurred. Please try again later.';
        formMessages.style.color = 'red';
    });
});
