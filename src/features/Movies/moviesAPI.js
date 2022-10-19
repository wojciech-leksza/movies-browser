import axios from "axios";
import { api_key, language, urls } from "../../core/configAPI";

export const getMovieDetails = async (id) => {
    try {
        const response = await axios.get(`${urls.movieDetails}/${id}`, {
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

export const getCredits = async (id) => {
    try {
        const response = await axios.get(`${urls.movieDetails}/${id}/credits`, {
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
const getPopularMovies = async (page = 1) => {
    try {
        const response = await axios.get(urls.popularMovies, {
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
        const response = await axios.get(urls.searchMovies, {
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
        const response = await axios.get(urls.genres, {
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