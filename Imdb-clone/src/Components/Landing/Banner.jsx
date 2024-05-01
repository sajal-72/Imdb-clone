import "./banner.css"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Banner = ({movies}) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };

  return (
    <div style={{width:'69%'}}>
      <Carousel  responsive={responsive}
       swipeable={false}
       draggable={false}
       infinite={true}
       autoPlay={true}
       autoPlaySpeed={3000}
       >
      {movies.map((movie) => (
             <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt="banner"
          />
        ))}
      </Carousel>
    </div>
  )
}

export default Banner
