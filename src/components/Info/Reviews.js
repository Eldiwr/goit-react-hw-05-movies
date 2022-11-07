import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "components/api";
import { ReviewList, ReviewItem,AddTitle } from "./Info.styled";

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
            <AddTitle>Reviews</AddTitle>

            <ReviewList>
                {reviews.length !== 0 ? (reviews.map(({ id, author, content }) => (
                    <ReviewItem key={id}>
                        <p>Author: {author}</p>
                        <p>{content}</p>
                    </ReviewItem>
                ))) : (<b>Review is not found</b>)}
            </ReviewList>
        </>
    )
}