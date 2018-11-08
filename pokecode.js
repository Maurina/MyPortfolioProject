import { pokemon } from './pokemon.js'

console.log(pokemon)



/*const pokeContainer = document.querySelector('#container')


pokemon.forEach(poke => {

const card = document.createElement('div')

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
 card.addEventListener( 'click', function(){
     card.classList.toggle('is-flipped');
 })    
})

const cardBack = document.createElement('div')
let fig = document.createElement('figure')
let cap = document.createElement('figcaption')
let img = document.createElement('img')
img.src = `images/PokemonLogo`
cap.textContent = poke.ename
fig.appendChild(cap)
fig.appendChild(img)
cardBack.appendChild(fig)
cardBack.appendChild(backDiv)
cardBack.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
})



let backDiv = document.createElement('div')
backDiv.textContent = poke.cname */

const fontFig = (element) => {
    let fig = document.createElement('figure')
    fig.className =".card__face--front"
    let cap = document.createElement('figcaption')
    let img = document.createElement('img')
    img.src = `images/${poke.id}${poke.ename}.png`
    cap.textContent = poke.ename
    fig.appendChild(cap)
    fig.appendChild(img)

}

const backFig = (element) =>{
 let fig = doucoment.createElement('figure')
 fig.className ="card__face--back"
 let img = document.createElement('img')
 img.src = `images/PokemonLogo`
 fig.appendChild(cap)
 fig.appendChild(img)

 
}


pokemon.forEach(poke => {
    let card = document.createElement('div')
    card.className ="card "
    card.appendChild(frontFig(poke))
    card.appendChild(backFig(poke))
    pokeContainer.appendChild(card)
    card.addEventListener('click', function() {
        console.log(poke.ename)
        card.classList.toggle('is-flipped');

    });
})

//animated bounce infinite delay-2s