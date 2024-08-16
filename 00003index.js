const searchForm = document.querySelector(`form`);
const moviecontainer = document.querySelector(`.movie-container`);  // for const dont use highfun (-)//
const inputBox = document.querySelector(`.inputBox`);

// Function to fetch movie details using OMDB API
   const getMovieInfo = async (movie) => {
    const myAPIkey = "ef3e2571";
    const url = `http://www.omdbapi.com/?apikey=ef3e2571&t=${movie}`;
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
   }

   // fuction to show movie data on screen 
   const showMovieData = (data) => {
      // use destructuring assignment to extract properties from the data object
      const {Title,imdbRating,Genre,Released,Runtime,Actors,Plot,Poster} = data;
       const movieElement = document.createElement('div');
       movieElement.innerHTML = `<h2>${Title}</h2>
                                  <p><strong>Rating:&#11088;</strong>${imdbRating}</P>`;

      const movieElement = document.createElement('div');
      movieGenreElement.classList.add('movie-genre');

      Genre.split(",").forEach(element =>{
      const p  = document.createElement('p');
      p.innerText = element;
      movieGenreElement.appenchild(p);
      });

      movieElement.appendChild(movieGenreElement);
      movieElement.innerHTML = `<h2>${Title}</h2>
      <p><strong>Rating:&#11088;</strong>${imdbRating}</P>`;
      moviecontainer.appendChild(movieElement);                              
   }



// adding event listener to search form

searchForm.addEventListener('submit',(e)=> {
    e.preventDefault();      //(e or element) is parameter prevent default fuction
    // console.log(inputBox.value);        for console check
     const movieName = inputBox.value.trim();
     if (movieName!=='') {
        getMovieInfo(movieName);
     }
});
