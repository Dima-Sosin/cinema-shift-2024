import { FilmInf } from "../components/film_inf"
import { Schedule } from "../components/schedule"
import {useParams} from "react-router-dom"

export function FilmPage() {
  const {filmId} = useParams()

  return (
    <>
      <FilmInf filmId={filmId} />
      <Schedule filmId={filmId}/>
    </>
  )
}
