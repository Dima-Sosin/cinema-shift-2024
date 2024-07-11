import { FilmInf } from "../../components/film_inf"
import { Schedule } from "../../components/schedule"
import { useParams } from "react-router-dom"
import { BtnBack } from "../../components/button-back"

export function FilmPage() {
    const { filmId } = useParams()
    
    return (
        <div className="page">
            <div className="container">
                <BtnBack/>
                <FilmInf filmId={filmId} />
            </div>
            <div className="container">
                <Schedule filmId={filmId} />
            </div>
        </div>
    )
}
