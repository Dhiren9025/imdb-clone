import React from 'react';
//import genreids from '../utility/genre';


// import WatchList from './WatchList';


function MovieCard({ movieObj , poster_path , name , handleAddtoWatchlist , handleRemovefromWatchlist, watchlist }) {




  function doesContain(movieObj) {
    for( let i=0 ; i<watchlist.length ; i++){
      if(watchlist[i].id === movieObj.id)  {
        return true;
      }
    }
return false;
  }


  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`, // Use backticks here
        width: '200px',
        height: '40vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

    {doesContain(movieObj)?
       ( 

      <div onClick={()=>(handleRemovefromWatchlist(movieObj))} className='m-4 flex-col justify-center h-8 w-8 items-center  rounded-xl'> &#10060; </div>
    ) : (

    <div onClick={()=>(handleAddtoWatchlist(movieObj))} className='m-4 flex-col justify-center h-8 w-8 items-center rounded-lg'>  &#128525; </div>
     
  )}

    <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60  rounded-xl'>
    {name} 
    
    </div>
    </div>
  );
}

export default MovieCard;





