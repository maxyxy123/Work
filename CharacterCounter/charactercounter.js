
const input = document.querySelector('.input');
  const totalCharacter = document.querySelector('.Total-Characters');
  const remain = document.querySelector('.remaining');

  const MAX = 50;

  
  updateCounters();

 
  input.addEventListener('input', updateCounters);

  function updateCounters() {
    const len = input.value.length;
    const remaining = Math.max(0, MAX - len); 
    totalCharacter.textContent = `Total Characters: ${len}`;
    remain.textContent = `Remaining: ${remaining}`;
  }
