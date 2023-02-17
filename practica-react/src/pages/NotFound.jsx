import { Link } from "react-router-dom";
const NotFound= () => {
    return (
        <>
        <div className="container py-5">
<figure class="text-center">
  <blockquote class="blockquote">
    <h2>La pagina a la cual desea acceder, no existe.</h2>
  </blockquote>
  <figcaption class="blockquote-footer">
       <cite >error de tipo 404</cite>
  </figcaption>
</figure>
        <div class="d-grid gap-2 col-6 mx-auto">
        <Link to="/" className=" btn btn-dark btn-lg">volver</Link>
        </div>
        </div>
      </>
    );
}

export default NotFound;