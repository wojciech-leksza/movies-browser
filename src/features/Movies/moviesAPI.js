import axios from "axios";
import { api_key, language, popularMoviesUrl, searchMoviesURL, genresURL } from "../../core/configAPI";

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

export const getMovies = (page, query) => {
    if (!!query) {
        return getMoviesByQuery(page, query);
    }

    return getPopularMovies(page);
};

export const getGenres = async () => {
    try {
        const response = await axios.get(genresURL, {
            params: {
                api_key,
                language,
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error);
    };  
};