import { useLocation } from "react-router-dom";
import { FilmCardWrapper,Poster,DetailsCard,FilmTitle,Datas,DatasTitle,AddTitle,AddList,LinkStyle,AddItem } from "./FilmCard.styled";

export const FilmCard = ({ film, genres }) => {
    const location = useLocation();

    return (

        <>
            <FilmCardWrapper>
                <Poster
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt="poster"
                />

                <DetailsCard>
                    <FilmTitle>{ film.original_title } ({film.release_date.slice(0, 4)})</FilmTitle>

                    <Datas>User Score: {film.vote_average}</Datas>

                    <DatasTitle>Overview</DatasTitle>

                    <Datas>{film.overview}</Datas>
                    <DatasTitle>Genres</DatasTitle>
                    <Datas>{genres}</Datas>
                </DetailsCard>               
            </FilmCardWrapper>

            <AddTitle>Additional information</AddTitle>

            <AddList>
                <AddItem>
                    <LinkStyle to={`cast`} state={location.state}>Cast</LinkStyle>
                </AddItem>

                <AddItem>
                    <LinkStyle to={`reviews`} state={location.state}>Reviews</LinkStyle>
                </AddItem>
            </AddList>
        </>        
    )
}