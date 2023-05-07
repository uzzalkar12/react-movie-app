import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BallTriangle } from  'react-loader-spinner'
import Loading from "../../loading/Loading.js";
import './Movie.scss'

function Movie() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [movie, setMovie] =  useState('');
    const [loading, setLoading] =  useState(false);
    const getSingleMovie = async() => {
        setLoading(true)
        const data = axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=f65d02ecee3c79a45518b9bcb6ccc7c8&language=en-US`
        )
        const result = await data
        setMovie(result.data)
        setLoading(false);
    }

    useEffect(() => {
        getSingleMovie()
    }, []);

    return (
        <>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className="single-movie container">
                        <button className="button" onClick={() => navigate('/')}>Back</button>
                        <div className="movie-info">
                            <div className="movie-img">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                            </div>
                            <div className="movie-content">
                                <h1>Title: { movie.title }</h1>
                                <p className="movie-fact tagline">
                                    <span>Tagline:</span> "{ movie.tagline }"
                                </p>
                                <p className="movie-fact">
                                    <span>Released: </span>
                                    {
                                        new Date(movie?.release_date).toLocaleString('en-us', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })
                                    }
                                </p>
                                <p className="movie-fact">
                                    <span>Duration:</span> { movie.runtime } minutes
                                </p>
                                <p className="movie-fact">
                                    <span>Revenue: </span>
                                    {
                                        movie && movie.revenue.toLocaleString('en-us', {
                                            style: 'currency',
                                            currency: 'USD',
                                        })
                                    }
                                </p>
                                <p className="movie-fact"><span>Overview:</span> { movie.overview }</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Movie
