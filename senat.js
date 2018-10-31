import { senatorData } from './assets/senators.js'

const senators = senatorData.results[0].members

let republican = senators.filter(senator => senator.party === "R")

let democrats = senators.filter (senator => senator.party === "D")

let females = senators.filter (senator => senator.gender === "F")

let males = senators.filter (senator => senator.gender === "M")

const loyalRepublican = republican.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

const loyalDemocate = democrats.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator: acc, 0)

console.log('There are ${republican.length} republicans in the senate.')
console.log('There are ${democrats.length} democrates in the senate.')

console.log('There are ${females.length} female senators.')
console.log('There are ${males.length} male senators')
console.log('The most loyal republican is ${loyalRepublican.first_name} ${loyalRepublican.last_name} from ${loyalRepublican.state} who votes with republicans ${loyalRepublican.votes_with_party_pct}% of the time.')