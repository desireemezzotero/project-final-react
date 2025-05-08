import { useGlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom";
function HomePage() {
  const { setFilms, films } = useGlobalContext();

  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="mx-auto container text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-3xl lg:text-5xl text-white pt-6">SCEGLI IL FILM CHE FA AL CASO TUO!</h1>
          <div className="flex justify-items-center justify-center flex-wrap">
            {films?.map(film =>
              <Link to={`film/${film.id}`} key={film.id} >
                <img className="h-[150px] w-[150px] m-4 object-cover hover:scale-125 transition-transform duration-300 " src={film.image} alt="image-film" />
                <p className="text-white font-bold"> {film.title_film}</p>
              </Link>
            )}
          </div>
        </div>
      </div >
    </>
  )
}

export default HomePage