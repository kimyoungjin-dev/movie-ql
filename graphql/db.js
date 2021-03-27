let movies = [
  {
    id: 1,
    name: "스타워즈",
    score: 30,
  },
  {
    id: 2,
    name: "마음이",
    score: 3,
  },
  {
    id: 3,
    name: "센과치로의 행방불명",
    score: 9,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filterMovies = movies.filter((movie) => movie.id === id);
  return filterMovies[0];
};

export const deleteMovies = (id) => {
  const cleanMovies = movies.filter((v) => v.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    name,
    score,
    id: movies.length + 1,
  };
  movies.push(newMovie);
  return newMovie;
};
