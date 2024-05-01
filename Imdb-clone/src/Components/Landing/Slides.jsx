import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slides = ({ movies }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {movies.map((movie) => (
          <div key={movie.id} style={{ marginBottom: '30px' }}>
            <img
              style={{ width: '100%', height: '100%' }}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.original_title}
            />
            <h4 style={{ color: 'white' }}>{movie.original_title}</h4>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slides;


