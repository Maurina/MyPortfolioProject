import { senatorData } from './assets/senators.js'

const senators = senatorData.results[0].members

let republican = senators.filter(senator => senator.party === "R")

let democrats = senators.filter (senator => senator.party === "D")

let females = senators.filter (senator => senator.gender === "F")

let males = senators.filter (senator => senator.gender === "M")

const loyalRepublican = republican.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

const loyalDemocate = democrats.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator: acc, 0)

const nameOfSenators = senators.map (senator => senator.first_name +" "+ senator.last_name)



console.log(`There are ${republican.length} republicans in the senate.`)
console.log(`There are ${democrats.length} democrates in the senate.`)

console.log(`There are ${females.length} female senators`)
console.log(`There are ${males.length} male senators`)
console.log(`The most loyal republican is ${loyalRepublican.first_name} ${loyalRepublican.last_name} from ${loyalRepublican.state} who votes with republicans ${loyalRepublican.votes_with_party_pct}% of the time.`)
console.log(`These are the Senators`)
console.log(` ${nameOfSenators}`)

const senWithPics = senators.map(senator => {
    senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
    if(senator.govtrack_id ==='412743'){
        senator.imgURL = `https://localhost:5500/images/cindy.jpg`}
    return senator
})

console.log(senWithPics)

let pictureDiv = document.querySelector('.container')
senWithPics.forEach(senator => {
    let senatorPic = document.createElement('img')
    let senatorFig = document.createElement('figure')
    let senatorCap = document.createElement('figcaption')
    senatorPic.src = senator.imgURL
    senatorCap.textContent = `${senator.first_name}  ${senator.last_name}`
    senatorFig.appendChild(senatorPic)
    senatorFig.appendChild(senatorCap)
    pictureDiv.appendChild(senatorFig)
})
 