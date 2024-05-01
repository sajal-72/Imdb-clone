import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import CategoryMovies from "./Pages/CategoryMovies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./Pages/Movie";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/categories" element={<CategoryMovies />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route
            path="/categories/popular"
            element={<CategoryMovies category={"popular"} />}
          />
          <Route
            path="/categories/upcoming"
            element={<CategoryMovies category={"upcoming"} />}
          />
          <Route
            path="/categories/toprated"
            element={<CategoryMovies category={"toprated"} />}
          />
          <Route
          path="movie/:id" element={<Movie />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
