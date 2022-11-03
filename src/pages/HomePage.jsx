import { useEffect, useState } from "react";
import { getTrandingMovies } from "components/api";
import { NavLink } from "react-router-dom";

export const HomePage = () => {

    const [movies, setMovies] = useState([]);

    
    useEffect(() => {

        getTrandingMovies().then((data) => {
            setMovies(data.results);
        });
        
    }, []);

    return (
        <>
            <h1>Tranding today</h1>

            <ul>
                {movies.map(movie => (
                    <li key={movie.id}><NavLink to={`/movies/${movie.id}`}>{ movie.title }</NavLink></li>
            ))}
            </ul>     
        </>  
    );
};