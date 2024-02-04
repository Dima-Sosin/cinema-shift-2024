import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import { AfishaPage } from "./pages/afisha-page"
import { ProfilePage } from "./pages/profile-page"
import { TicketsPage } from "./pages/tickets-page"
import { FilmPage } from "./pages/film-page"
import { request } from "./api/request"

export default function App() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    request
      .fetch("/cinema/today")
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.films)
      })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AfishaPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        {films.map((film) => (
          <Route
            path={"/film/" + film.id}
            element={<FilmPage num={film.id} />}
            key={film.id}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
