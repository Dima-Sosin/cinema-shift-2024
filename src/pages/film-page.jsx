import { PageHeader } from "../components/page-header"
import { FilmInf } from "../components/film_inf"
import { Schedule } from "../components/schedule"

export function FilmPage({ num }) {
  return (
    <>
      <PageHeader />
      <FilmInf num={num} />
      <Schedule num={num}/>
    </>
  )
}
