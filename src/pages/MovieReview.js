import { useEffect, useState, useLocation } from "react"
import { getMovieDetail } from "components/api";
import { useParams } from "react-router-dom";
import { FilmCard } from "components/FilmCard/FilmCard";

export const MovieReview = () => {

    // const location = useLocation();
    const { filmId } = useParams();
    const [film, setFilm] = useState(null);
    const [genres, setGenres] = useState('');

    useEffect(() => {
        getMovieDetail(filmId).then(setFilm);
    }, [filmId]);

    useEffect(() => {
        if (!film) {
            return;
        };

        let names = film.genres;

        const string = names.map(name => name.name).join(',');
        setGenres(string);
        
    }, [film]);

    return (
        <>
            {film && <FilmCard films={film} genres={genres} />}
        </>
    )
}