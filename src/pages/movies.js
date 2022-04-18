import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./../components/movieCard";


const Movies = () => {
    const [movies, setMovies] = React.useState([]);

    const [page, setPage] = React.useState(1);

    const increasePage = () => {
        setPage(page + 1);
    }
    const decreasePage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e072cb594a8dfa38268edf5fc8ef515d&language=en-US&page=${page}`)
            .then(res => {
                console.log(page);
                setMovies(res.data.results);
            })
            .catch(err => {
                console.log(err);
            })
    }, [page])


    return (
        <div className="container-fluid bg-trasparent my-4 p-3">
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">

                {movies.map(movie => {
                    return <MovieCard key={movie.id} data={movie} />
                })}

            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center my-4">
                    <button onClick={decreasePage} className="btn btn-outline-secondary mx-1">Prev</button>
                    <button onClick={increasePage} className="btn btn-outline-secondary mx-2">Next</button>
                </div>
                    <span className="mx-1 text-center fw-light">Page: {page}</span>
            </div>
        </div>
            );
}


            export default Movies;
