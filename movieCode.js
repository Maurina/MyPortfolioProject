
import { movies } from './movieInformation.js'






movies.forEach(movie => {
 console.log(movie.ename)
/*---------------------- Poster Image and Tagline -------------------------------------------------- */
let moviePoster = document.querySelector('.poster')
    let moviePic = document.createElement('img')
    let movieFig = document.createElement('figure')
    let movieCap = document.createElement('figcaption')
    moviePic.src = `images/${movie.id}.jpg`

    movieCap.textContent = movie.tagline
    movieFig.appendChild(moviePic)
    movieFig.appendChild(movieCap)
    moviePoster.appendChild(movieFig)

/*-------------------------------------- Movie Info -------------------------------------------------- */
    let movieText = document.querySelector('.info')
    let quote = document.createElement('blockquote')
    quote.textContent = movie.overview
    movieText.appendChild(quote)


})


