import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearhBar';
import { getMoviesByName } from 'components/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export default function MoviesPage () {

    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const search = searchParams.get('movieName');

    useEffect(() => {
        if (movieName === "") {
            return;
        };

        getMoviesByName(movieName)
            .then(data => data.results)
            .then(setMovies);
    }, [movieName]);

    useEffect(() => {
        if (search === null) {
            return;
        }

        getMoviesByName(search).then(data => data.results).then(setMovies);

    }, [search]);

    const handleFormSubmit = (value) => {
        setMovieName(value);
        navigate({ ...location, search: `movieName=${value}`})
    };

    return (
        <>
            <SearchBar onSubmit={handleFormSubmit} />
            {movies && <MoviesList movies={movies} />}
        </>
    );
}