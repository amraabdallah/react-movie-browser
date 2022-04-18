import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Movies from './pages/movies';
import MovieDetails from './pages/moviesDetails';
import FavouriteList from './pages/FavouriteList';
import NotFound from './pages/NotFound';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Movies />} />
        <Route path={"/movie-details/:id"} element={<MovieDetails />} />
        <Route path={"/favourite"} element={<FavouriteList />} />
        <Route path={"*"} element={<NotFound />} />"
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
