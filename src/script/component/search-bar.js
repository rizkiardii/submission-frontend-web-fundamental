class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {
          max-width: 800px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          border-radius: 5px;
          display: flex;
          position: sticky;
          top: 10px;
          background-color: white;
        }
        .search-container > input {
          width: 100%;
          padding: 16px;
          border: 0;
          border-bottom: 1px solid #EEE0C9;
          font-weight: bold;
        }
        .search-container > input:focus {
          outline: 0;
          border-bottom: 2px solid #EEE0C9;
        }
        .search-container > input:focus::placeholder {
          
        }
        .search-container > input::placeholder {
          color: #96B6C5;
          font-weight: normal;
          font-size: 16px;
        }

        input[type="search"]{
          font-size: 16px;
          color: #96B6C5;
          font-weight:normal;
        }
        .search-container > button {
          width: 10%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          background-color: #96B6C5;
          color: white;
          border: 0;
          border-radius:10px;
        }

        .searchButton {
          display:flex;
          justify-content:space-around;
          align-items:center;
          
        }
        .searchButton:hover {
          background-color: #96B6C5;
        }
        @media screen and (max-width: 550px) {
          .search-container {
            flex-direction: row;
            position: static;
          }
          
          .search-container > input {
            width: 100%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid #EEE0C9;
            
          }
          .search-container > button {
            width: 10%;
          }
        }
      </style>
      
      <div id="search-container" class="search-container">
        <input placeholder="Search movies" id="searchElement" type="search">
        <button class="searchButton" id="searchButtonElement" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
        </button>
      </div>
    `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
