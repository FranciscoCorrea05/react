import { Component } from "react";
import { Link } from "react-router-dom";

class Detail extends Component {
  constructor({ match }) {
    super();
    this.state = {
      id: match.params.id,
      movieData: {},
    };

  }


  componentDidMount() {
    //`https://api.themoviedb.org/3/discover/movie?api_key=60c2f16314b2dc38c94e2d6fac935b0f&language=es-ES&sort_by=popularity.desc&page=1`
    const API_BASE_URL = "https://api.themoviedb.org/3/movie/";
    const API_MOVIE_ID = this.state.id;
    const API_KEY = "?api_key=60c2f16314b2dc38c94e2d6fac935b0f&language=es-ES&sort_by=popularity.desc&page=1";

    const API_URL = `${API_BASE_URL}${API_MOVIE_ID}${API_KEY}`;


    fetch(API_URL)
      .then(res => res.json())
      .then((data) => {
        this.setState({ movieData: data });
      });
  }

  render() {
    const { title, overview, vote_average, poster_path} = this.state.movieData;
    const generos = this.state.movieData.genres?.map((genre) => {
      return (<li>{genre.name} </li>)
    });
    return (
      <>
        <div className=" container-fluid row align-middle mx-auto py-3 "  >
          <div className="col-12 col-md-4 mx-auto ">
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} id="movieImg" className="rounded img-thumbnail" alt="movie" />
          </div>
          <div className="col-12 col-md-8 " id="movieInfo" >
            <ul>
              <h2>titulo:</h2>
              <p>  {title}  </p>
              <h5>generos: </h5>
              <ul>
                <li> {generos} </li>
              </ul>
              <h5> reseña:</h5>
              <p>{overview}</p>
              <h5 id="rating">calificacion:</h5>
              <p> {vote_average} </p>
            </ul>
            <Link to="/" className="nav-link active btn btn-dark my-3 col-6 mx-auto">volver al listado</Link>
          </div>
        </div>
      </>
    );



  }

}


export default Detail;
