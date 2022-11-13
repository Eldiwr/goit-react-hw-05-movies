import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearhBar';
import { getMoviesByName } from 'components/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useLocation, useNavigate} from 'react-router-dom';

export default function MoviesPage () {

    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search).get('movieName') ?? '';


    useEffect(() => {
        if (query === "") {
            return;
        };

        getMoviesByName(query)
            .then(data => data.results)
            .then(setMovies);
    }, [query]);

    const handleFormSubmit = (value) => { 
        navigate({ ...location, search: `movieName=${value}`})
    };

    return (
        <>
            <SearchBar onSubmit={handleFormSubmit} />
            {movies && <MoviesList movies={movies} />}
        </>
    );
}