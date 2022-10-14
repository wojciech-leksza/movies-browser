import axios from "axios";
import { api_key, language, genresURL, personDetailsUrl, popularPeopleUrl, searchPeopleUrl } from "../../core/configAPI";

export const getPersonDetails = async (id) => {
    try {
        const response = await axios.get(`${personDetailsUrl}/${id}`, {
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

export const getMovieCredits = async (id) => {
    try {
        const response = await axios.get(`${personDetailsUrl}/${id}/movie_credits`, {
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

const getPopularPeople = async (page = 1) => {
    try {
        const response = await axios.get(popularPeopleUrl, {
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

const getPeopleByQuery = async (page = 1, query) => {
    try {
        const response = await axios.get(searchPeopleUrl, {
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

export const getPeople = (page, query) => {
    if (!!query) {
        return getPeopleByQuery(page, query);
    }

    return getPopularPeople(page);
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