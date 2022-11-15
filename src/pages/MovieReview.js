import { useEffect, useState} from "react"
import { getMovieDetail } from "components/api";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { FilmCard } from "components/FilmCard/FilmCard";
import { BackButton } from "components/BackButton/BackButton";

export default function MovieReview () {
    
    const location = useLocation();
    const { filmId } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        getMovieDetail(filmId).then(setFilm);
    }, [filmId]);

    return (
        <>  
            <BackButton location={location} />
            {film === null ? <b>Loading ...</b> : <FilmCard film={film} />}
            <Outlet/>
        </>
    )
}