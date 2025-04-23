import React from 'react'
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';

const MovieCard = ({ movie }) => {
    const moveList = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western"
    };

    return (
    <div
    style={{backgroundImage:"url("+`
        https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`+ ")"}}
    className='movie-card'
    >
        <div className='overlay'>
            <h1>{movie.title}</h1>
            {movie.genre_ids.map((id) => {
                const genreName = moveList[id] || "Unknown";
                return (
                    <Badge bg="danger" key={id}>
                    {genreName}
                    </Badge>
                );
            })}
            <div>
                <div>vote: {movie.vote_average}</div>
                <div>popularity: {movie.popularity}</div>
                <div>age: {movie.adult ? "over18" : "under18"}</div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard