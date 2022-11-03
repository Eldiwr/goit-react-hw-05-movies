import axios from "axios";

const API_KEY = '5955965353f0f95f48fcc339a6e872fc';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrandingMovies = () => {
    const URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    
    return axios.get(URL).then(response => response.data);
};

export const getMoviesByName = (name) => {
    const URL = `${BASE_URL}/search/movie?query=${name}&api_key=${API_KEY}&include_adult=false`;

    return axios.get(URL).then(response => response.data);
};

