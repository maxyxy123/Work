const numbers = [1, 1, 2, 3, 2, 3, 4, 4, 5, 5, 6, 6];
const main = document.querySelector(".main");
function render() {
  const a = [...numbers];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  console.log(a);
  let render = "";

  a.forEach((num, i) => {
    let html = `
     <button data-id="${num}" class="card before ">${num}</button>
  

`;
    render += html;
  });
  main.innerHTML = render;
}
render();

let first = null
let lock = false

main.addEventListener('click',(e)=>{
    const btn = e.target.closest('.card')
    if(!btn || lock){
        return;
    }
    if(btn.classList.contains('hidden')){
        return;
    }

    btn.classList.remove('before')

    if(first === btn){
        console.log('giong nha')
        return;
    }
    btn.classList.add('selected')
    if(!first){
        first = btn
        return;
    }

    const id2 = btn.dataset.id
    const id1 = first.dataset.id
    if(id1 === id2){
       setTimeout(()=>{
         btn.classList.add('hidden')
         first.classList.add('hidden')
         first= null;
         lock = false;

       },1000)
    }else{
         setTimeout(()=>{
         first.classList.remove('selected')
          btn.classList.remove('selected')
         btn.classList.add('before')
         first.classList.add('before')
           first= null;
         lock = false;

       },1000)
    }
})