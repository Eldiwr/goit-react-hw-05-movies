import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "components/api";

export const Reviews = () => {
    let { filmId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getMovieReviews(filmId).then(response => {
            setReviews(response.results)
        })

    }, [filmId]);

    return (
        <>
            <h3>Reviews</h3>

            <ul>
                {reviews.length !== 0 ? (reviews.map(({ id, author, content }) => (
                    <li key={id}>
                        <p>Author: {author}</p>
                        <p>{content}</p>
                    </li>
                ))) : (<b>Review is not found</b>)}
            </ul>
        </>
    )
}