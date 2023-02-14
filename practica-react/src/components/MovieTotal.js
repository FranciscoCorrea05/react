//import { useRef } from "react";
import { useState, useEffect } from "react";
import { Link, } from "react-router-dom";
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand" >MovFlix</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" >Home</Link>
              </li>
            </ul>
            <form action="" onSubmit={searchMovies} className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" name="search" onChange={(e) => setText(e.target.value)} id="search" />
              <button className="btn btn-outline-info" type="submit">search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">


          {movies.length > 0 ? movies.map((movie) => <Card key={movie.id} movie={movie} />) : <div className="container"><p class="text-center fs-3">no se encontraron resultados para tu busqueda</p></div>}

        </div>
      </div>


    </>
  )
};


export default MovieTotal;