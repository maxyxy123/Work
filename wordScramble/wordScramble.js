import { api } from "./api.js";

const displayWord = document.querySelector(".display");
const hints = document.querySelector(".hint");
const time = document.querySelector(".time");
const input = document.getElementById("input");
const categorys = document.querySelector(".category");
const refresh = document.querySelector(".refresh");
const check = document.querySelector(".check");

let timerId;
let word = "";
check.addEventListener("click", async () => {
  const answer = input.value.toLowerCase();
  console.log(answer);
  console.log(word);
  if (answer === word) {
    alert("Correct");
    renderWords();
  }
});

async function renderWords() {
  if (timerId) {
    clearInterval(timerId);
  }
  const data = await api();
  word = data.word;
  const finalWord = word.split("");
  console.log(word);
  const a = [...finalWord];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  let display = "";
  for (let i = 0; i < a.length; i++) {
    display += a[i] + "  ";
  }
  displayWord.textContent = display;

  categorys.textContent = `Category :${data?.category ?? "No data"}`;
  hints.textContent = `Hint :${data?.hint ?? " No data"}`;

  countDown();

  return word;
}
renderWords();

function countDown(seccond = 3) {
  let remaining = "";

  timerId = setInterval(() => {
    remaining = seccond-- + "s";
    time.textContent = remaining;
    if (remaining < 0) {
      clearInterval(timerId);
      renderWords();
    }
  }, 1000);
}
