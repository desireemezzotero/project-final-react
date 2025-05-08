
import { useGlobalContext } from "../context/GlobalContext"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

function ShowPage() {
  const { film, setFilm, getId } = useGlobalContext()
  const { id } = useParams()

  useEffect(() => {
    getId(id)
  }, [])
  return (
    <>
      <div class="bg-black min-h-screen">
        <div class="mx-auto container text-center">
          <h4 class="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-3xl lg:text-5xl text-white pt-6">Ecco il film appena aggiunto da te</h4>


          <div class="flex flex-col items-center text-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-x">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={film.image} alt="" />
            <div class="p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{film.title_film}</h5>

              <div class="flex">
                <p class="mb-3 text-white font-bold mr-3">Trama: </p>
                <p>
                  {film.plot}
                </p>
              </div>

              <div class="flex">
                <p class="mb-3 text-white font-bold mr-3">year: </p>
                <p>
                  {film.year}
                </p>
              </div>

              <div class="flex">
                <p class="mb-3 text-white font-bold mr-3">Duration: </p>
                <p>
                  {film.duration}
                </p>
              </div>

              <div class="flex">
                <p class="mb-3 text-white font-bold mr-3">Genre: </p>
                {film.genre?.map(genre => {
                  <p> {genre.title_genre} </p>
                })}
              </div>

            </div>
          </div>

        </div>
      </div></>
  )
}

export default ShowPage