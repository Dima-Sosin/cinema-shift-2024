import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AfishaPage } from "./pages/afisha-page"
import { FilmPage } from "./pages/film-page"

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<AfishaPage />} />
            <Route path="film/1" element={<FilmPage />} />
         </Routes>
      </BrowserRouter>
   )
}
