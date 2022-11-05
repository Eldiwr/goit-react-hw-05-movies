import { useLocation } from "react-router-dom"

export const FilmCard = ({ films, genres }) => {
    const location = useLocation();

    return (

        <>
            <img
                src={`https://image.tmdb.org/t/p/w500${films.poster_path}`}
                alt="poster"
            />


        </>
        
    )
}