const init = () => {
  form = document.querySelector("form");
  form.addEventListener("submit", (e) => { 
    e.preventDefault()
    const id = e.target.searchByID.value;
    console.log("ID: ", id);
    form.reset();
    fetchURL = `http://localhost:3000/movies/${id}`
    console.log("fetchURL: ", fetchURL);
    fetch(fetchURL)
    .then((resp) => resp.json())
    .then((json) => renderMovie(json))
  });

}

document.addEventListener('DOMContentLoaded', init);

function renderMovie(movie) {
  console.log("MOVIE: ", movie);
  h4 = document.querySelector("h4");
  console.log("h4: ", h4);
  h4.textContent = movie.title;
  p = document.querySelector("p");
  p.textContent = movie.summary;
  
}