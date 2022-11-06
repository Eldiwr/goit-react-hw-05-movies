import { getMovieCast } from "components/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Cast = () => {

    let { filmId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        getMovieCast(filmId).then(response => {
            setCast(response.cast);
        })
    }, [filmId]);




    return (
        <>
            <h2>Cast</h2>

            <ul>
                {cast.map(({ id, profile_path, name, character }) => {
                    return (

                    <li key={id}>
                            {profile_path ? 
                        <img
                            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                            alt={{ name }}
                        />
                        :
                             <b>Photo is not found</b>
                        }

                        <p>Character: {character}</p>
                        <p>{ name }</p>
                    </li>
                    )

                })}
            </ul>
        </>       
    )
}