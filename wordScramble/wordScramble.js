import { api } from "./api.js"

const displayWord = document.querySelector('.display')
const hints = document.querySelector('.hint')
const time = document.querySelector('.time')
const input = document.getElementById('input')
const categorys = document.querySelector('.category')
const refresh = document.querySelector('.refresh')
const check= document.querySelector('.check')


let checkIndex = []
let randomIndex = ''
async function renderWords(){
    const data = await api();
    const word = data.word
    const finalWord = word.split('')
    
    const a =[...finalWord];
    for(let i = a.length -1 ; i >0 ; i--){
        const j = Math.floor(Math.random() * ( i+1 ));
        [a[i], a[j]] = [a[j], a[i]];
    }
     console.log(a)
     let display = '';
     for(let i = 0; i<a.length;i++){
        display += a[i]+ '  '
     }
     displayWord.textContent = display;

     categorys.textContent = `Category :${data?.category ?? 'No data'}`
     hints.textContent = `Hint :${data?.hint ?? ' No data'}`


   
   
   
}
renderWords();
countDown()

function countDown(seccond = 30){
   let remaining = seccond - 1 ;
   let timerId;
   timerId = setInterval(()=>{
    time.textContent = remaining;
   },1000)
   if(remaining < 0){
    clearInterval(timerId);
   }
}




