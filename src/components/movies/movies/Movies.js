import React, {useEffect, useState} from 'react'
import { useNavigate  } from "react-router-dom";
import Movie from "src/components/movies/movie/Movie.js";
import './Movies.scss'
import axios from 'axios'
import Loading from "src/components/loading/Loading.js";

function Movies() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] =  useState(false);
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const [searchedMovies, setSearchedMovies] = useState([])

    const getMovies = async () => {
        setLoading(true)
        const data = axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=f65d02ecee3c79a45518b9bcb6ccc7c8&language=en-US&page=1`
        )
        const result = await data
        result.data.results.forEach((movie) => {
            setMovies(movies => [...movies, movie])
        })
        setLoading(false)
    }

    useEffect(() => {
        if (searchInput === '') {
            getMovies()
        }
    }, []);
    const checkTitleLength = (title) => {
        if (title.length > 25){
            return <span>...</span>;
        }
    }
    const searchMovies = async (e) => {
        if (e.key === "Enter") {
            // e.target.blur();
            setLoading(true)
            const data = axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=f65d02ecee3c79a45518b9bcb6ccc7c8&language=en-US&page=1&query=${searchInput}`
            )
            const result = await data
            result.data.results.forEach((movie) => {
                setSearchedMovies(movies => [...movies, movie])
            })
            setLoading(false)
        }
    };
    const clearSearch = () => {
        setSearchInput('')
        setSearchedMovies([])
    }

    return (
        <div className="home">
            {/*Search*/}
            <div className="container search">
                <input value={searchInput} onChange={e => setSearchInput(e.target.value)} onKeyUp={(e) => searchMovies(e)} type="text" placeholder="Search"/>
                {
                    searchInput !== '' ?
                        (<button onClick={clearSearch} className="button">Clear Search</button>)
                        :
                        null
                }

            </div>

            {
                loading ? (
                    <Loading />
                ) : (
                    <div className="container movies">
                        {
                            searchInput !== '' ?
                                (
                                    <div id="movie-grid" className="movies-grid">
                                        {searchedMovies.map((movie, index) => (
                                            <div className="movie" key={index}>
                                                <div className="movie-img">
                                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                                                    <p className="review">{ movie.vote_average }</p>
                                                    <p className="overview">{ movie.overview }</p>
                                                </div>
                                                <div className="info">
                                                    <p className="title">
                                                        { movie.title.slice(0, 25)}
                                                        { checkTitleLength(movie.title) }
                                                    </p>
                                                    <p className="release">
                                                        Released:
                                                        {
                                                            new Date(movie.release_date).toLocaleString('en-us', {
                                                                month: 'long',
                                                                day: 'numeric',
                                                                year: 'numeric',
                                                            })
                                                        }
                                                    </p>
                                                    <button className="button button-light" onClick={() => navigate(`/movie/${movie.id}`)}>Get More Info</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                                :
                                (
                                    <div id="movie-grid" className="movies-grid">
                                        {movies.map((movie, index) => (
                                            <div className="movie" key={index}>
                                                <div className="movie-img">
                                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                                                    <p className="review">{ movie.vote_average }</p>
                                                    <p className="overview">{ movie.overview }</p>
                                                </div>
                                                <div className="info">
                                                    <p className="title">
                                                        { movie.title.slice(0, 25)}
                                                        { checkTitleLength(movie.title) }
                                                    </p>
                                                    <p className="release">
                                                        Released:
                                                        {
                                                            new Date(movie.release_date).toLocaleString('en-us', {
                                                                month: 'long',
                                                                day: 'numeric',
                                                                year: 'numeric',
                                                            })
                                                        }
                                                    </p>
                                                    <button className="button button-light" onClick={() => navigate(`/movie/${movie.id}`)}>Get More Info</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Movies
