import { NavLink, useLocation } from "react-router-dom"

export const FilmCard = ({ film, genres }) => {
    const location = useLocation();

    return (

        <>
            <div>
                <img
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt="poster"
                />

                <h2>{ film.original_title } ({film.release_date.slice(0, 4)})</h2>

                <p>User Score: {film.vote_average}</p>

                <h3>Overview</h3>

                <p>{film.overview}</p>
                <p>Genres</p>
                <p>{genres}</p>
            </div>

            <h3>Additional information</h3>

            <ul>
                <li>
                    <NavLink to={`/movies/${film.id}/cast`} state={location.state}>Cast</NavLink>
                </li>

                <li>
                    <NavLink to={`/movies/${film.id}/reviews`} state={location.state}>Reviews</NavLink>
                </li>
            </ul>
        </>

        


        
    )
}