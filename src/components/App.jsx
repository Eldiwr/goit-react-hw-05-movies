import { HomePage } from 'pages/HomePage';
import { MovieReview } from 'pages/MovieReview';
import { MoviesPage } from 'pages/MoviesPage';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from "./AppBar/AppBar";

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<AppBar/>}>
            <Route index element={<HomePage/>} />
            <Route path='movies' element={<MoviesPage />} />
            <Route path='/movies/:filmId' element={<MovieReview/>}/>
          </Route>
        </Routes>
      </div>     
    </>
  );
};
