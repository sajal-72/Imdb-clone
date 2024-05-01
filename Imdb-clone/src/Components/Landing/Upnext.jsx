
const Upnext = ({movies}) => {
  return (
    <div style={{width:'29%', color:'white', padding:'0 20px 30px 30px', justifyContent:'center'}}>
        <h3 style={{color:'#F5C518', marginLeft:'20px'}}>Up Next</h3>
       {movies.splice(0, 3).map((movie) => (
        <div style={{display:'flex'}}>
             <img
          style={{width:'100px',margin:'11px'}}
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="banner"
          />
          <h4 style={{margin:'11px', marginTop:'63px'}}>{movie.original_title}</h4>
        </div>
         
        ))}
       
    </div>
  )
}

export default Upnext
