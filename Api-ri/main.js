const URL = 'https://rickandmortyapi.com/api/character' // GENERAMOS NUESTRO ENDPOINT


window.addEventListener('load', () => {
    const character = document.getElementById('character') //pegamos a este elementos del html
    const ul = document.createElement('ul') // creamos un elemento ul
    const data = JSON.parse(localStorage.getItem('character')) // consumimos los que nos trae el local storage y lo parseamos a un objeto 

    const getdata = () => {
    return fetch(URL) // le pegamos a la url para hacer el fetch
    .then(response => response.json()) // lo convertimos en json-objeto de string
    // .then(character => localStorage.setItem('character',JSON.stringify(character.results.flatMap(item => item.image)))) // reseteamos -- nos garantiza que podemos transformar ese string en un json-Objeto
     .then(character => localStorage.setItem('character',JSON.stringify(character.results.flatMap(item => ({name: item.name, image: item.image}))))) // characters se convierte en mi objeto y accedemos a .results 
    }
    
    getdata();

    if(data.length){
        data.map(item => {
            
            const li = document.createElement('li')
            const img = document.createElement('img')
            const span = document.createElement('span')
            span.appendChild(document.createTextNode(item.name))
            img.src = item.image
            li.appendChild(img)
            li.appendChild(span)
            ul.appendChild(li)
            character.appendChild(ul)
            

            
           

        })
    }



    
    
})