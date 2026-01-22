const names = document.querySelector('.name')
const types = document.querySelector('.type')
const image = document.querySelector('.image')
const button = document.querySelector('.btn')

button.addEventListener('click',async ()=>{
    const input = document.getElementById('input').value
    const data = await api(input)
    console.log(data)
     names.textContent =`Name: ${data?.name ?? 'No data'}` 
     types.textContent =` Type : ${data?.types[0]?.type.name ?? 'No data'}`
     image.innerHTML =`<img src="${data.sprites.front_default}">`
    
})

async function api(id){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      
        if(!response.ok){
        const err = await response.text();
        throw new Error(`${response.status},${err}`)
      }
      const data = await response.json();
      
      return data
    }catch(error){
        console.log('Loi',error)
    }
}
api('pikachu')