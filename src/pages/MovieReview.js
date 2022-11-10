import { useEffect, useState} from "react"
import { getMovieDetail } from "components/api";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { FilmCard } from "components/FilmCard/FilmCard";
import { BackButton } from "components/BackButton/BackButton";

export default function MovieReview () {
    
    const location = useLocation();
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
            <BackButton location={location} />
            {film && <FilmCard film={film} genres={genres} />}
            <Outlet/>
        </>
    )
}