const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Technology Machine Language",
      "Hyperlinks and Text Mark Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "Which JavaScript method is used to convert JSON to an object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "Object.parse()",
      "parse.JSON()",
    ],
    correctAnswer: "JSON.parse()",
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: ["color", "font-color", "text-color", "background-color"],
    correctAnswer: "color",
  },
  {
    question: "Which HTTP method is typically used to retrieve data?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "GET",
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Undefined", "Character"],
    correctAnswer: "Character",
  },
];

const question = document.querySelector(".question");
const playButton = document.querySelector(".play");
const time = document.querySelector(".time");
const mark = document.querySelector(".score");

let score = 0;
let timerId = null
function saveToStorage(){
    localStorage.setItem('score',score)
}
playButton.addEventListener("click", () => {
if (timerId) clearInterval(timerId);
  renderQuestion();
  startCountDown(27);
});

function renderQuestion(i) {
  const randomIndex = Math.floor(Math.random() * quizQuestions.length);
  const selectedQuestion = quizQuestions[randomIndex];

  let HTML = "";
  let html = `
         <div >${selectedQuestion.question}</div>
         <button class="btn">${selectedQuestion.options[3]}</button>
         <button class="btn">${selectedQuestion.options[2]}</button>
         <button class="btn">${selectedQuestion.options[1]}</button>
         <button class="btn">${selectedQuestion.options[0]}</button>

        `;

  HTML = html;
  question.innerHTML = HTML;
  const button = document.querySelectorAll(".btn");
  button.forEach((b) => {
    b.addEventListener("click", () => {
      if (b.textContent === selectedQuestion.correctAnswer) {
        score += 1;
        saveToStorage();
      } else {
        score--;
        saveToStorage();
      }
      renderQuestion();
      if (timerId) clearInterval(timerId);
      startCountDown(27);
    });
  });

   mark.textContent = localStorage.getItem('score') || score;
}

function startCountDown(seconds = 27) {
  let remaining = seconds;
 timerId = setInterval(() => {
    remaining -= 1;
    time.textContent = `Time left : ${remaining}`;
    if (remaining <= 0) {
      clearInterval(timerId);
      renderQuestion();
    }
  }, 1000);
}
