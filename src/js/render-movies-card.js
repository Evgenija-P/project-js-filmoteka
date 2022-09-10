export { renderCardMovies };

const galleryContainerMovies = document.querySelector('.gallery__box');

function renderCardMovies(movies) {
  const markup = movies
    .map(movie => {
      const { backdrop_path, title, release_date, id } = movie;
      return `
           <div class="card" id="${id}">
        <img class="card__img" src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="${title}
" />
        <p class="card__titel">
          ${title} <br />
          <span class="card__text">Drama, Action | ${release_date}</span>
        </p>
      </div>`;
    })
    .join('');

  galleryContainerMovies.insertAdjacentHTML('beforeend', markup);
}
