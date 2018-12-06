import { movies } from './movieInformation.js'



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

const drama = movies.filter (movie => {
    if (movie.genres !== undefined && movie.genres.length > 1) {
        return movie.genres.find(genre => genre.name === "Drama")
    }
 
})
console.log(drama)


const comedy = movies.filter (movie => {
    if (movie.genres !== undefined && movie.genres.length > 1) {
        return movie.genres.find(genre => genre.name === "Comedy")
    }
 
})
console.log(comedy)


const family = movies.filter (movie => {
    if (movie.genres !== undefined && movie.genres.length > 1) {
        return movie.genres.find(genre => genre.name === "Family")
    }
 
})
console.log(family)


const fantasy = movies.filter (movie => {
    if (movie.genres !== undefined && movie.genres.length > 1) {
        return movie.genres.find(genre => genre.name === "Fantasy")
    }
 
})
console.log(fantasy)
    
/*-------------------------------------- Loop for Genre Sort----------------------------------- */

    /* ------------------------------------ Drama ------------------------------------*/

let dramaBlock = document.querySelector('.drama') 
let numDrama =  document.createElement('h4')
numDrama.textContent = `There are ${drama.length} dramas`

dramaBlock.appendChild(numDrama)

        /* ------------------------------------ Drama Title ERROR ------------------------------------*/

drama.forEach(dramas => {
    let dramaTitle = document.createElement('h6')
    dramaTitle.textContent =`Title: ${drama.original_title}`
    
    dramaBlock.appendChild(dramaTitle)
    })

        /* ------------------------------------ Comedy ------------------------------------*/
let comedyBlock = document.querySelector('.comedy') 
let numComedy =  document.createElement('h4')
numComedy.textContent = `There are ${comedy.length} comedies`
comedyBlock.appendChild(numComedy)




        /* ------------------------------------ Fantasy ------------------------------------*/
let fantasyBlock = document.querySelector('.fantasy') 
let numFantasy =  document.createElement('h4')
numFantasy.textContent = `There are ${fantasy.length} fantasies`

fantasyBlock.appendChild(numFantasy)



        /* ------------------------------------ Family ------------------------------------*/
let familyBlock = document.querySelector('.family') 
let numFamily =  document.createElement('h4')
numFamily.textContent = `There are ${family.length} family`

familyBlock.appendChild(numFamily)


