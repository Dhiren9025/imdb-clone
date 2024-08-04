import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

function Movies({
  handleAddtoWatchlist,
  handleRemovefromWatchlist,
  watchlist,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo((prevPageNo) => prevPageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo((prevPageNo) => prevPageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=99177e48b0799c9459d8fd1c705827f5&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="m-5 text-center text-3xl font-bold">Trending Movies</div>
      <div className="flex flex-wrap justify-center gap-8">
        {movies.map((movieObj) => (
          <MovieCard
            key={movieObj.id}
            movieObj={movieObj}
            poster_path={movieObj.poster_path}
            name={movieObj.original_title}
            handleAddtoWatchlist={handleAddtoWatchlist}
            handleRemovefromWatchlist={handleRemovefromWatchlist}
            watchlist={watchlist}
          />
        ))}
      </div>
      
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
}

export default Movies;
