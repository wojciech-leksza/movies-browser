import examplePopularMovies from "./examplePopularMovies.json";

const getPopularMovies = () => examplePopularMovies;

const getMovies = () => {
    return getPopularMovies();
};

export default getMovies;