import { HomePage } from 'pages/HomePage';
import { MovieReview } from 'pages/MovieReview';
import { MoviesPage } from 'pages/MoviesPage';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from "./AppBar/AppBar";
import { Cast } from './Info/Cast';
import { Reviews } from './Info/Reviews';

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<AppBar/>}>
            <Route index element={<HomePage/>} />
            <Route path='movies' element={<MoviesPage />} />
            <Route path='/movies/:filmId' element={<MovieReview />}>
              <Route path='cast' element={<Cast/>}></Route>
              <Route path='reviews' element={<Reviews/>}></Route>
            </Route>
          </Route>
        </Routes>
      </div>     
    </>
  );
};
