import { pokemon } from './pokemon.js'

const pokeContainer = document.querySelector('#container')


pokemon.forEach(poke => {

let card = document.createElement('div')

 console.log(`${poke.id}${poke.ename}.png`)
 let fig = document.createElement('figure')
 let cap = document.createElement('figcaption')
 let img = document.createElement('img')
 
 let backDiv = doucment.createElement('div')
 bacdDiv.textContent = poke.cname
 img.src = `images/${poke.id}${poke.ename}.png`
 img.alt = poke.ename
 cap.textContent = poke.ename
 fig.appendChild(cap)
 fig.appendChild(img)
 card.appendChild(fig)
 card.appendChild(backDiv)
 pokeContainer.appendChild(card)
 card.addEventListener( 'mouseover', function(){
     card.classList.toggle('is-flipped');
 })    
})


