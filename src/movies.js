const data = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const newArrey = moviesArray.map((movie) => {
    return movie.director;
  });
  return newArrey;
}

console.log(getAllDirectors(data));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const arreyDrama = moviesArray.filter((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    } else {
      return false;
    }
  });
  return arreyDrama.length;
}
console.log(howManyMovies(data));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const averageScore =
    moviesArray.reduce((a, b) => a + b, 0) / moviesArray.length;

  return averageScore;
}
console.log(scoresAverage(data));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const filteredMovies = moviesArray.filter(
    (Element) => Element.genre === "Drama"
  );

  const averageDramaScore = filteredMovies / filteredMovies.length;

  return averageDramaScore;
}
console.log(dramaMoviesScore(data));
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyMoviesList = Array.from(moviesArray);

  const newFileredMovies = copyMoviesList.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    }
    return a.year - b.year;
  });
  return newFileredMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
