let flashcards = [
    {
        question: "What is Python?",
        answer: "Python is a high-level programming language."
    },
    {
        question: "What is HTML?",
        answer: "HTML is used to create the structure of web pages."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language used to make web pages interactive."
    }
];

let currentCard = 0;

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const counter = document.getElementById("counter");

const showAnswerButton = document.getElementById("showAnswer");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

const addButton = document.getElementById("add");
const editButton = document.getElementById("edit");
const deleteButton = document.getElementById("delete");


// Display current flashcard
function displayCard() {
    question.textContent = flashcards[currentCard].question;
    answer.textContent = flashcards[currentCard].answer;

    answer.classList.add("hidden");
    showAnswerButton.textContent = "Show Answer";

    counter.textContent = `${currentCard + 1} / ${flashcards.length}`;
}


// Show / Hide Answer
showAnswerButton.addEventListener("click", function () {

    if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
        showAnswerButton.textContent = "Hide Answer";
    } else {
        answer.classList.add("hidden");
        showAnswerButton.textContent = "Show Answer";
    }

});


// Next Card
nextButton.addEventListener("click", function () {

    currentCard++;

    if (currentCard >= flashcards.length) {
        currentCard = 0;
    }

    displayCard();

});


// Previous Card
previousButton.addEventListener("click", function () {

    currentCard--;

    if (currentCard < 0) {
        currentCard = flashcards.length - 1;
    }

    displayCard();

});


// Add New Card
addButton.addEventListener("click", function () {

    let newQuestion = prompt("Enter your question:");

    if (!newQuestion) {
        return;
    }

    let newAnswer = prompt("Enter the answer:");

    if (!newAnswer) {
        return;
    }

    flashcards.push({
        question: newQuestion,
        answer: newAnswer
    });

    currentCard = flashcards.length - 1;

    displayCard();

});


// Edit Current Card
editButton.addEventListener("click", function () {

    let newQuestion = prompt(
        "Edit question:",
        flashcards[currentCard].question
    );

    if (!newQuestion) {
        return;
    }

    let newAnswer = prompt(
        "Edit answer:",
        flashcards[currentCard].answer
    );

    if (!newAnswer) {
        return;
    }

    flashcards[currentCard].question = newQuestion;
    flashcards[currentCard].answer = newAnswer;

    displayCard();

});


// Delete Current Card
deleteButton.addEventListener("click", function () {

    if (flashcards.length === 1) {
        alert("You must have at least one flashcard.");
        return;
    }

    let confirmDelete = confirm(
        "Are you sure you want to delete this flashcard?"
    );

    if (confirmDelete) {

        flashcards.splice(currentCard, 1);

        if (currentCard >= flashcards.length) {
            currentCard = flashcards.length - 1;
        }

        displayCard();
    }

});


// Display first card when app starts
displayCard();