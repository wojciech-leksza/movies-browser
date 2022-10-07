import axios from "axios";
import { api_key, language, popularMoviesUrl } from "./configAPI";

const getMovies = async (page = 1) => {
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

export default getMovies;