class DataSource {
  static searchMovies(keyword) {
    return fetch(`http://www.omdbapi.com/?apikey=31143bb4&s=${keyword}`)
      .then((response) => response.json())
      .then((response) => console.log(response));
  }
}

export default DataSource;
