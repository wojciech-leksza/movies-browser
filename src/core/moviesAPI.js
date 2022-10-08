import axios from "axios";
import { api_key, language, popularMoviesUrl, searchMoviesURL } from "./configAPI";

const getPopularMovies = async (page = 1) => {
    try {
        const response = await axios.get(popularMoviesUrl, {
            params: {
                api_key,
                language,
                page,
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error);
    };  
};

const getMoviesByQuery = async (page = 1, query) => {
    try {
        const response = await axios.get(searchMoviesURL, {
            params: {
                api_key,
                language,
                query,
                page,
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error);
    };  
};

const getMovies = (page, query) => {
    if (!!query) {
        return getMoviesByQuery(page, query);
    }

    return getPopularMovies(page);
};

export default getMovies;