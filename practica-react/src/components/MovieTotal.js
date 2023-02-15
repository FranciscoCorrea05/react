import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const MovieTotal = () => {
  const [text, setText] = useState("");

  const [movies, setMovies] = useState([]);

  const fetchMovies = async (text) => {
    const type = text ? "search" : "discover"
    const { data: { results },
    } = await axios.get(`https://api.themoviedb.org/3/${type}/movie`, {
      params: {
        api_key: "60c2f16314b2dc38c94e2d6fac935b0f",
        query: text,
      },
    });

    setMovies(results)
  }

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(text)
  }

  useEffect(() => {
    fetchMovies();
  }, [])


  return (
    <>
      <div className="container py-3">
            <form action="" onSubmit={searchMovies} className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" name="search" onChange={(e) => setText(e.target.value)} id="search" />
              <button className="btn btn-outline-dark" type="submit">search</button>
            </form>
            </div>
     
      <div className="container ">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">


          {movies.length > 0 ? movies.map((movie) => <Card key={movie.id} movie={movie} />) : <div className="container"><p class="text-center fs-3">no se encontraron resultados para tu busqueda</p></div>}

        </div>
      </div>


    </>
  )
};


export default MovieTotal;