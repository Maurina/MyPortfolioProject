import { pokemon } from './pokemon.js'

console.log(pokemon)

//card front
const pokeContainer = document.querySelector('#container')
pokemon.forEach(poke => {
const frontCard = document.createElement('figure')
 console.log(`${poke.id}${poke.ename}.png`)

 let cap = document.createElement('figcaption')
 let img = document.createElement('img')

 img.src = `images/${poke.id}${poke.ename}.png`
 cap.textContent = poke.ename
 frontCard.appendChild(cap)
 frontCard.appendChild(img)
 pokeContainer.appendChild(frontCard)

 //event listener
 //let card = document.querySelector('.card');
//card__face.addEventListener( 'click', function(){
  //  card.classList.toggle('is-flipped');
//})
  })    

  //card back
const pokeBackContainer = document.querySelector("#backContainer")
pokemon.forEach(poke => {
const cardBack = document.createElement('figure')
let capt = document.createElement('figcaption')
let imag = document.createElement('img')

imag.src = "./images/PokemonLogo"
capt.textContent = poke.ename
cardBack.appendChild(capt)
cardBack.appendChild(imag)
pokeBackContainer.appendChild(cardBack)

//let card = document.querySelector('.card');
//card__face.addEventListener( 'click', function(){
  //  card.classList.toggle('is-flipped');
//})
})  

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

///let card = document.querySelector('.card');
///card__face.addEventListener( 'click', function(){
   // card.classList.toggle('is-flipped');
//})
}
