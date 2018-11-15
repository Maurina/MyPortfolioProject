import { pokemon } from './pokemon.js'
import { pokeAdd } from './pokeAdd.js' 

console.log(pokemon)

//card container
const pokeContainer = document.querySelector('#container')



const cardCreator = (poke) =>{
 let card = document.createElement('div')
 card.className = "card"
 card.addEventListener( 'click', function() {
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
 cardBack.className = "card__face card__face--back"
 let capt = document.createElement('figcaption')
 let imag = document.createElement('img')

 imag.src = "images/PokemonLogo.png"
 capt.textContent = poke.ename

let attack = document.createElement('p')
let defense = document.createElement('p')
let speed = document.createElement('p')
let hp = document.createElement('p')

attack.textContent = `Attack: ${poke.base.Attack}`
defense.textContent = `Defense: ${poke.base.Defense}`
speed.textContent = `Speed: ${poke.base.Speed}`
hp.textContent = `Hit Points: ${poke.base.HP}`



cardBack.appendChild(imag)
 cardBack.appendChild(capt)
 cardBack.appendChild(attack)
cardBack.appendChild(defense)
cardBack.appendChild(speed)
cardBack.appendChild(hp)



 card.appendChild(frontCard)
 card.appendChild(cardBack)
 pokeContainer.appendChild(card)
}

pokemon.forEach(element => cardCreator(element))


let newCard = {
   "ename": "Raichu", 
    "id": "026", 
    "base": {
    "Attack": 90, 
    "Defense": 55, 
    "HP": 60,  
    "Speed": 110
}
}

let create = document.querySelector('#create')
create.addEventListener('click', () => {
return cardCreator(newCard)
})

let createCard = document.createElement('div')
createCard.className = "card"
createCard.addEventListener('click', () => {
  
  console.log("thanks for clicking!")
})


 /* const createCardLoop = () => {
    let create = document.querySelector('#create')
    create.addEventListener('click', () => {
        
        if ('click'){
            let i = 26
            for (pokeNew => {
                i++
                let newCardFront = document.createElement('figure')
                newCardFront.className = "card__face card__face--back"
                let capti = document.createElement('figcaption')
                let image = document.createElement('img')
                image.src =`images/${pokeNew.id}${pokeNew.ename}.png`
                capti.textContent = pokeNew.ename
                newCardFront.appendChild(capti)
                newCardFront.appendChild(image)
                
                let newCardBack = document.createElement('figure')
                newCardBack.className = "card__face card__face--back"
                let caption = document.createElement('figcaption')
                let images = document.createElement('img')
                images.src = "images/PokemonLogo.png"
                caption.textContent = pokeNew.ename
                newCardBack.appendChild(caption)
                newCardBack.appendChild(images)
                newCard.appendChild(newCardFront)
                newCard.appendChild(newCardBack)
        
         })
    }
    })
  }
    pokeAdd.forEach(pokeNew => {

        let newCardFront = document.createElement('figure')
        newCardFront.className = "card__face card__face--back"
        let capti = document.createElement('figcaption')
        let image = document.createElement('img')
        image.src =`images/${pokeNew.id}${pokeNew.ename}.png`
        capti.textContent = pokeNew.ename
        newCardFront.appendChild(capti)
        newCardFront.appendChild(image)
        
        let newCardBack = document.createElement('figure')
        newCardBack.className = "card__face card__face--back"
        let caption = document.createElement('figcaption')
        let images = document.createElement('img')
        images.src = "images/PokemonLogo.png"
        caption.textContent = pokeNew.ename
        newCardBack.appendChild(caption)
        newCardBack.appendChild(images)
        newCard.appendChild(newCardFront)
        newCard.appendChild(newCardBack)

 })*/
  
 
