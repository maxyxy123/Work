const passwordRender = document.querySelector(".password");
const generateButton = document.querySelector(".Generate");
const copyButton = document.querySelector(".copy");

let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];
let newArray = [...number, ...specialChar];
const pool = newArray.map( e => e)
console.log(pool)

function renderPassword() {
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  for (let i = 0; i < 10; i++) {
    result[i] = pool[i];
  }
  passwordRender.textContent = result.join('');
}

generateButton.addEventListener("click", () => {
  renderPassword();
});
