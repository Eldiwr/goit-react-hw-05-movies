import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearhBar';
import { getMoviesByName } from 'components/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const MoviesPage = () => {

    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState([])
    
    const handleFormSubmit = (value) => {
        setMovieName(value);
    };

    useEffect(() => {
        if (movieName === "" || movieName === null) {
            return;
        };

        getMoviesByName(movieName)
            .then(data => data.results)
            .then(setMovies);
    }, [movieName]);

    return (
        <>
            <SearchBar onSubmit={handleFormSubmit} />
            {movies && <MoviesList movies={movies} />}
        </>
    );
}