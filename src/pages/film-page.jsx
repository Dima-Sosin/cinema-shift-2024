import { PageHeader } from "../components/page-header"
import { FilmInf } from "../components/film_inf"

export function FilmPage({ num }) {
  return (
    <>
      <PageHeader />
      <FilmInf num={num} />
    </>
  )
}
