import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const apiUrl = 'http://127.0.0.1:8000/api/film'

  const [films, setFilms] = useState([]);
  const [film, setFilm] = useState([]);


  useEffect(() => {
    axios.get(apiUrl)
      .then(res => {
        setFilms(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const getId = (id) => {
    axios.get(`${apiUrl}/${id}`)
      .then(res => {
        console.log(res.data.data)
        setFilm(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };


  const value = {
    setFilms,
    films,
    setFilm,
    film,
    getId
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }