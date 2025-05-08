import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayouts from "./layouts/DefaultLayouts"
import { GlobalProvider } from "./context/GlobalContext";
import HomePage from "./pages/HomePage";
import ShowPage from "./pages/ShowPage";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route path="/" element={<HomePage />} />
            <Route path="film/:id" element={<ShowPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App