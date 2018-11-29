
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

    moviePoster.appendChild(moviePic)
    

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
    
    
    moviePoster.appendChild(title)
    moviePoster.appendChild(tagline)
    moviePoster.appendChild(runTime)
    moviePoster.appendChild(releaseDate)
    moviePoster.appendChild(popular)
    moviePoster.appendChild(quote)

 
})







const drama = movies.filter (movie => movie.genres.name === "Drama")

console.log(drama)