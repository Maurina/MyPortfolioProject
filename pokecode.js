import { pokemon } from './pokemon.js'

console.log(pokemon)

//card container
const pokeContainer = document.querySelector('#container')


 pokemon.forEach(poke => {
     let card = doocument.createElement('div')
     card.className = "card"
    let card = document.querySelector('.card');
    card__face.addEventListener( 'click', function(){
    card.classList.toggle('is-flipped');
})
     let frontCard = document.createElement('figure')
    frontCard.className = "card__face card__face--front"
 console.log(`${poke.id}${poke.ename}.png`)

 let cap = document.createElement('figcaption')
 let img = document.createElement('img')

 img.src = `images/${poke.id}${poke.ename}.png`
 cap.textContent = poke.ename
 frontCard.appendChild(cap)
 frontCard.appendChild(img)
 
     
   //card back



  
let cardBack = document.createElement('figure')
cardBack.className ="card__face card__face-back"
let capt = document.createElement('figcaption')
let imag = document.createElement('img')
imag.src = "images/PokemonLogo.png"
capt.textContent = poke.ename
cardBack.appendChild(capt)

cardBack.appendChild(capt)
cardBack.appendChild(imag)
pokeContainer.appendChild(cardBack)

card.appendChild(frontCard)
card.appendChild(cardBack)
pokeContainer.appendChild(frontCard)
pokeContainer.appendChild(cardBack)


})  

 //user added card from html
const addCard = () =>{
makeCardBack.appendChild(captions)
makeCardBack.appendChild(images)
pokeBackContainer.appendChild(makeCardBack)

 }

