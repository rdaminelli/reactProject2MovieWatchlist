import React from "react";

export default function MovieCard ({ movie }) {
    return (
        <div classname="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                <h3>{movie.original_title}</h3>
            </div>
            <button>Add to List</button>
        </div>
    );
};