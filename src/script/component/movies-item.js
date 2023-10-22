class MoviesItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .container-movies{
          display: flex;
          flex-direction: row;
        }
        .fan-art-movies {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .movies-info {
          padding: 24px;
        }
        .movies-info > h2 {
          font-weight: lighter;
        }
        .movies-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <div class="container-movies">
        <img class="fan-art-movies" src="${this._movies.Poster}" alt="Movies">
        <div class="movies-info">
          <h2>${this._movies.Title}</h2>
          <p>${this._movies.Year}</p>
        </div>
      </div>

    `;
  }
}

customElements.define("movies-item", MoviesItem);
