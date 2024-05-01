

const MoviesList = ({ movies }) => {
  return (
    <div style={{ padding:"7px"}}>
         <ul style={{listStyle:"none", color:"black"}}>
      {movies.map((movie) => (
        <li style={{ display:"flex"}} key={movie.id}> 
          <img style={{width:"233px", padding:"9px"}} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
          <div style={{margin:"7px"}}>
          <h4 style={{marginTop:"9px", color:"white"}}>{movie.original_title}</h4>
            <h4 style={{marginTop:"9px", color:"white"}}>{movie.vote_average}</h4>
          <h4 style={{marginTop:"9px", color:"white"}}>{movie.release_date}</h4>
          </div>
        </li>
      ))}
    </ul>
    </div>
   
  );
};

export default MoviesList;
