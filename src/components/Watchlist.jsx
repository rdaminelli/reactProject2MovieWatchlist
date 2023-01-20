import React from "react";
import MovieCard from "./MovieCard";

export default function Watchlist ({ list, removeMovie }) {
    const movieDisplay = list.map((movie, index) => {
        return <MovieCard movie={movie} removeMovie={removeMovie} list={list} />
    })

    return (
        <div className="watchlist">
            <h1>My watchlist</h1>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    );
};
