
import { useGlobalContext } from "../context/GlobalContext"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

function ShowPage() {
  const { film, getId } = useGlobalContext()
  const { id } = useParams()

  useEffect(() => {
    getId(id)
  }, [])
  return (
    <>
      <div class="bg-black min-h-screen">
        <div class="mx-auto container text-center">
          <h5 class="mb-4 text-3xl font-bold leading-none tracking-tigh md:text-3xl lg:text-5xl text-white pt-6">Ecco il film appena aggiunto da te</h5>
          <h5 class="font-bold text-4xl mb-2 text-white">{film.title_film}</h5>
          <div class="container max-w-4xl mx-auto p-4 sm:grid sm:grid-cols-2 sm:gap-6">

            <div>
              <img class="object-cover w-full" src={film.image} alt="" />
            </div>

            <div class="text-white">
              <table class="table-auto">
                <tbody>
                  <tr class="border-b">
                    <td class="font-semibold py-2 px-4">Trama</td>
                    <td class="py-2 px-4">{film.plot}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="font-semibold py-2 px-4">Anno</td>
                    <td class="py-2 px-4">{film.year}</td>
                  </tr>

                  <tr class="border-b">
                    <td class="font-semibold py-2 px-4">Durata</td>
                    <td class="py-2 px-4">{film.duration}</td>
                  </tr>

                  <tr class="border-b">
                    <td class="font-semibold py-2 px-4">Genere</td>
                    <td class="py-2 px-4">
                      {film.genres?.map(genre => genre.title_genre).join(', ')}
                    </td>
                  </tr>


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowPage