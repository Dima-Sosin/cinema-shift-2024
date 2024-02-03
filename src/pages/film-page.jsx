import { PageHeader } from "../components/page-header"
import { FilmInf } from "../components/inf_film"

export function FilmPage({ num }) {
   return (
      <>
         <PageHeader />
         <FilmInf num={num} />
      </>
   )
}
