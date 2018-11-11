import { pokemon } from './pokemon.js'

console.log(pokemon)

const pokeContainer = document.querySelector('#container')
pokemon.forEach(poke => {
const card = document.createElement('figure')
 console.log(`${poke.id}${poke.ename}.png`)
 let fig = document.createElement('figure')
 let cap = document.createElement('figcaption')
 let img = document.createElement('img')

 img.src = `images/${poke.id}${poke.ename}.png`
 cap.textContent = poke.ename
 fig.appendChild(cap)
 fig.appendChild(img)
 card.appendChild(fig)
 pokeContainer.appendChild(card)

 let card = document.querySelector('.card');
card__face.addEventListener( 'click', function(){
    card.classList.toggle('is-flipped');
})
  })    

const pokeBackContainer = document.querySelector("#backContainer")
pokemon.forEach(poke => {
const cardBack = document.createElement('figure')
let fig = document.createElement('figure')
let cap = document.createElement('figcaption')
let img = document.createElement('img')

img.src = `images/PokemonLogo`
cap.textContent = poke.ename
fig.appendChild(cap)
fig.appendChild(img)
cardBack.appendChild(fig)
pokeBackContainer.appendChild(cardBack)

let card = document.querySelector('.card');
card__face.addEventListener( 'click', function(){
    card.classList.toggle('is-flipped');
})
})  

addCard =>{
    const makeCard = document.createElement('figure')
    let fig = document.createElement('figure')
    let cap = document.createElement('figcaption')
    img.scr = document.getElementById("pokeImage")
    cap.textContent = document.getElementById("pokeName")
    fig.appendChild(cap)
    fig.appendChild(img)
    addCard.appendChild(fig)
    pokeContainer.push(addCard)
}
