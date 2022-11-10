import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from "./AppBar/AppBar";
import { Cast } from './Info/Cast';
import { Reviews } from './Info/Reviews';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieReview = lazy(() => import('../pages/MovieReview'));

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<AppBar/>}>
            <Suspense>
              <Route index element={<HomePage/>} />
              <Route path='movies' element={<MoviesPage />} />
              <Route path='/movies/:filmId' element={<MovieReview />}>
                <Route path='cast' element={<Cast/>}></Route>
                <Route path='reviews' element={<Reviews/>}></Route>
              </Route>
            </Suspense>
          </Route>
        </Routes>
      </div>     
    </>
  );
};
