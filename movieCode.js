
import { movies } from './movieInformation.js'


// Constructor Function

function MovieInfo(original_title, overview, popularity) {
    this.original_title = original_title
    this.overview = overview
    this.popularity = popularity
  
}



movies.forEach(movie => {

/*---------------------- Poster Image and Tagline -------------------------------------------------- */
let moviePoster = document.querySelector('.poster')
    let moviePic = document.createElement('img')
   
    moviePic.src = `images/${movie.id}.jpg`

    
    


    
/*-------------------------------------- Movie Info -------------------------------------------------- */
    let movieText = document.querySelector('.info')
    
    let title = document.createElement('h2')
    title.textContent = movie.original_title

    let tagline = document.createElement('h3')
    tagline.textContent = movie.tagline
    
    let popular = document.createElement('h4')
    popular.textContent =`Popularity rating : ${movie.popularity}`

    let runTime = document.createElement('h4')
    runTime.textContent = `Run time : ${movie.runtime} minutes`

    let releaseDate = document.createElement('h4')
    releaseDate.textContent = `Release date : ${movie.release_date}`

    let production = document.createElement('h4')
    production.textContent = `Produced by : ${movie.production_companies.name}`
    
    let quote = document.createElement('blockquote')
    quote.textContent = movie.overview
    
    /*-------------------------------------- Attaching items to the DOM ----------------------------------- */
    moviePoster.appendChild(moviePic)
    moviePoster.appendChild(title)
    moviePoster.appendChild(tagline)
    moviePoster.appendChild(runTime)
    moviePoster.appendChild(releaseDate)
    moviePoster.appendChild(popular)
    moviePoster.appendChild(quote)

 
})
 


/*-------------------------------------- Filter into Genres ----------------------------------- */


let dramaSortBlock = document.querySelector('.sort')
const drama = movies.filter (movie => {
    if (movie.genres !== undefined && movie.genres.length > 1) {
        return movie.genres.find(genre => genre.name === "Drama")
    }
 
})
console.log(drama)


let comedySortBlock = document.querySelector('.sort')
const comedy = movies.filter (movie => {
    if (movie.genres !== undefined && movie.genres.length > 1) {
        return movie.genres.find(genre => genre.name === "Comedy")
    }
 
})
console.log(comedy)

let familySortBlock = document.querySelector('.sort')
const family = movies.filter (movie => {
    if (movie.genres !== undefined && movie.genres.length > 1) {
        return movie.genres.find(genre => genre.name === "Family")
    }
 
})
console.log(family)

let fantasySortBlock = document.querySelector('.sort')
const fantasy = movies.filter (movie => {
    if (movie.genres !== undefined && movie.genres.length > 1) {
        return movie.genres.find(genre => genre.name === "Fantasy")
    }
 
})
console.log(fantasy)
    
/*-------------------------------------- Loop for Genre Sort----------------------------------- */
drama.forEach(dramas => {

let dramaTitle = document.createElement('h2')
dramaTitle.textContent = drama.original_title
dramaSortBlock.appendChild(dramaTitle)
console.log(dramaTitle)
})

/*-------------------------------- Buttons -------------------------------------------------*/



let genreSort = document.createElement('div')
genreSort.addEventListener('click', () => {
  
  console.log("thanks for clicking!")
  return dramaSortBlock
})
