import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./../pages/movieDetails.module.css";

const MovieDetails = function () {
    const [movieDetails, setMovieDetails] = React.useState([]);

    const params = useParams()
    const id = params.id;
    // console.log(movieDetails);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e072cb594a8dfa38268edf5fc8ef515d&language=en-US`)
            .then(res => {
                setMovieDetails(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const backImg = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})`,
    }



    return (
        <>
            <div className={s.movie_card} id="bright">
                <div className={s.info_section}>
                    <div className={s.movie_header}>
                        <img className={s.locandina} src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} />
                        <h1>{movieDetails.title}</h1>
                        <h4>{movieDetails.tagline}</h4>
                        <span className={s.minutes}>{`${movieDetails.runtime} min`}</span>
                        <p className={s.type}>{movieDetails.status}</p>
                    </div>
                    <div className={s.movie_desc}>
                        <p className={s.text}>
                            {movieDetails.overview}
                        </p>
                    </div>
                    {/* <div className={s.movie_social}>
                        <ul>
                            <li><i className={s.material-icons}>share</i></li>
                            <li><i className={s.material-icons}></i></li>
                            <li><i className={s.material-icons}>chat_bubble</i></li>
                        </ul>
                    </div> */}
                </div>
                <div style={backImg} className={s.blur_back}></div>
            </div>

        </>
    )
}

export default MovieDetails;

