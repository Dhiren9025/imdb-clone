import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setWatchList] = useState([]);

  useEffect(() => {
    let storedWatchlist = localStorage.getItem("watchlist");
    if (storedWatchlist) {
      setWatchList(JSON.parse(storedWatchlist));
    }
  }, []);

  let handleAddtoWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    setWatchList(newWatchList);
    localStorage.setItem("watchlist", JSON.stringify(newWatchList));
  };

  let handleRemovefromWatchlist = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchList(filteredWatchList);
    localStorage.setItem("watchlist", JSON.stringify(filteredWatchList));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies
                watchlist={watchlist}
                handleAddtoWatchlist={handleAddtoWatchlist}
                handleRemovefromWatchlist={handleRemovefromWatchlist}
              />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={
            <WatchList
              watchlist={watchlist}
              setWatchList={setWatchList}
              handleRemovefromWatchlist={handleRemovefromWatchlist}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
