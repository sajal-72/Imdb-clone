import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import {
  POPULAR_API_URL,
  TOPRATED_API_URL,
  UPCOMING_API_URL,
  type
} from "../Constants/Constants";
import Movieslist from "../Components/Landing/Movieslist";

const CategoryMovies = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let API_URL = "";

      if (category === "popular") {
        API_URL = POPULAR_API_URL;
      } else if (category === "upcoming") {
        API_URL = UPCOMING_API_URL;
      } else if (category === "toprated") {
        API_URL = TOPRATED_API_URL;
      }

      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

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
    },
  };

  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {movies.map((movie) => (
          <div key={movie.id} style={{ backgroundColor: "black" }}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.original_title}
              />
            </Link>
          </div>
        ))}
      </Carousel>
      <div style={{ padding: "7px" }}>
        <h3  style={{ color:"white" }}>IMDb Charts</h3>
        <h2  style={{ color:"white" }}>IMDb {type[category]} Movies</h2> 
        <h4  style={{ color:"white" }}>As determined by IMDb Users</h4>
        <hr />
        <Movieslist movies={movies} />
      </div>
    </div>
  );
};

export default CategoryMovies;
