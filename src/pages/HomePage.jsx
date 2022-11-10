import { useEffect, useState } from "react";
import { getTrandingMovies } from "components/api";
import { LinkStyle, TrandTitle, TrendMoviesList } from "components/MoviesList/MoviesList.styled";

export default function HomePage () {

    const [movies, setMovies] = useState([]);

    
    useEffect(() => {

        getTrandingMovies().then((data) => {
            setMovies(data.results);
        });
        
    }, []);

    return (
        <>
            <TrandTitle>Tranding today</TrandTitle>

            <ul>
                {movies.map(movie => (
                    <TrendMoviesList key={movie.id}><LinkStyle to={`/movies/${movie.id}`}>{ movie.title }</LinkStyle></TrendMoviesList>
            ))}
            </ul>     
        </>  
    );
};