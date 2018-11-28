
import { movies } from './movieInformation.js'


// Constructor Function

function MovieInfo(original_title, overview, popularity) {
    this.original_title = original_title
    this.overview = overview
    this.popularity = popularity
  
}



movies.forEach(movie => {
 console.log(movie.ename)
/*---------------------- Poster Image and Tagline -------------------------------------------------- */
let moviePoster = document.querySelector('.poster')
    let moviePic = document.createElement('img')
   
    moviePic.src = `images/${movie.id}.jpg`

    moviePoster.appendChild(moviePic)

/*-------------------------------------- Movie Info -------------------------------------------------- */
    let movieText = document.querySelector('.info')
    
    let title = document.createElement('h2')
    title.textContent = movie.original_title

    let tagline = document.createElement('p')
    tagline.textContent = movie.tagline
    
    let popular = document.createElement('p')
    popular.textContent =`Popularity rating : ${movie.popularity}`
    
    let quote = document.createElement('blockquote')
    quote.textContent = movie.overview
    

    movieText.appendChild(title)
    movieText.appendChild(tagline)
    movieText.appendChild(popular)
    movieText.appendChild(quote)
})


