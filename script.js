"use strict";

const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Последний фильм каторый вы смотрели?', ''),
      b = prompt('На сколько он хорош?', ''),
      c = prompt('Последний фильм каторый вы смотрели?', ''),
      d = prompt('На сколько он хорош?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);