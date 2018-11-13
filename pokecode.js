import { pokemon } from './pokemon.js'

console.log(pokemon)

//card front
const pokeContainer = document.querySelector('#container')

const Card = document.createElement('div')
Card.className ="card"

pokemon.forEach(poke => {
let frontFigure = document.createElement('div')
 console.log(`${poke.id}${poke.ename}.png`)
 let fig = document.createElement('figure')
 let cap = document.createElement('figcaption')
 let img = document.createElement('img')
frontFigure.className = "card__face card__face--front"
 img.src = `images/${poke.id}${poke.ename}.png`
 cap.textContent = poke.ename
 fig.appendChild(cap)
 fig.appendChild(img)
 frontFigure.appendChild(fig)
 Card.appendChild(frontFigure)
 pokeContainer.appendChild(Card)

 let backFigure = document.createElement('div')
 backFigure.className ="card__face card__face--back"
 let figu = document.createElement('figure')
 let capt = document.createElement('figcaption')
 //let imag = document.createElement('img')

 //imag.src = "./images/PokemonLogo"
 capt.textContent = poke.ename
 figu.appendChild(capt)
 //figu.appendChild(imag)
 
 backFigure.appendChild(figu)
 Card.appendChild(backFigure)
 pokeContainer.appendChild(Card)
 

 let card = document.querySelector('.card');
 card.addEventListener( 'click', function(){
    card.classList.toggle('is-flipped');
 })
  })    

  //card back




//user added card from html
addCard =>{

    //card front
    const makeCard = document.createElement('figure')
    let caption = document.createElement('figcaption')
    image.scr = document.getElementById("pokeImage")
    console.log(pokeImage)
    console.log(pokeName)
    cap.textContent = document.getElementById("pokeName")
    makeCard.appendChild(caption)
    makeCard.appendChild(image)
    addCard.appendChild(makeCard)
    pokeContainer.push(addCard)

//card back
    const makeCardBack = document.createElement('figure')
let captions = document.createElement('figcaption')
let images = document.createElement('img')

img.src = `images/PokemonLogo`
cap.textContent = poke.ename
makeCardBack.appendChild(captions)
makeCardBack.appendChild(images)
pokeBackContainer.appendChild(makeCardBack)


}
