import { getMovies, getById, addMovie, deleteMovies } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },

  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovies: (_, { id }) => deleteMovies(id),
  },
};

export default resolvers;
