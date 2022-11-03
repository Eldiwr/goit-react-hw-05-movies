import { Link } from "react-router-dom"

export const MoviesList = ({ movies }) => {

    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}><Link>{movie.original_title}</Link></li>
            ))}
        </ul>
    )
};