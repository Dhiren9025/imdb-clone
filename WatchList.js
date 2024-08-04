import React, { useState, useEffect } from "react";
import genreids from "../utility/genre";
import delimg from "../assets/delimg.jpg";
import searchIcon from "../assets/search.webp"; 

function WatchList({ watchlist, handleRemovefromWatchlist, setWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const sortIncreasing = () => {
    const sortedIncreasing = [...watchlist].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList(sortedIncreasing);
  };

  const sortDecreasing = () => {
    const sortedDecreasing = [...watchlist].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
      
    });
    setWatchList(sortedDecreasing);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={
              currGenre === genre
                ? "mx-4 mt-4 bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center cursor-pointer"
                : "mx-4 mt-4 bg-gray-400/50 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center cursor-pointer"
            }
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="flex justify-center my-4 relative">
        <div className="relative">
          <input
            onChange={handleSearch}
            value={search}
            type="text"
            placeholder="Search Movies"
            className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 pr-10 rounded-xl"
          />
          <img
            src={searchIcon}
            alt="Search Icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-7 h-7"
          />
        </div>
      </div>

      <div className="rounded-lg overflow-hidden border border-gray-200 m-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="border-b-2 border-gray-200">
            <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
              <th className="py-2 px-20 text-left text-lg">Name</th>
              {/* Increased text-lg */}
              <th className="py-2 px-6 text-left">
                <div className="flex items-center">
                  <div className="p-2 cursor-pointer" onClick={sortIncreasing}>
                    <i className="fas fa-arrow-up"></i>
                  </div>
                  <div className="px-1 text-lg pl-5s">Ratings</div> 
                  {/* Increased text-lg */}
                  <div className="p-2 cursor-pointer" onClick={sortDecreasing}>
                    <i className="fas fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th className="py-2 px-10 text-left text-lg">Popularity</th>
              {/* Increased text-lg */}
              <th className="py-2 px-8 text-left text-lg">Genre</th>
              {/* Increased text-lg */}
              <th className="py-2 px-6 text-left"></th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre === "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] === currGenre;
                }
              })
              .filter((movieObj) =>
                movieObj.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movieObj) => (
                <tr key={movieObj.id} className="border-b-2">
                  <td className="flex items-center px-4 py-6">
                    <img
                      className="h-[9rem] w-[9rem] rounded-lg"
                      src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}
                      alt={`${movieObj.original_title} Poster`}
                    />
                    <div className="mx-4">{movieObj.title}</div>
                  </td>
                  <td className="py-6 px-14 ">
                    {movieObj.vote_average.toFixed(1)}
                  </td>
                  <td className="py-6 px-12">{movieObj.popularity}</td>
                  <td className="py-6 px-7">
                    {genreids[movieObj.genre_ids[0]]}
                  </td>
                  <td
                    className="py-6 px-7 cursor-pointer relative"
                    onClick={() => handleRemovefromWatchlist(movieObj)}
                  >
                  
                    <img
                      src={delimg}
                      alt="Delete"
                      className="h-10 w-10 transition transform hover:scale-110"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
 
          
        </table>
      </div>
    </>
  );
}

export default WatchList;
