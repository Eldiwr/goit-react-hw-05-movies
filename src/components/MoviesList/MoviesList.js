import { useLocation } from "react-router-dom";
import { LinkStyle, MovieItem } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {

    const location = useLocation();

    return (
        <ul>
            {movies.map(movie => (
                <MovieItem key={movie.id}><LinkStyle
                    to={`/movies/${movie.id}`}
                    state={{from: location}}
                >{movie.original_title}</LinkStyle></MovieItem>
            ))}
        </ul>
    )
};