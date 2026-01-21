const addButton = document.querySelector(".btn-js");
const input = document.getElementById("input");
const main = document.querySelector(".main");

let todoList = JSON.parse(localStorage.getItem('storage')) || [];
renderTodolist();
function saveToStorage(){
    localStorage.setItem('storage',JSON.stringify(todoList))
}



function renderTodolist() {
  let todolist = "";
  todoList.forEach((item,i) => {
    let html = `
        <div>${item}</div>
         <input class="radio" type="checkbox">
         <button class="dlt-js">Delete</button>
        
        `;
    todolist += html;

    
    

  });
  
  main.innerHTML = todolist;

  const radio = document.querySelectorAll(".radio");
    radio.forEach((r,i) => {
    r.addEventListener("change", (e) => {
      if (e.target.checked ) {
        todoList.splice(i,1);
        saveToStorage()
        renderTodolist();
      }
    });
  });


  const deleteButton = document.querySelectorAll('.dlt-js')
  deleteButton.forEach((b,i)=>{
    b.addEventListener('click',()=>{
         todoList.splice(i,1);
         saveToStorage()
         renderTodolist();
    })
  })
 
}
addButton.addEventListener("click", () => {
  const text = input.value;
  todoList.push(text);
  input.value = "";
  saveToStorage()
  renderTodolist();
});
