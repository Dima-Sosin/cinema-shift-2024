import "./App.css"
import { Routes, Route } from "react-router-dom"
import { PageHeader } from "./components/page-header/index"
import { AfishaPage } from "./pages/afisha-page"
import { ProfilePage } from "./pages/profile-page"
import { TicketsPage } from "./pages/tickets-page"
import { FilmPage } from "./pages/film-page"

export default function App() {

  return (
    <>
      <PageHeader />
      <Routes>
        <Route path="" element={<AfishaPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path={"/film/:filmId"} element={<FilmPage />} />
      </Routes>
    </>
  )
}
